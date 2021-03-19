import styled from '@emotion/styled'

export const Card = styled.div`
    // cursor: pointer;
    align-items: center;
    box-shadow: 0 1px 6px 0 rgb(49 53 59 / 12%);
    border-radius: 12px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    padding: 16px;
    max-width: 192px;
    overflow: hidden;
    &:hover {
        border: 2px outset;;
    }
`

export default Card;