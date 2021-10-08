import React from 'react';
import styled from '@emotion/styled';
import { animateScroll as scroll } from 'react-scroll';

const UpScroll = styled.div`
    display: block;
    position: absolute;
    position: fixed;
    bottom: 2.5%;
    left: 2.5%;
    z-index: 2;

    button {
        background-color: #e1e1e1;
        padding: 1rem 1.5rem;
        border-radius: 50%;
        -webkit-box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.74);
        -moz-box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.74);
        box-shadow: 0px 2px 12px -2px rgba(0,0,0,0.74);
        transition: all .5s ease;
    }

    i {
        font-size: 2rem;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

const Up = () => {

    return (
        <UpScroll>



            <button
                onClick={() => scroll.scrollToTop()}
            >
                <i className="fas fa-angle-up"></i>
            </button>

        </UpScroll>

    );
}

export default Up;