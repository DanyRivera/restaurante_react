import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-scroll';

//Reutilizable
import { Contenedor } from './Reutilizable';

const Header = styled.header`
    display: none;
    @media (min-width: 1024px) {
        display: block;
        background-color: var(--primario);
        padding: 2.5rem 0;
        position: fixed;
        width: 100%;
        z-index: 2;
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

    a {
        color: #fff;
        font-size: 2rem;

        &:hover {
            cursor: pointer;
        }
    }
`;

const BarraDesktop = () => {

    return (
        <Header >
            <Contenedor>
                <ContenedorHeader>
                    <RedesSociales>
                        <a target="_blank" rel="noreferrer" href="https://es-la.facebook.com/cocopachebar/">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </RedesSociales>
                    <Secciones>
                        <ul>
                            <li>
                                <Link 
                                    to="destacado"
                                    smooth={true}
                                    duration={1000}
                                    offset={-100}
                                >Destacado</Link>
                            </li>
                            <li>
                                <Link
                                    to="ubicacion"
                                    smooth={true}
                                    duration={1000}
                                    offset={-100}
                                >Ubicación</Link>
                            </li>
                            <li>
                                <Link 
                                    to="horarios"
                                    smooth={true}
                                    duration={1000}
                                    offset={-100}
                                >Horarios</Link>
                            </li>
                        </ul>
                    </Secciones>
                </ContenedorHeader>
            </Contenedor>
        </Header>

    );
}

export default BarraDesktop;