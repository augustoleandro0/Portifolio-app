import styled from 'styled-components';

export const Container = styled.div`
    scroll-snap-align: start;
     @media (max-width: 100px){
         width: 149%;
     }
    > h1{
        padding-top: 70px;
        padding-bottom: 30px;
         text-align: center;
         color: #3a41e4;
     }

`;

export const Projetos = styled.div`
    display: flex;
    text-align: center;

    @media (max-width: 900px){
        flex-direction: column;
    }
`;

export const Projeto = styled.div`
    flex: 1;
    margin: 20px;
    padding: 20px;
    border: 2px solid #3a41e4;
    border-radius: 10px;
     

`;
export const Buttons = styled.div`

    display: flex;
    justify-content: center;

    

    >button{
        border: none;
        color: #fff;
        padding: 10px;
        margin: 20px;
        border-radius: 5px;
        background-color: #3a41e4;
    }

`;