import React from 'react';
import styled from '@emotion/styled';

//Reutilizable
import { Contenedor } from './Reutilizable';

const Header = styled.header`
    display: none;
    @media (min-width: 1024px) {
        display: block;
        background-color: var(--primario);
        padding: 2.5rem 0;
    }
`;

const ContenedorHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RedesSociales = styled.div`
 
 padding-right: 3rem;
 border-right: 1px solid #fff;

 i {
    color: #fff;
    font-size: 2.5rem;
 }
`;

const Secciones = styled.div`
    
    ul {
        display: flex;
        justify-content: space-between;
    }

    li {
        margin-right: 3rem;

        &:last-of-type {
            margin-right: 0;
        }
    }

    button {
        color: #fff;
        font-size: 2rem;

        &:hover {
            cursor: pointer;
        }
    }
`;

const BarraDesktop = () => {
    return (
        <Header>
            <Contenedor>
                <ContenedorHeader>
                    <RedesSociales>
                        <a target="_blank" href="https://facebook.com">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </RedesSociales>
                    <Secciones>
                        <ul>
                            <li>
                                <button type="button">Destacado</button>
                            </li>
                            <li>
                                <button type="button">Dirección</button>
                            </li>
                            <li>
                                <button type="button">Contacto</button>
                            </li>
                        </ul>
                    </Secciones>
                </ContenedorHeader>
            </Contenedor>
        </Header>

    );
}

export default BarraDesktop;