import styled from "styled-components";

export const Container = styled.button`
    height: 5.6rem;

    border: none;
    border-radius: 8px;

    padding: 1.6rem 3.2rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
`