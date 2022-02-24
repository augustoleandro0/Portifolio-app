import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 60px;
    background-color: #0d0c0c;
    display: flex;
    justify-content: space-between;
    height: 560px;
    top: 0;
    color: #fff;

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
