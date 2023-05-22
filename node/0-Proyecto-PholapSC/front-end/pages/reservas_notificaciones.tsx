// reservas_notificaciones.tsx
import io from "socket.io-client"
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import Layout from "../components/Layout";
import Notificaciones, {NotificationsPopProps} from "../components/notification_websockets/Notificaciones";
import {Dropdown} from "react-bootstrap";

const servidorWebsocket = 'http://localhost:11300';
const socket = io(servidorWebsocket);

export type reservaSesionFotografica = {
    idPhotographer: string;
    location: string;
    date: string;
    idPackage: string;
    idClient: string;
};
export type unirPhotographer = {
    idPhotographer: string;
};


export default function () {
    const [isConnected, setIsConnected] = useState(socket.connected)
    const [notificaciones, setNotificaciones] = useState([] as NotificationsPopProps[]);

    const {control, register, handleSubmit, formState: {errors, isValid}} = useForm({
        defaultValues: {
            idPhotographer: 'PholapSC',
            location: '',
            date: '',
            idPackage: '',
            idClient: '',
        },
        mode: 'all'
    })

    useEffect(
        () => {

            socket.on('connect', () => {
                setIsConnected(true);
                console.log('Si esta conectado');
            });
            socket.on('disconnect', () => {
                setIsConnected(false);
                console.log('No esta conectado');
            });
            socket.on('escucharEventoEnviarNotification', (data: reservaSesionFotografica) => {
                const nuevoMensaje: NotificationsPopProps = {
                    idPhotographer: data.idPhotographer,
                    location: data.location,
                    date: data.date,
                    idPackage: data.idPackage,
                    idClient: data.idClient,
                    posicion: 'D',
                };
                setNotificaciones((mensajesAnteriores) => [...mensajesAnteriores,
                    nuevoMensaje]);
            });
            socket.on('escucharEventoEnviarMensaje', (data: reservaSesionFotografica) => {

                const nuevoMensaje: NotificationsPopProps = {
                    idPhotographer: data.idPhotographer,
                    location: data.location,
                    date: data.date,
                    idPackage: data.idPackage,
                    idClient: data.idClient,
                    posicion: 'I'
                };
                setNotificaciones((mensajesAnteriores) => [...mensajesAnteriores,
                    nuevoMensaje]);
                console.log('escucharEventoEnviarMensaje');

            });

        },
        []
    )

    const unirseSalaEnviarNotificacionReserva = (data: reservaSesionFotografica) => {
        if(data.idPhotographer == 'PholapSC' && data.idPackage === ''){
            // unimos a la sala
            const dataEventoUnirseSala = {
                idPhotographer: data.idPhotographer,
            };
            socket.emit(
                'enviarNotificacion', // Nombre Evento
                dataEventoUnirseSala, //  Datos evento
                () => { // Callback o respuesta del evefnto
                    const nuevoMensaje: unirPhotographer = {
                        idPhotographer: data.idPhotographer
                    };

                }
            );

        } else if (data.idPackage != '') {
            // unimos a la sala
            const dataEventoUnirseSala = {
                idPhotographer: data.idPhotographer,
                location: data.location,
                date: data.date,
                idPackage: data.idPackage,
                idClient: data.idClient,
            };
            socket.emit(
                'enviarNotificacion', // Nombre Evento
                dataEventoUnirseSala, //  Datos evento
                () => { // Callback o respuesta del evefnto
                    const nuevoMensaje: NotificationsPopProps = {
                        idPhotographer: data.idPhotographer,
                        location: data.location,
                        date: data.date,
                        idPackage: data.idPackage,
                        idClient: data.idClient,
                        posicion: 'I'
                    };
                    setNotificaciones((mensajesAnteriores) => [...mensajesAnteriores, nuevoMensaje]);
                }
            );
        } /*else {
            // mandamos mensaje
            const dataEventoEnviarMensajeSala = {
                idPhotographer: data.idPhotographer,
                location: data.location,
                date: data.date,
                idPackage: data.idPackage,
                idClient: data.idClient,
            };
            socket.emit(
                'enviarMensaje', // Nombre Evento
                dataEventoEnviarMensajeSala, //  Datos evento
                () => { // Callback o respuesta del evento
                    const notification: NotificationsPopProps = {
                        idPhotographer: data.idPhotographer,
                        location: data.location,
                        date: data.date,
                        idPackage: data.idPackage,
                        idClient: data.idClient,
                        posicion: 'D'
                    };
                    setNotificaciones((mensajesAnteriores) => [...mensajesAnteriores, notification]);
                }
            );
        }*/
    }

    const estaConectado = ()=>{
        if(isConnected){
            return <span>Conectado :)</span>
        }else{
            return <span>Desconectado :(</span>
        }
    }

    return (
        <>
            <div>
            <Layout title="Formulario">
                <p><strong>{estaConectado()}</strong></p>

                <div className="row">
                    <Dropdown>
                        <Dropdown.Toggle variant="warning" id="dropdown-basic">
                            Roles
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">Fotógrafo</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Cliente</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <div className="col-sm-8">
                        <h1>Reservación Fotográfica</h1>
                        <div className="row">
                            <div className="col-sm-6">
                                <form onSubmit={handleSubmit(unirseSalaEnviarNotificacionReserva)}>

                                    <div className="mb-3">
                                        <label htmlFor="nombre-cliente" className="form-label">Nombre: </label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="EJ: Cristhian"
                                               id="nombre"
                                               {...register('idClient')}
                                               aria-describedby="nombreHelp"/>
                                        <div id="nombreHelp" className="form-text">
                                            Ingrese su nombre.
                                        </div>
                                        {errors.idClient &&
                                            <div className="alert alert-warning" role="alert">
                                                Tiene errores {errors.idClient.message}
                                            </div>
                                        }
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="idPackage" className="form-label">Paquete Fotográfico: </label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Ej: Boda-Básico"
                                               id="idPackage"
                                               {...register('idPackage')}
                                               aria-describedby="idPackageHelp"/>
                                        <div id="idPackageHelp" className="form-text">
                                            Ingrese su paquete deseado
                                        </div>
                                        {errors.idPackage &&
                                            <div className="alert alert-warning" role="alert">
                                                Tiene errores {errors.idPackage.message}
                                            </div>
                                        }
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="location" className="form-label">Locación: </label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="Ej: 6 de Dicimebre y Salvador de Guevarra"
                                               id="location"
                                               {...register('location')}
                                               aria-describedby="locationHelp"/>
                                        <div id="locationHelp" className="form-text" hidden>
                                            Ingresa la locación del .
                                        </div>
                                        {errors.location &&
                                            <div className="alert alert-warning" role="alert">
                                                Tiene errores {errors.location.message}
                                            </div>
                                        }
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Fecha: </label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="EJ: 28-02-2023"
                                               id="date"
                                               {...register('date')}
                                               aria-describedby="mensajeHelp"/>
                                        <div id="mensajeHelp" className="form-text">
                                            Ingrese la fecha de la sesión.
                                        </div>
                                        {errors.date &&
                                            <div className="alert alert-warning" role="alert">
                                                Tiene errores {errors.date.message}
                                            </div>
                                        }
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="idPhotographer" className="form-label">Photografo: </label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="EJ: PholapSC"
                                               id="idPhotographer"
                                               {...register('idPhotographer', {required: 'Ingresar paquete Fotográfico'})}
                                               aria-describedby="idPhotographerHelp"/>
                                        <div id="idPhotographerHelp" className="form-text">
                                            Seleccione el fotografo de su preferencia
                                        </div>
                                        {errors.idPhotographer &&
                                            <div className="alert alert-warning" role="alert">
                                                Tiene errores {errors.idPhotographer.message}
                                            </div>
                                        }
                                    </div>
                                    <button type="submit"
                                            disabled={!isValid}
                                            className="btn btn-warning">
                                        Enviar Reservación
                                    </button>
                                    <button type="reset"
                                            className="btn btn-danger">
                                        Borrar Campos
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4">
                        {notificaciones.map((mensaje, indice) =>
                            <Notificaciones key={indice}
                                         posicion={mensaje.posicion}
                                         idPhotographer={mensaje.idPhotographer}
                                         location={mensaje.location}
                                         date={mensaje.date}
                                         idPackage={mensaje.idPackage}
                                         idClient={mensaje.idClient}
                            />)
                        }
                    </div>
                </div>
            </Layout>

            </div>
        </>
    )
}