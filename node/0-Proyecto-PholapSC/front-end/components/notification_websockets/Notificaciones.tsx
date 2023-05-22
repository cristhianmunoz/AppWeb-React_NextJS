import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import picocolors from "picocolors";

export interface NotificationsPopProps {
    idPhotographer: string,
    location: string,
    date: string,
    idPackage: string,
    idClient: string,
    posicion: 'D' | 'I';

}

export default function (props: NotificationsPopProps){
    const {idPhotographer, location, date, idPackage, idClient, posicion}=props;
    return(
        <>
            {
                posicion === 'D'?
                    <Card style={{ width: '18rem', alignItems: 'start'}}>
                        <Card.Body>
                            <Card.Title><strong>Nueva Reservación</strong></Card.Title>
                            <Card.Text>
                                <strong>Cliente: </strong>{idClient} <br/>
                                <strong>Paquete: </strong>{idPackage} <br/>
                                <strong>Lugar: </strong>{location} <br/>
                                <strong>Fecha: </strong>{date} <br/>
                            </Card.Text>
                            <Button variant="danger">Rechazar</Button>
                            <Button variant="success">Aceptar</Button>
                        </Card.Body>
                    </Card>:
                    <div>
                        <p className='text-right'>
                            <h3>Reservación Pendiente</h3>
                            <strong>Clientte: </strong>{idClient} <br/>
                            <strong>Paquete: </strong>{idPackage} <br/>
                            <strong>Lugar: </strong>{location} <br/>
                            <strong>Fecha: </strong>{date} <br/>
                        </p>
                    </div>

            }
        </>
    )
}