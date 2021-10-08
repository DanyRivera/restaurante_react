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

    span {
        font-weight: bold;
    }
`;

const FooterMovil = () => {
    return ( 
        <Footer>
            <p><span>Tel: </span>222 368 8163</p>
            <p><span>WhatsApp: </span>222 125 6696</p>
        </Footer>
    );
}
 
export default FooterMovil;