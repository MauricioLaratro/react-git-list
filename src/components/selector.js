import styled from 'styled-components'


const SelectorStyled = styled.select`
    border: none;
    border-radius: .5rem;
    background: var(--bg-button);
    color: var(--white);
    padding-inline: 1rem;
    font: var(--body2-semi-bold);
    cursor: pointer;
    /* appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none; */

    &:focus{
        background: var(--bg-selector);
    }
`

function Selector( props ) {
    const changeSelection = (event) => {           
        if (props.changeSelection)
            props.changeSelection(event);
    }
    return (
        <SelectorStyled onChange={changeSelection}>
            {props.children}
        </SelectorStyled>
    )
}

export default Selector
