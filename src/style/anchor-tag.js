import styled from '@emotion/styled'

export const AnchorButton = styled.div`
    cursor: pointer;
    border: 0;
    border-radius: 10px;
    margin: 16px;
    padding: 16px;
    font-weight: 700;
    background-color: #ffcb05;
    box-shadow: 0 1px 6px 0 rgb(49 53 59 / 12%);
    transform: matrix(1, 0, 0, 1, 0, 0);
    & > img {
        height: 9vmin;
    }
    & > div {
        font-size: 1.1rem;
        font-weight: 700;
    }
`

export default AnchorButton;