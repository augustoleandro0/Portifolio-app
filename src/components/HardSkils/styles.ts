import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: -20px;
    scroll-snap-align: start;
    

    @media (max-width: 100px){
         width: 149%;
     }
    > h1 {
        margin: 20px;
        padding-top: 70px;
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
        padding: 10px 30px 20px 10px;
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
