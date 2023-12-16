import NavBar from "./components/NavBar/NavBar"; 
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemCount from "./components/ItemCount/ItemCount"

function App(){

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
               <Routers>
                    <Router path="/" element={<ItemListContainer/>}/>
                    <Router path="/category/:categoryId" element={<ItemListContainer />}/>
                    <Router path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Router path="*" element={<h1>NO ENCONTRADO</h1>}/>
                </Routers>
            </BrowserRouter>
            {/* 
            <NavBar/>
            <ItemListContainer greeting = {"Bienvenidos"}/>
            <ItemCount initial = {1} stock = {10} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
            */ }


            
        </div>

    )
}

export default App



