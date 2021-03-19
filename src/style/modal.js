
import styled from '@emotion/styled'


export const Modal = styled.div`
    position: fixed;
    background: #00000050;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;   
`

export const Box =  styled.div`
    position: relative;
    margin: 0 auto;
    height: auto;
    max-height: 70vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: #fff;
    border-radius: 15px;
    padding: 20px;
    border: 1px solid #999;
    overflow: auto;
`


export default Modal;