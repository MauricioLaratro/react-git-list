import React from 'react'
import styled from 'styled-components'

const ButtonCloseStyled = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin: 0;
    align-self: flex-end;
    min-inline-size: 0;
    inline-size: 1rem;
    block-size: 1rem;
    border-radius: .25rem;
    padding: 0;
    border: 2px solid var(--grey-2);
    color: white;
    transition: .2s ease;
    &:hover{
        background: var(--bg-button);
        border: 2px solid var(--grey-2);
        transform: scale(1.1);
    }
`

function ButtonClose({ icon, onClick, className }) {
    return (
        <ButtonCloseStyled type="button" onClick={onClick} className={className}>
            {icon}
        </ButtonCloseStyled>
    )
}

export default ButtonClose
