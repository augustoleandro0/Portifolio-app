import styled from 'styled-components';

export const Container = styled.div`
   z-index: 100;
   width: 100%; 
   position: fixed;
   top: 0;
`;

export const Logo = styled.div`
    align-items: middle;
    padding: 10px;
    margin: 0px 30px 0 0;
    border-radius: 50px;
`;

export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    vertical-align: middle;
    padding: 10px;
    color: #fff;
    background-color: #000;
`;


export const Navigator = styled.div`
    width: 100%;

    > ul {
        list-style: none;
        justify-content: center;
        display: flex;
        
    }

    > ul li {
        margin: 10px; 
    }

    @media (max-width: 540px){
        display: none;
     }
`;

export const Baixar = styled.div`
   > button {
       padding: 0px 20px;
        margin: 0px 30px 0 0;
        border: none;
        color: #fff;
        border: 2px solid #fff;
        background-color: #000;
        border-radius:  10px;
   }

   @media (max-width: 540px){
        >button {
            padding: 10px
        }
     }
`;