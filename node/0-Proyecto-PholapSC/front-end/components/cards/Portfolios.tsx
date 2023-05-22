import {PhotographerInterface} from "./Photographers";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export interface PortfolioInterface{
    id: number;
    name: string;
    photo: string;
    photographers?: PhotographerInterface | number;
}

export default function (props: PortfolioInterface){
    const {id, name} = props;
    return(
        <>
            {
                <Button variant="secondary">{name}</Button>
            }
        </>
    )
}