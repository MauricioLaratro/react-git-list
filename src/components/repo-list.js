import styled from 'styled-components'
import RepoItem from './repo-item'
import NoRepositories from './no-repositories'

const RepoListStyled = styled.div`
    grid-area: repo-list;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media screen and (max-width: 480px){
        max-inline-size: 100vw;
    }
`

function RepoList({ repoList, search, selectedLanguage }) {
    let list = [...repoList]; // Hacemos una copia de la lista para no modificar la original

    // Agregamos esta función para ordenar por fecha de creación (created_at)
    list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    if (search !== '') {
        list = list.filter((item) => {
            return item.name.search(search) >= 0
        })
    }
    if (selectedLanguage && selectedLanguage !== '' && selectedLanguage !== 'all') {
        list = list.filter((item) => {
            if (item.language) {
                return item.language.toUpperCase() === selectedLanguage.toUpperCase();
            }
            return false;
        })
    }

    if (list.length === 0)
    return (<NoRepositories />)
    else
    
    return (
        <RepoListStyled>
            {list.map((item) =>{
                return <RepoItem {...item} key={item.id} />
            })}
        </RepoListStyled>
    )
}

export default RepoList