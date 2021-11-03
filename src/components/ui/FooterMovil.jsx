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
            <p><span>Tel:</span> <a href="tel:+52-221-215-3828">221 215 3828</a></p>
            <p><span>WhatsApp: </span><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=522212153828&fbclid=IwAR0OzhJObsdf73aFEclaITKx0IYQLplSo4REBhFQ79ZgY1-kfFqp6aDavwI">221 215 3828</a></p>
        </Footer>
    );
}

export default FooterMovil;