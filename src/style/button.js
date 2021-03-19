import styled from '@emotion/styled'

export const Button = styled.button`
    
    border: 0;
    border-radius: 1rem;
    color: ${props => props.color ? 'white' : 'black' };
    background-color: ${props => props.color ? props.color : '#ffbe05'};
    width: ${props => props.save ? '40%' : (props.color ? 'auto' : '100%')};

`
export default Button;