import Layout from "../components/Layout";
import {useEffect, useState} from "react";
import CryptoFormulario from "../components/f_ejemplo_criptomonedas/CryptoFormulario";

export interface ConsultaMoneda{
    valorMoneda:string;
    valorCriptoMoneda:string;
}


export default function (){
    const [monedas, setMonedas] = useState({} as ConsultaMoneda);

    const [resultado, setResultado] = useState({} as any);
    useEffect(
        ()=>{
            if(Object.keys(monedas).length === 2){
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.valorCriptoMoneda}&tsyms=${monedas.valorMoneda}`
                const consultarCripto = async ()=>{
                    const respuesta = await fetch(url);
                    const resultado = await respuesta.json();
                    setResultado(resultado.DISPLAY[monedas.valorCriptoMoneda][monedas.valorMoneda])
                }
                consultarCripto();
            }
        },
        [monedas]
    )

    return(
        <>
            <Layout title="Ejemplo Criptomonedas | EPN">
                <div className="text-center">
                    <h1>Cripto Exchange Calculator</h1>
                    <img
                        className={'rounded'}
                        src="https://media.ambito.com/p/e2e0836c4f57f5ae2890d784df8de512/adjuntos/239/imagenes/038/723/0038723804/criptomonedasjpg.jpg" alt=""/>
                </div>
                <h2>Seleccion</h2>
                <p>Selecciona tu moneda y criptomoneda</p>
                <div className="row">
                    <div className="col-sm-6">
                        <CryptoFormulario
                            setMonedas={setMonedas}>
                        </CryptoFormulario>
                    </div>
                    <div className="col-sm-6">
                        {
                            resultado.PRICE &&
                            <div>
                                <p><strong>PRECIO:</strong>{resultado.PRICE}</p>
                                <p><strong>Precio mas alto del dia:</strong>{resultado.HGHDAY}</p>
                                <p><strong>Precio mas bajo del dia:</strong>{resultado.LOWDAY}</p>
                                <p><strong>Variación ultimas 24 horas:</strong>{resultado.CHANGEPCT24HOUR}</p>
                                <p><strong>Ultima Actualización:</strong>{resultado.LASTUPDATE}</p>
                            </div>
                        }

                    </div>
                </div>
            </Layout>
        </>
    )
}