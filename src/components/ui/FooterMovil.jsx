import React from 'react';
import styled from '@emotion/styled';

const Footer = styled.div`

    @media (min-width: 768px) {
        display: none;
    }

    p {
        color: #fff;
        text-align: center;
        font-size: 1.8rem;
    }

    a {
        color: #fff;
    }

    span {
        font-weight: bold;
    }
`;

const FooterMovil = () => {
    return (
        <Footer>
            <p><span>Tel:</span> <a href="tel:+52-222-368-8163">222 368 8163</a></p>
            <p><span>WhatsApp: </span><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=522221256696&app=facebook&entry_point=page_cta&fbclid=IwAR3NeCT82q99Pe8Tb-dFVsNCHPJb5Ij_03iFsO5S8Ce6SnyBU-u0KzDzyIw">222 125 6696</a></p>
        </Footer>
    );
}

export default FooterMovil;