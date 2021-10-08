import React from 'react';
import { Contenedor } from '../ui/Reutilizable';
import styled from '@emotion/styled';

const TituloDestacado = styled.h2`
    text-align: center;
    font-size: 3.5rem;
`;

const ContenedorDestacado = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    text-align: center;
    gap: 1.5rem;
`;

const Platillo = styled.div`

    @media (min-width: 1024px) {
        &:nth-of-type(2) {
        padding-top: 5rem;
    }
    }

    img {
        width: 80%;
    }
`;

const Destacado = () => {
    return ( 
        <Contenedor
            id="destacado"
        >
            <TituloDestacado>Destacado</TituloDestacado>

            <ContenedorDestacado>
                <Platillo>
                    <img src="static/img/p-1.jpg" alt="platillo-1" />
                    <h3>Nombre Platillo 1</h3>
                </Platillo>
                <Platillo>
                    <img src="static/img/p-3.jpg" alt="platillo-3" />
                    <h3>Nombre Platillo 3</h3>
                </Platillo>
                <Platillo>
                    <img src="static/img/p-2.jpg" alt="platillo-2" />
                    <h3>Nombre Platillo 2</h3>
                </Platillo>

            </ContenedorDestacado>

        </Contenedor>
    );
}
 
export default Destacado;