import styled from 'styled-components'


const SelectorStyled = styled.select`
    border: none;
    border-radius: .5rem;
    background: var(--bg-button);
    color: var(--white);
    padding-inline: 1rem;
    font: var(--body2-semi-bold);

    /* appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none; */

    &:focus{
        background: #4F545A;
    }
`

function Selector({ children }) {
    return (
        <SelectorStyled>
            {children}
        </SelectorStyled>
    )
}

export default Selector
