/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Mapa from '../ui/Mapa';
import { Contenedor } from '../ui/Reutilizable';
import styled from '@emotion/styled';

const ContenidoUbicacion = styled.div`

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
    margin: 7rem 0 11rem 0;
`;

const ContenedorDireccion = styled.div`
    padding-left: 2rem;

    h3 {
        text-align: center;
        margin-top: 5rem;
        font-size: 3.2rem;

        @media (min-width: 768px) {
            font-size: 4.5rem;
        }
    }

    p {
        font-size: 2rem;
        padding: 0 2.8rem;

        @media (min-width: 768px) {
            font-size: 2.5rem;
        }
    }
`;

const ComoLlegarBtn = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5rem;

    a {
        background-color: var(--primario);
        color: #fff;
        padding: 1.5rem 4rem;
        font-size: 2rem;
    }
`;

const Ubicacion = () => {
    return (
        <Contenedor>

            <ContenidoUbicacion
                id="ubicacion"
            >

                <Mapa />

                <ContenedorDireccion>
                    <h3>Dirección</h3>
                    <p>
                        Prolongación 14 Sur #6369 72440 Puebla de Zaragoza, México.
                    </p>
                    <ComoLlegarBtn>
                        <a
                            href="https://www.google.com/maps/dir//Taqueria+Cristo+Rey+Prol.+de+la+14+Sur+6369+Loma+Linda+72104+Puebla,+Pue./@19.0012572,-98.2086766,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x85cfbf59bde68ee1:0x10aa99119c318819"
                            target="_blank"
                            rel="noreferrer"
                        >Como Llegar</a>
                    </ComoLlegarBtn>
                </ContenedorDireccion>

            </ContenidoUbicacion>

        </Contenedor>
    );
}

export default Ubicacion;