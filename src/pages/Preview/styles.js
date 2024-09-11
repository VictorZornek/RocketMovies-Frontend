import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 10.5rem auto;
    grid-template-areas: 
    "header"
    "content";
`

export const Content = styled.div`
    grid-area: content;

    max-height: 65vh;

    padding: 4rem 10rem 0 11.6rem;

    > a {
        display: flex;
        align-items: center;
        gap: .8rem;

        max-width: fit-content;

        color: ${({ theme }) => theme.COLORS.PINK};
    }
`