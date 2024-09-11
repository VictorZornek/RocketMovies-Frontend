import styled from "styled-components";

export const Container = styled.span`
    font-size: 1.2rem;

    padding: .5rem 1.6rem;

    border-radius: 1rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100} !important;
    background-color: ${({ theme, $isPreview }) => 
        $isPreview ? theme.COLORS.PINK_TRANSPARENT : theme.COLORS.BACKGROUND_400};
`