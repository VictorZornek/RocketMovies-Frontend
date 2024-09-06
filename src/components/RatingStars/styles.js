import styled from "styled-components";

export const Container = styled.span`
    display: flex;
    align-items: center;

    margin-bottom: 1.5rem;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        fill: ${({ theme }) => theme.COLORS.PINK};
    }
`