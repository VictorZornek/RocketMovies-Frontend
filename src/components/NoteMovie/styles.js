import styled from "styled-components";

export const Container = styled.button`
    padding: 3.2rem;
    margin-bottom: 2.4rem;

    border: none;
    border-radius: 1.6rem;
    
    color: ${({ theme }) => theme.COLORS.GRAY_900};
    background-color: ${({ theme }) => theme.COLORS.PINK_TRANSPARENT};

    text-align: justify;

    > h1 {
        font-size: 2.4rem;

        margin-bottom: .8rem;

        color: ${({ theme }) => theme.COLORS.WHITE_500};
    }

    > p {
        margin-bottom: 1.7rem;
    }

    > footer {
        display: flex;
        gap: .8rem;
    }
`