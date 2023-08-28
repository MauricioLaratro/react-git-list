import styled from 'styled-components'

const LanguageStyled = styled.div`
    display: flex;
    gap: .5rem;
    align-items: center;
    font: var(--caption-regular);
    &:before{
        content: '';
        block-size: 1rem;
        inline-size: 1rem;
        border-radius: 50%;
        background: ${({ color }) => color};
    }
`

const languages = {
    ruby: {
        color: 'red'
    },
    css: {
        color: 'green'
    },
    javascript: {
        color: 'yellow'
    }
}

function Language({ name }) {
    const formattedName = name.toLowerCase()
    const color = languages[formattedName] ? languages[formattedName].color : 'white'

    return (
        <LanguageStyled color={color}>
            {name}
        </LanguageStyled>
    )
}

export default Language
