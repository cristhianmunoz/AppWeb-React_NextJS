import Layout from "../components/Layout";
import {PhotographerInterface} from "../components/cards/Photographers";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Form, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {SubmitHandler, useForm} from "react-hook-form";
import Card from "react-bootstrap/Card";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Figure from 'react-bootstrap/Figure';

const url='http://localhost:2708/photographer/';

export type estructuredPhotographer = {
    name: string;
    last_name: string;
    email: string;
    date_birth: string;
};

export default function (){
    const [listPhotographers, setListPhotographers] = useState([] as PhotographerInterface[]);
    const [managerphotographer, setPhotographer] = useState({}as PhotographerInterface)

    const {control, register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        defaultValues: {
            name: '',
            last_name: '',
            email: '',
            date_birth: ''
        },
        mode: 'all'
    })


    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    useEffect(
        ()=>{
            axios.get(url)
                .then( (response) => setListPhotographers(response.data))
                .catch((error)=>console.log("Algo Fallo"+error))
        },
        [],
    );

    const DeletePhotographer= (data:estructuredPhotographer)=>{
        data.email;
        const photographerDelete = listPhotographers.find(
            (photographer: PhotographerInterface) => photographer.email === data.email
        )
        handleClose();
        axios.delete(`${url}${photographerDelete.id}`).then(() => {
            const newPhotographers = listPhotographers.filter((photographer: PhotographerInterface) => photographer.id !== photographerDelete.id)
            setListPhotographers(newPhotographers)
        }).catch(e => {
            console.log(e)
        })
    }
    const UpdatePhotographer= (data:estructuredPhotographer)=>{
        const newPhotographer: PhotographerInterface = {
            id: managerphotographer.id,
            name: data.name,
            last_name: data.last_name,
            email: data.email,
            date_birth: data.date_birth
        }
        handleClose();
        axios.put(`${url}${managerphotographer.id}`, newPhotographer).then(() => {
            axios.get(url)
                .then( (response) => setListPhotographers(response.data))
                .catch((error)=>console.log("Algo Fallo"+error))
        }).catch(e => {
            console.log(e)
        })
    }

    const CreatePhotographer = (data:estructuredPhotographer) => {
        const newPhotographer= {
            name: data.name,
            last_name: data.last_name,
            email: data.email,
            date_birth: data.date_birth
        }
        handleClose();

        axios.post(url, newPhotographer).then(() => {
            axios.get(url)
                .then( (response) => setListPhotographers(response.data))
                .catch((error)=>console.log("Algo Fallo"+error))
        }).catch(e => {
            console.log(e)
        })

    }


    function handleUpdatePhotographer(photographer: PhotographerInterface) {
        setPhotographer(photographer)
        handleShow3()
        reset({
            name: photographer?.name,
            last_name: photographer?.last_name,
            email: photographer?.email,
            date_birth: photographer?.date_birth
        })
    }

    function listingPhotographers(){
        return(
            <>
                {listPhotographers.map((photographer)=>
                    <>
                        <Card style={{ width: '60rem' }}>
                            <Card.Body>
                                <div className="d-flex justify-content-around">
                                    <Card.Text>
                                        <h2><strong>{photographer.name} {photographer.last_name} </strong></h2>
                                        <strong>Email: </strong>{photographer.email} <br/>
                                        <strong>Date Birth: </strong>{photographer.date_birth} <br/>
                                    </Card.Text>

                                    <div className="d-grid gap-2">
                                        <Button variant="secondary" onClick={ ()=> handleUpdatePhotographer(photographer)}>
                                            Update
                                        </Button>
                                        <Button variant="danger" onClick={handleShow2}>
                                            Delete
                                        </Button>
                                    </div>
                                </div>

                                <div className="justify-content-around p-1">
                                    <h4 className="text-center"><strong>PORTFOLIOS</strong></h4>
                                    <div className="d-grid gap-2">
                                        <Button variant="warning">
                                            <a href="/newPortfolio" className="text-decoration-none text-light"><strong>New Portfolio</strong></a>
                                        </Button>
                                    </div>
                                </div>

                                <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
                                    {photographer.portfolios.map((portfolio, index)=>
                                            <Tab eventKey={portfolio.id} title={portfolio.name} >
                                                <div className="row  align-items-center">
                                                    <img src={portfolio.photo} width="5" />
                                                </div>
                                            </Tab>
                                        )
                                    }
                                </Tabs>

                            </Card.Body>
                        </Card>
                        <div className="justify-content-around p-1">
                        </div>
                    </>
                    /*<Photographers
                                   id={photographer.id}
                                   name={photographer.name}
                                   last_name={photographer.last_name}
                                   date_birth={photographer.date_birth}
                                   email={photographer.email}
                                   portfolios={photographer.portfolios}
                    />*/
                    )
                }
            </>
        )
    }

    function formularioUpdate(){
        return(
            <>
                <Modal
                    show={show3}
                    onHide={handleClose3}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title><strong>New Photographer</strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(UpdatePhotographer)}>
                            <div className="mb-3">
                                <label htmlFor="nombre-cliente" className="form-label">Nombre: </label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: Cristhian"
                                       id="nombre"
                                       {...register('name')}
                                       aria-describedby="nombreHelp"/>
                                <div id="nombreHelp" className="form-text">
                                    Ingrese su nombre.
                                </div>
                                {errors.name &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.name.message}
                                    </div>
                                }
                            </div>

                            <div className="mb-3">
                                <label htmlFor="last_name" className="form-label">Paquete Fotográfico: </label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Muñoz"
                                       id="last_name"
                                       {...register('last_name')}
                                       aria-describedby="idPackageHelp"/>
                                <div id="last_nameHelp" className="form-text">
                                    Ingrese su Apellido
                                </div>
                                {errors.last_name &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.last_name.message}
                                    </div>
                                }
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Locación: </label>
                                <input type="email"
                                       className="form-control"
                                       placeholder="example@exmaple.com"
                                       id="email"
                                       {...register('email')}
                                       aria-describedby="locationHelp"/>
                                <div id="emailHelp" className="form-text" hidden>
                                    Ingresa la locación del .
                                </div>
                                {errors.email &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.email.message}
                                    </div>
                                }
                            </div>

                            <div className="mb-3">
                                <label htmlFor="date_birth" className="form-label">Fecha: </label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="yyyy-mm-dd"
                                       id="date_birth"
                                       {...register('date_birth')}
                                       aria-describedby="mensajeHelp"/>
                                <div id="date_birthHelp" className="form-text">
                                    Ingrese la fecha de la sesión.
                                </div>
                                {errors.date_birth &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.date_birth.message}
                                    </div>
                                }
                            </div>

                            <button type="submit"
                                    disabled={!isValid}
                                    className="btn btn-warning">
                                Crear
                            </button>
                            <button type="reset"
                                    className="btn btn-danger">
                                Borrar Campos
                            </button>
                        </form>

                    </Modal.Body>
                </Modal>

            </>
        )
    }
    function formulario(){
        return(
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title><strong>New Photographer</strong></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(CreatePhotographer)}>

                            <div className="mb-3">
                                <label htmlFor="nombre-cliente" className="form-label">Nombre: </label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="EJ: Cristhian"
                                       id="nombre"
                                       {...register('name')}
                                       aria-describedby="nombreHelp"/>
                                <div id="nombreHelp" className="form-text">
                                    Ingrese su nombre.
                                </div>
                                {errors.name &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.name.message}
                                    </div>
                                }
                            </div>

                            <div className="mb-3">
                                <label htmlFor="last_name" className="form-label">Paquete Fotográfico: </label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="Muñoz"
                                       id="last_name"
                                       {...register('last_name')}
                                       aria-describedby="idPackageHelp"/>
                                <div id="last_nameHelp" className="form-text">
                                    Ingrese su Apellido
                                </div>
                                {errors.last_name &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.last_name.message}
                                    </div>
                                }
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Locación: </label>
                                <input type="email"
                                       className="form-control"
                                       placeholder="example@exmaple.com"
                                       id="email"
                                       {...register('email')}
                                       aria-describedby="locationHelp"/>
                                <div id="emailHelp" className="form-text" hidden>
                                    Ingresa la locación del .
                                </div>
                                {errors.email &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.email.message}
                                    </div>
                                }
                            </div>

                            <div className="mb-3">
                                <label htmlFor="date_birth" className="form-label">Fecha: </label>
                                <input type="text"
                                       className="form-control"
                                       placeholder="yyyy-mm-dd"
                                       id="date_birth"
                                       {...register('date_birth')}
                                       aria-describedby="mensajeHelp"/>
                                <div id="date_birthHelp" className="form-text">
                                    Ingrese la fecha de la sesión.
                                </div>
                                {errors.date_birth &&
                                    <div className="alert alert-warning" role="alert">
                                        Tiene errores {errors.date_birth.message}
                                    </div>
                                }
                            </div>

                            <button type="submit"
                                    disabled={!isValid}
                                    className="btn btn-warning">
                                Crear
                            </button>
                            <button type="reset"
                                    className="btn btn-danger">
                                Borrar Campos
                            </button>
                        </form>

                    </Modal.Body>
                </Modal>

            </>
        )
    }
    function formularioEliminar(){
        return(
            <>
                <Modal
                    show={show2}
                    onHide={handleClose2}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Photographer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit = {handleSubmit(DeletePhotographer)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter email"
                                    id="email"
                                    {...register('email')}
                                />
                                <Form.Text className="text-muted">
                                    You should be sure to do it.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Delete
                            </Button>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }

    return(
        <>
            <Container>
                <Layout title="Portfolios"></Layout>

                <Container >
                    <div className="row justify-content-around bg-secondary rounded-3 p-3" >
                        <div className="justify-content-around p-2">
                            <h1 className="text-center text-light"><strong>PHOTOGRAPHERS</strong></h1>
                        </div>
                        <div className="d-flex justify-content-around">
                            <Button variant="success" onClick={handleShow}>
                                Add
                            </Button>
                            <Button variant="danger" onClick={handleShow2}>
                                Delete
                            </Button>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        {listingPhotographers()}
                    </div>
                    {formulario()}
                    {formularioEliminar()}
                    {formularioUpdate()}
                </Container>
            </Container>
        </>
    );
}