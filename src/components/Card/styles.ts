import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: -20px;
    > h1 {
        margin: 20px;
        padding-top: 30px;
        text-align: center;
        color: #3a41e4;
    }
`;

export const Cards = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
   

    @media (max-width: 900px){
        flex-direction: column;
    }

    > div {
        text-align: center;
        margin: 20px 10px 20px;
        padding: 50px;
        background-color: #8a8efe;
        border: 3px solid #3a41e4;
        border-radius: 2em;
    }
`;  

