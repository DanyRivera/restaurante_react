import React, { useState} from 'react';
import styled from '@emotion/styled';

const MovilBarra = styled.div`
 background-color: var(--primario);
 padding: 1.2rem 2.5rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
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
        transition: all 2s ease;
    }

    li {
        padding: 1.3rem 0;
        border-bottom: 1px solid #e1e1e1;
    }

    button {
        font-size: 1.5rem;
    }
`;

const Barra = () => {

    const [seccionesMovil, setSeccionesMovil] = useState(false);

    const handleClick = () => {

        if(seccionesMovil) {
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

            {seccionesMovil ? (

                <SeccionesMovil>
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
                </SeccionesMovil>

            ) : null }

        </>
    );
}

export default Barra;