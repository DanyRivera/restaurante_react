/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import styled from '@emotion/styled';

const ContenedorContacto = styled.div`
    display: none;
    @media (min-width: 800px) {
        display: block;
    }

    background-color: #f1efef;
    width: 50%;
    height: auto;
    margin-top: 2.5rem;
    padding-bottom: 1rem;
    border-radius: 8px;
    -webkit-box-shadow: 0px -1px 22px 4px rgba(0,0,0,1);
    -moz-box-shadow: 0px -1px 22px 4px rgba(0,0,0,1);
    box-shadow: 0px -1px 22px 4px rgba(0,0,0,1);

    h3 {
        color: #000;
        font-size: 3rem;
    }
`;

const InfoContacto = styled.div`
    
    p {
        color: #000;
        font-size: 2.5rem;
    }

    a {
        color: #000;
    }

    span {
        font-weight: bold;
    }
`;

const Contacto = () => {
    return ( 
        <ContenedorContacto>
            <h3>Contacto</h3>
            <InfoContacto>
                <p><span>Tel:</span> <a href="tel:+52-222-368-8163">222 368 8163</a></p>
                <p><span>WhatsApp: </span><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=522221256696&app=facebook&entry_point=page_cta&fbclid=IwAR3NeCT82q99Pe8Tb-dFVsNCHPJb5Ij_03iFsO5S8Ce6SnyBU-u0KzDzyIw">222 125 6696</a></p>
                <p><span>FaceBook:</span> @cocopachebar</p>
                <p><span>Ubicación:</span> Puebla de Zaragoza</p>
            </InfoContacto>
        </ContenedorContacto>
     );
}
 
export default Contacto;