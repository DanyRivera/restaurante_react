import React from 'react';
import styled from '@emotion/styled';

const MapaIframe = styled.iframe`
    border: none;
    max-width: 100%;
`;

const Mapa = () => {
    return (
        <MapaIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1832.5135748363361!2d-98.20926909768474!3d19.0011819341411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfbf59bde68ee1%3A0x10aa99119c318819!2sTaqueria%20Cristo%20Rey!5e0!3m2!1ses-419!2smx!4v1635952524593!5m2!1ses-419!2smx" width="850" height="450" allowfullscreen="" loading="lazy" title="mapa"></MapaIframe>
    );
}

export default Mapa;