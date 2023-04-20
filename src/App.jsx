import { useState } from "react"
import Perfil from "./components/Perfil/Index"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposLis"

function App() {

  const [FomularioVisivel, setFomularioVisivel] = useState(false)
  const [nomeUsuario, setNomeUsuario] = useState('')


  return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario}/> 
          <ReposList nomeUsuario={nomeUsuario}/>
        </>
      )}

      {/* {FomularioVisivel && (<Formulario />)}
      <button onClick={()=> setFomularioVisivel(!FomularioVisivel)} type="button" >toggle form</button> */}
    </>

  )
}

export default App
