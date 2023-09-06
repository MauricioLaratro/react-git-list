import styled from 'styled-components'

const SeparatorStyled = styled.div`
    border-block-end: 1px solid var(--grey);
    margin-block: 1.5rem;

    @media screen and (max-width: 768px){
        display: none;
    }
`

function Separator() {
    return (
        <SeparatorStyled>
        </SeparatorStyled>
    )
}

export default Separator
