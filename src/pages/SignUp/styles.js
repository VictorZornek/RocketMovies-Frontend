import styled from "styled-components";
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 16.3rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 4.8rem;

        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 1.4rem;

        margin-bottom: 4.8rem;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

    > h2 {
        font-size: 2.4rem;
        font-weight: 600;

        margin-bottom: 4.8rem;

        color: ${({ theme }) => theme.COLORS.WHITE_500};
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;
        
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    :nth-child(5) {
        margin: .8rem 0;
    }

    :nth-child(7) {
        margin: 1.6rem 0 4.2rem;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat;
    background-size: cover;


    opacity: 0.7;
`