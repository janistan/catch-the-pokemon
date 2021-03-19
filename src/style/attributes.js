import styled from '@emotion/styled'

export const Attributes = styled.div`
    float: left;
    border-radius: 20px;
    padding: 0;
    text-align: center;
    background-color: ${props => props.color ? '#9bcc50' : 'white'};
    border: ${props => props.color ? '' : '1px solid grey'};
    
`

export default Attributes;