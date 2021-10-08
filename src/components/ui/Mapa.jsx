import React from 'react';
import styled from '@emotion/styled';

const MapaIframe = styled.iframe`
    border: none;
    max-width: 100%;
`;

const Mapa = () => {
    return (
        <MapaIframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.615210553886!2d-98.2091970851001!3d18.992593787135903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfbf44dcce3e0d%3A0xcbec10ee57118ee8!2sEl%20CocoPache%20Restaurante%20bar!5e0!3m2!1ses-419!2smx!4v1633638686349!5m2!1ses-419!2smx" width="850" height="450" allowfullscreen="" loading="lazy" title="mapa"></MapaIframe>
    );
}

export default Mapa;