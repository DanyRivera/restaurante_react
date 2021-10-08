import React from 'react';
import { Contenedor } from '../ui/Reutilizable';
import Contacto from '../ui/CuadroContacto';
import styled from '@emotion/styled';

const BgMadera = styled.section`
    background-image: url('static/img/timber.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 65vh;
    margin: 5rem 0;
    position: relative;

    &::before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.45);
        position: absolute;
    }
`;

const ContenedorContenido = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    position: absolute;
    z-index: 1;
    width: 100%;

    @media (min-width: 768px) {
        justify-content: space-between;
        align-items: center;
        width: 75%;
        padding-top: 2rem;
    }
`;

const SeccionHorarios = styled.div`

    @media (min-width: 768px) {
        padding-left: 7rem;
    }

    h3 {
        color: #fff;
        font-weight: 700;
        font-size: 3.3rem;
    }

    li {
        font-size: 2.2rem;
        color: #fff;
        padding-bottom: .9rem;
        font-family: 'Josefin Sans';
    }
`;

const Horarios = () => {
    return (
        <BgMadera>
            <Contenedor
                id="horarios"
            >
                <ContenedorContenido>
                    <SeccionHorarios>
                        <h3>Horarios</h3>
                        <ul>
                            <li>lun: 12:00-22:00</li>
                            <li>mar: 12:00-22:00</li>
                            <li>mié: 12:00-22:00</li>
                            <li>jue: 8:00-22:00</li>
                            <li>vie: 8:00-22:00</li>
                            <li>sab: 8:00-22:00</li>
                            <li>sab: 8:00-13:00</li>
                        </ul>
                    </SeccionHorarios>

                    <Contacto />

                </ContenedorContenido>

            </Contenedor>
        </BgMadera>
    );
}

export default Horarios;