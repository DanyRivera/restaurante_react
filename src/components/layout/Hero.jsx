import React from 'react'
import styled from '@emotion/styled';
import { Contenedor } from '../ui/Reutilizable';

const HeroHeader = styled.div`
    background-image: url('static/img/hero.jpg');
    height: 80vh;
    background-position: center left;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    @media (min-width: 1024px) {
        height: 80vh;
        background-position: center center;
    }

    &::before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0, .7);
        position: absolute;
    }
`;

const ContenidoHeader = styled.div`

    h1 {
        margin: 0;
        color: #fff;
        position: absolute;
        z-index: 1;
    }
`;

const Hero = () => {
    return ( 
        <HeroHeader>
            <Contenedor>
                <ContenidoHeader>
                    <h1>Nombre del Restaurant</h1>
                </ContenidoHeader>
            </Contenedor>
        </HeroHeader>    
    );
}
 
export default Hero;
