import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`
export const Header = styled.div`
    height: 14.4rem;

    padding: 6.4rem 0 5.9rem 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.PINK_TRANSPARENT};
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    gap: .8rem;

    margin: 6.4rem auto;
    
    max-width: 34rem;




`