import './App.css';
import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters';
import RepoList from './components/repo-list';
import Search from './components/search';
// import repoData from './components/repo-data';
import { useState, useEffect } from 'react'
import { getUser, getRepos } from './services/users';
import { useParams } from 'react-router-dom';


// const repoList = [
//   {
//     name: 'mi primer proyecto con react',
//     id: 123,
//   },
//   {
//     name: 'mi segundo proyecto con react',
//     id: 124,
//   },
// ]

// al utilizar useParams de la dependencia react-router-dom establecemos que username es el user que se devuelve dentro del objeto que brinda useParams. Luego decimos que si no establecemos ningun username como /leonidasesteban por ejemplo, el user default sea el mio 'mauriciolaratro' de lo contrario se mostraria la app sin informacion de ningun usarios al iniciarla y mostrar la ruta '/'.
function App() {
  const params = useParams()
  let username = params.user
  if (!username) {
    username = 'mauriciolaratro'
  }
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  useEffect(() =>{
    getUser(username).then(({ data, isError }) =>{
      if(isError) {
        console.log('No hemos encontrado el usuario!')
        return
      }
      setUser(data)
    })
    
}, [])
  useEffect(() =>{
    getRepos(username).then(({ data, isError }) =>{
      if(isError) {
        console.log('No hemos encontrado los repos!')
      return
      }
      setRepos(data)
    })

}, [])
  return (
    <Layout>
      <Profile {...user}/>
      <Filters />
      <RepoList repoList={repos} />
      <Search />
    </Layout>
  )
}

export default App;
