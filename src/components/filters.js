import styled from 'styled-components'
import Icon from './icon'
import ModalContent from './modal'

const FiltersStyled = styled.div`
    grid-area: filters;
    background-color: blue;
`

function Filters() {
    return (
        <FiltersStyled>
            <ModalContent />
        </FiltersStyled>
    )
}

export default Filters
