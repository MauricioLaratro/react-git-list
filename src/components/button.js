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
    transition: .2s ease;
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

export const ButtonContrast = styled(Button)`
    background: var(--white);
    color: var(--bg-button);
    &:hover{
        background: var(--bg-button);
        color: var(--white);
    }
`
export const ButtonRounded = styled(Button)`
    min-inline-size: initial;
    border-radius: 50%;
    padding: .75rem;
    border: 2px solid var(--grey-2);
    &:hover{
        background: var(--bg-button);
        border: 2px solid var(--grey-2);
        transform: scale(1.1);
    }
`
// export const ButtonClose = styled(Button)`
//     margin: 0;
//     align-self: flex-end;
//     min-inline-size: 0;
//     inline-size: 1.5rem;
//     block-size: 1.5rem;
//     border-radius: .25rem;
//     padding: 0;
//     border: 2px solid var(--grey-2);
//     color: white;
//     &:hover{
//         background: var(--bg-button);
//         border: 2px solid var(--grey-2);
//         transform: scale(1.1);
//     }
// `

export default Button
