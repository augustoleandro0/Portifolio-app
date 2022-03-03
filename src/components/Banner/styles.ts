import styled from 'styled-components';

export const Container = styled.div`
    height: 90vh;
    margin-top: 80px;
    background-color: #0d0c0c;
    display: flex;
    justify-content: space-between;
    color: #fff;
    top: 0;
    left: 0;
    right:0;
    bottom: 0;
    scroll-snap-align: start;


    @media (max-width: 100px){
         width: 149%;
     }
`;

export const TextBanner = styled.div`
    color: #fff;
    border-color: 2px solid green;
    padding-bottom: 120px;
    padding-left: 25px;
    align-self: center;
    font-size: 23px;

    > h1 strong {
        color: #3a41e4;
    }
`;
