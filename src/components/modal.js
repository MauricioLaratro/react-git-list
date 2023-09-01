import React ,{ useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import Overlay from "./overlay"
import styled from 'styled-components'
import { ButtonContrast } from "./button"
import  InputText  from './input-text'


// class Modal  extends React.Component{
//     constructor(props) {
//         super(props)
//     }
//     state = {}
//     componentDidUpdate() {

//     }
//     componentWillUnmount() {

//     }
//     componentDidMount(){
//         this.setState({
            
//         })
//     }
//     render (){
//         return (

//         )
//     }
// }


const ModalContentStyled = styled.form`
    background: var(--bg);
    color: var(--white);
    padding: 1.5rem;
    border-radius: .5rem;
    position: fixed;
    // centramos vertical y horizontalmente el modal, con respecto al tamaño del overlay que es 100% del viewport.
    inset-block-start: 50%;
    inset-inline-start: 50%;
    // ya que el elemento del modal en si tiene un tamaño propio, debemos restar el -50% del mismo para que este completamente centrado en la pantalla. 
    transform: translateY(-50%) translateX(-50%);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-inline-size: 24rem;

    .title{
        font: var(--headline-2-semi-bold);
        margin: 0;
    }
`


function ModalContent () {
    const form = useRef(null)
    const navigator = useNavigate()

    // const [isActive, setIsActive] = useState(true)

    function handleSubmit(event) {
        event.preventDefault()
        // setIsActive(false)
        const fromData = new FormData(form.current)
        navigator(`/${(fromData.get('username'))}`)

    }

    return (
        <Overlay>
            {/* {
                isActive ? <ModalContentStyled /> : null
            } */}
            <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
                <h2 className="title">Busca cualquier usuario</h2>
                <InputText type="text" name="username" placeholder="Username" />
                <ButtonContrast text="Buscar" />
            </ModalContentStyled>
        </Overlay>
    )

}

export default ModalContent