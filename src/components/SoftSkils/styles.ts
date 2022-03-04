import styled from 'styled-components';

export const Container = styled.div`
    background-color: #0d0c0c;
    margin-top: 50px;
    padding-bottom: 70px;
    
    scroll-snap-align: start;

    @media (max-width: 100px){
         width: 149%;
     }
     > h1{
        padding-top: 70px;
         text-align: center;
         color: #3a41e4;
     }


     > div img{
        background-color: #3a41e4;
        border-radius: 30px;
        color: #fff;
     }
`;



