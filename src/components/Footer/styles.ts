import styled from 'styled-components';

export const Container = styled.div`
    scroll-snap-align: start;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 20px;
    background-color: #3a41e4;
    color: #fff;

    @media (max-width:900px){
    flex-direction: column;
}

    > div{
        border: 2px solid #fff;
        padding: 10px;
    }

    >h4{
        text-align: center;
        margin: 10px;
    }
`;
