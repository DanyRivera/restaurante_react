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
    background-attachment: fixed;

    @media (min-width: 1024px) {
        height: 100vh;
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
    height: 100%;   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;

    @media (min-width: 300px) {
        padding: 0;
    }

    h1 {
        margin: 0;
        color: #fff;
        position: absolute;
        z-index: 1;

        @media (min-width: 768px) {
            font-size: 5.5rem;
        }
    }
`;

const Hero = () => {
    return (
        <HeroHeader>
            <Contenedor>
                <ContenidoHeader>
                    <h1>Taquería "Cristo Rey"</h1>
                </ContenidoHeader>
            </Contenedor>
        </HeroHeader>
    );
}

export default Hero;
