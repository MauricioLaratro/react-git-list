import styled from 'styled-components'
import InputText from './input-text'
import Selector from './selector'
import Separator from './separator'



const FiltersStyled = styled.div`
    grid-area: filters;
    .count{
        font: var(--headline2-semi-bold);
        color: var(--white);
        margin-block-end: 1.5rem;
    }
    .action-list {
        display: flex;
        gap: 1rem;
    }
    .select-list {
        display: flex;
        gap: .5rem;
    }
    .filter-title {
        color: var(--grey);
    }
    optgroup{
        background: var(--grey-2)  
    }
    optgroup>option{
        color: var(--black);   
    }
`

function Filters({ repoListCount, setSearch, setSelectedLanguage}) {
    function handleChange(event) {
        setSearch(event.target.value)
    }

    const changeLanguage = (event) => {
        setSelectedLanguage(event.target.value);
      }

    return (
        <FiltersStyled>
            <h3 className='count'>
                Repositorios {repoListCount}
            </h3>
            <div className='action-list'>
                <InputText 
                    placeholder='Busca un repositorio'
                    type='search'
                    onChange={handleChange}
                />
                <div className='select-list'>
                    <Selector>
                        <optgroup className='filter-title' label="Select Type">
                            <option value="" disabled selected hidden>Type</option>
                            <option value="all">All</option>
                            <option value="sources">Sources</option>
                            <option value="forks">Forks</option>
                            <option value="archive">Archive</option>
                            <option value="mirrors">Mirros</option>
                        </optgroup>
                    </Selector>
                    <Selector changeSelection={changeLanguage} defaultValue={"type"} value={"language"}>
                    <optgroup className='filter-title' label="Select Language">
                        <option value="" disabled selected hidden>Language</option>
                        <option value="all">All</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="javascript">JavaScript</option>
                    </optgroup>
                    </Selector>
                    <Selector>
                    <optgroup className='filter-title' label="Select Order">
                        <option value="" disabled selected hidden>Sort</option>
                        <option value="last-updated">Last updated</option>
                        <option value="name">Name</option>
                        <option value="stars">Stars</option>
                    </optgroup>
                    </Selector>
                </div>
            </div>
            <Separator />
        </FiltersStyled>
    )
}

export default Filters
