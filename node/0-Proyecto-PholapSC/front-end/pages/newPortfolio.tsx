import Layout from "../components/Layout";
import {PhotographerInterface} from "../components/cards/Photographers";
import {useEffect, useState} from "react";
import axios from "axios";
import {Container, Form, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {set, SubmitHandler, useForm} from "react-hook-form";

const url='http://localhost:2708/photographer/';
const purl='http://localhost:2708/portfolio/';


export type estructuredPortfolio = {
    name: string;
    photo: string;
    id_photographer: number;
};


export default function (){
    const [listPhotographers, setListPhotographers] = useState([] as PhotographerInterface[]);
    const {control, register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        defaultValues: {
            name: '',
            photo: '',
            email: ''
        },
        mode: 'all'
    })

    useEffect(
        ()=>{
            axios.get(url)
                .then( (response) => setListPhotographers(response.data))
                .catch((error)=>console.log("Algo Fallo"+error))
            handleShow();
        },
        [],
    );


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    const CreatePortfolio = (data) => {
        const photographerDelete = listPhotographers.find(
            (photographer: PhotographerInterface) => photographer.email === data.email
        )
        const newPortfolio= {
            name: data.name,
            photo: data.photo,
            id_photographer: photographerDelete.id
        }

        axios.post(purl, newPortfolio).then(

        ).catch(e => {
            console.log(e)
        })
        handleShow2();

    }

    function popUpBack(){
        return(
            <>
                <Modal
                    show={show2}
                    onHide={handleClose2}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>EXIT</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Button variant="success" type="submit" onClick={handleClose2}>
                            <a href="/portfolios" className="text-light">Go back</a>
                        </Button>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>

            </>
        )
    }



    function formularioNewPortfolio(){
        return(
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Create New Portfolio</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit = {handleSubmit(CreatePortfolio)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter name portfolio"
                                    id="email"
                                    {...register('name')}
                                />
                                <Form.Text className="text-muted">
                                    You should be sure to do it.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Photo</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter path of photo"
                                    id="email"
                                    {...register('photo')}
                                />
                                <Form.Text className="text-muted">
                                    You should be sure to do it.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Photographer`s email</Form.Label>
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
                            <Button variant="success" type="submit" onClick={handleClose}>
                                Crear
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
                <Layout title="Portfolios"></Layout>
                {formularioNewPortfolio()}
                {popUpBack()}

        </>
    );
}