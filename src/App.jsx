import NavBar from "./components/NavBar/NavBar"
import logoNav from "./imagenes/libros.png"

function App(){

    return (
        <div>
            <NavBar img = {logoNav}/>
            <img src="./imagenes/libros.JPG"></img> 
        </div>

    )
}

export default App