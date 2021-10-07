import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CSSTransition } from 'react-transition-group';

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

const Logo = styled.div`

    p {
        color: #fff;
    }
`;

const IconMovilMenu = styled.button`

    i {
        color: #fff;
        font-size: 3.2rem;
    }
`;

const SeccionesMovil = styled.div`

    ul {
        transition: all .4s ease;
    }

    li {
        padding: 1.3rem 0;
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
                <Logo>
                    <p>Logo</p>
                </Logo>
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
                            <button type="button">Destacado</button>
                        </li>
                        <li>
                            <button type="button">Dirección</button>
                        </li>
                        <li>
                            <button type="button">Contacto</button>
                        </li>
                    </ul>
                </CSSTransition>
            </SeccionesMovil>


        </>
    );
}

export default BarraMovil;