import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-scroll';

const MovilBarra = styled.header`
 background-color: var(--primario);
 padding: 1.2rem 2.5rem;
 display: flex;
 justify-content: space-between;
 align-items: center;

 @media (min-width: 1024px) {
    display: none;
 }
`;

const RedesSociales = styled.div`
 
 padding-right: 1.5rem;
 border-right: 1px solid #fff;

 i {
    color: #fff;
    font-size: 2.5rem;
 }
`;
const IconMovilMenu = styled.button`

    i {
        color: #fff;
        font-size: 3.2rem;
    }
`;

const SeccionesMovil = styled.div`
    height: auto;

    ul {
        transition: all .4s ease;
    }

    li {
        padding: 1.3rem 0 1.3rem 1.5rem;
        border-bottom: 2px solid #e1e1e1;
    }

    button {
        font-size: 1.5rem;
        
        &:hover {
            cursor: pointer;
        }
    }

    @media (min-width: 1024px) {
    display: none;
    }
`;

const BarraMovil = () => {

    const [seccionesMovil, setSeccionesMovil] = useState(false);

    const handleClick = () => {

        if (seccionesMovil) {
            setSeccionesMovil(false);
        } else {
            setSeccionesMovil(true);
        }

    }


    return (
        <>

            <MovilBarra>
                <RedesSociales>
                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Taqueria-Cristo-Rey-305266880077678/?ref=page_internal">
                        <i className="fab fa-facebook"></i>
                    </a>
                </RedesSociales>
                <div>
                    <IconMovilMenu
                        onClick={() => handleClick()}
                    >
                        <i className="fas fa-bars"></i>
                    </IconMovilMenu>
                </div>
            </MovilBarra>


            <SeccionesMovil>

                <CSSTransition
                    timeout={{ enter: 400, exit: 400 }}
                    in={seccionesMovil}
                    classNames="drop"
                    unmountOnExit
                    onEntered={() => setSeccionesMovil(true)}
                    onExit={() => setSeccionesMovil(false)}
                >
                    <ul>
                        <li>
                            <Link
                                to="destacado"
                                smooth={true}
                                duration={1500}
                            >Destacado</Link>
                        </li>
                        <li>
                            <Link
                                to="ubicacion"
                                smooth={true}
                                duration={1500}
                            >Ubicación</Link>
                        </li>
                        <li>
                            <Link
                                to="horarios"
                                smooth={true}
                                duration={1500}
                            >Horarios</Link>
                        </li>
                    </ul>
                </CSSTransition>
            </SeccionesMovil>


        </>
    );
}

export default BarraMovil;