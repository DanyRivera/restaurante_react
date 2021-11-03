import React from 'react';
import styled from '@emotion/styled';
import FooterMovil from '../ui/FooterMovil';
import { Contenedor } from '../ui/Reutilizable';

const ContenedorFooter = styled.footer`
    background-color: var(--primario);
    padding: 2rem;
`;

const RedesSociales = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: block;
    }

 i {
    color: #fff;
    font-size: 2.5rem;
 }
`;

const GeneralFooter = styled.div`

    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    p {
        margin: 0;
        color: #fff;
        text-align: center;
        padding-bottom: 2rem;

        @media (min-width: 768px) {
            padding: 0;
            font-size: 1.7rem;
        }
    }
`;

const Footer = () => {

    const date = new Date();
    const currentDate = date.getFullYear();

    return (
        <ContenedorFooter>
            <FooterMovil />

            <Contenedor>
                <GeneralFooter>

                    <p>&copy; {currentDate} Taquería Cristo Rey, Todos los derechos Reservados</p>
                    <RedesSociales>
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Taqueria-Cristo-Rey-305266880077678/?ref=page_internal">
                            <i className="fab fa-facebook"></i>
                        </a>
                    </RedesSociales>
                </GeneralFooter>

            </Contenedor>

        </ContenedorFooter>
    );
}

export default Footer;