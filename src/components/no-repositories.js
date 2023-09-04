import styled from 'styled-components'

const NoRepositoriesStyled = styled.div`
& {
    display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

}
`

function NoRepositories() {
    return (
        <NoRepositoriesStyled>
            There are no Repositories
        </NoRepositoriesStyled>
    )
}

export default NoRepositories