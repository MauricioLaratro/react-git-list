import React ,{ useRef } from "react"
import { useNavigate } from "react-router-dom"
import Overlay from "./overlay"
import styled from 'styled-components'
import { ButtonContrast } from "./button"
import  InputText  from './input-text'
import  ReactDOM  from 'react-dom'

import ButtonClose from "./button-close"
import Icon from './icon'


const modalRoot = document.getElementById('portal')
class ModalPortal  extends React.Component{
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }
    componentWillUnmount() {
        modalRoot.removeChild(this.el)
    }
    componentDidMount(){
        modalRoot.appendChild(this.el)
    }
    render (){
        return ReactDOM.createPortal(this.props.children, this.el)

    }
}

export default function Modal({ isActive, setShowModal }) {
    if (isActive) {
        return (
            <ModalPortal>
                <ModalContent setShowModal={setShowModal}/>
            </ModalPortal>
        )
    }
    return null
}


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


function ModalContent ({ setShowModal }) {
    const form = useRef(null)
    const navigator = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()
        
        const fromData = new FormData(form.current)
        navigator(`/${(fromData.get('username'))}`)
        setShowModal(false)

    }

    function handleClick() {
        setShowModal(false)
    }

    return (
        <Overlay>
            <ModalContentStyled ref={form} action="" onSubmit={handleSubmit}>
                <ButtonClose type="button" onClick={handleClick} icon={<Icon name="cancel" size={20}/>}/>
                <h2 className="title">Busca cualquier usuario</h2>
                <InputText type="text" name="username" placeholder="Username" />
                <ButtonContrast text="Buscar" />
            </ModalContentStyled>
        </Overlay>
    )

}
