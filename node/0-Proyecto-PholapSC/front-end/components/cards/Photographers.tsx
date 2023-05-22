import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import portfolios from "../../pages/portfolios";
import Portfolios, {PortfolioInterface} from "./Portfolios";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export interface PhotographerInterface {
    id: number;
    name: string,
    last_name: string,
    date_birth: string,
    email: string
    portfolios?: PortfolioInterface[]
}



export default function (props: PhotographerInterface){
    const {id, name, last_name, date_birth, email, portfolios} = props;
    return(
        <>
            {<>
                <Card style={{  alignItems: 'start'}}>
                    <Card.Body>
                        <Card.Text>
                            <strong>{name} {last_name} </strong><br/>
                            <strong>Email</strong>{email} <br/>
                            <strong>Fecha de Nacimiento: </strong>{date_birth} <br/>

                            <ButtonGroup aria-label="Basic example">
                                {portfolios.map((portfolio, index)=>
                                    <Portfolios key={index}
                                                id={portfolio.id}
                                                name={portfolio.name}
                                    />)
                                }
                            </ButtonGroup>

                        </Card.Text>
                    </Card.Body>
                </Card>
                <br/>
            </>
            }
        </>
    )
}