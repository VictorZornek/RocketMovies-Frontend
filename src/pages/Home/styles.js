import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > main {
        padding: 0 10.6rem;

        div {
            display: flex;
            justify-content: space-between;
            align-items: center;

            margin: 4.7rem 0 3.7rem 0;

            h1 {
                font-size: 3.2rem;
                font-weight: normal;
                color: ${({ theme }) => theme.COLORS.WHITE_900};
            }

            span {
                display: flex;
                align-items: center;
                gap: 2.5px;

                color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
            }
        }
    }
    

`