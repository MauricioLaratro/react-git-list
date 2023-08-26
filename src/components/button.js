import { isValidElement } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    display: inline-flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none !important;
    background: var(--bg-button);
    color: var(--white);
    border: 1px solid var(--bg-button-2);
    border-radius: .5rem;
    min-inline-size: 135px;
    padding-block: .25rem;
    font: var(--button);
    transition: .2s ease-in-out;
    &:hover{
        background: var(--bg-button-2);
        border: 1px solid var(--grey);
    }
`

function Button({ text, link, className, icon }) {
    const component = link ? 'a' : 'button'
    let IconComponent = null
    if (icon) {
        if (isValidElement(icon)) {
            IconComponent = icon
        }
    }
    return (
        <ButtonStyled as={component} href={link} className={className}>
            {IconComponent}
            {text}
        </ButtonStyled>
    )
}

export default Button
