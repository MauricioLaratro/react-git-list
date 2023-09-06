import styled from 'styled-components'

const LayoutStyled = styled.main`
    min-block-size: 100vh;
    margin: auto;
    max-inline-size: 75rem;
    padding-inline: 24px;
    padding-block: 2.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas: "profile" "filters" "repo-list";
    
    overflow: hidden;
    @media screen and (min-width: 769px) {
        display: grid;
        grid-template-columns: 278px 1fr;
        grid-template-rows: auto 1fr;
        column-gap: 2rem;
        grid-template-areas: "profile filters" "profile repo-list";
    }
    @media screen and (max-width: 480px) {
        padding-inline-end: 2rem;
        min-inline-size: 100vw;
        padding-inline: 10px;
        margin: 0;

    }
`

function Layout({ children }) {
    return (
        <LayoutStyled>
            {children}
        </LayoutStyled>
    )
}

export default Layout
