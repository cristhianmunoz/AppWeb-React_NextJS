import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
import {Socket} from "socket.io";

@WebSocketGateway(
    11202, //puerto donde esta ecuchando el servidor de websockets
    {
        cors:{
            origin: '*',//Habilitando la conexión desde cualquier IP
        }
    }
)
export class EventosGateway{
    @SubscribeMessage('hola')
    devolverHola(
        @MessageBody()
            message:{ mensaje: string},
        @ConnectedSocket()
            socket: Socket //import {Server, Socket} from 'socket.io';
    ){
        console.log('message',message);
        socket.broadcast//broadcast => TODOS LOS CLIENTES CONECTADOS y esten escuchando al evento "escucharEventoHola" les llegue el mensaje
            .emit(
                'escucharEventoHola',//Nombre dele vento que vamos a enviar a los clientes conectados
                {
                    mensaje:"Bienvenido" + message.mensaje
                }
            );
        return{mensaje:'ok'};//Callback del método "Hola"
    }


    @SubscribeMessage('unirseSala')//Nombre metodo
    unirseSala(
        @MessageBody()
            message:{ salaId: string, nombre: string}, //parámetros del método
        @ConnectedSocket()
            socket:Socket
    ){
        socket.join(message.salaId); //socket.join agrupa a los clientes de websockets
                                    // segun un identificador. Al unirse a la sala
                                    // podemos escuhar los mensajes de esa sala
        const mensajeDeBienvenidaSala={
            mensaje: `Bienvenido ${message.nombre} a la sala ${message.salaId}`
        };
        socket.broadcast
            .to(message.salaId) //Manda el mesnsage a un grupo en específico según el Identificador
            .emit('escucharEventoSala', //los que ESCUCHAN el evento en este grupo
                mensajeDeBienvenidaSala);   //reciben ese mensaje
        return {mensaje: 'ok'} //CallBack del método "unirseSala"
    }

    @SubscribeMessage('enviarMensaje') //Decoradores
    enviarMensaje(
        @MessageBody()
            message:{ salaId: string, nombre: string, mensaje: string },
        @ConnectedSocket()
            socket: Socket
    ){
        //Backend
        const mensajeSala = {
            nombre: message.nombre,
            mensaje: message.mensaje,
            salaId: message.salaId,
        };
        socket.broadcast
            .to(message.salaId) //Sala a la que enviamos el mensaje
            .emit('escucharEventoMensajeSala', mensajeSala); //nombre del evento y datos a enviar
        return{mensaje:'ok'}; //CallBack
    }

}