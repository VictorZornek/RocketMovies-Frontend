import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isNew}) => isNew ? theme.COLORS.BACKGROUND_BLACK_700 : theme.COLORS.BLACK_500};

    color: ${({ theme }) => theme.COLORS.WHITE_500};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_400}` : 'none'};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-add, .button-delete {
        color: ${({ theme }) => theme.COLORS.PINK}
    }

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;

        color: ${({ theme }) => theme.COLORS.WHITE_500};
        background: transparent;

        border: 0;
    }
`