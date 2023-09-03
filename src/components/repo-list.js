import styled from 'styled-components'
import RepoItem from './repo-item'


const RepoListStyled = styled.div`
    grid-area: repo-list;
    display: flex;
    flex-direction: column;
    gap: 2rem;

`

function RepoList({ repoList, search }) {
    let list = [...repoList]; // Hacemos una copia de la lista para no modificar la original

    // Agregamos esta función para ordenar por fecha de creación (created_at)
    list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    if (search !== '') {
        list = list.filter((item) => {
            return item.name.search(search) >= 0
        })
    }
    return (
        <RepoListStyled>
            {list.map((item) =>{
                return <RepoItem {...item} key={item.id} />
            })}
        </RepoListStyled>
    )
}

export default RepoList
