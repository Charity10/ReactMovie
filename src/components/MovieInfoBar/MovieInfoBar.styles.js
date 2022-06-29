import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background: black;
  padding: 0 20px;
`;


export const Content = styled.div`
    display: flex;
    max-width: maxWidth;
    width: 100%;
    margin: 0 auto;

    .column {
        display: flex;
        align-items: center;
        justify-content: center;
        background: grey;
        border-radius: 0 20px;
        margin: 0 20px;
        flex: 1;

        :first-child {
            margin-left: 0;
        }

        :last-child {
            margin-right: 0;
        }
    }

    @media Screen and (max-width: 768px) {
        display: block;

        .column {
            margin: 20px 0;
        }
    }
`;