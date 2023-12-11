import {useState, useEffect} from "react"
import { getProducts } from "../../DataSet"
import itemList from "../ItemList/ItemList"



const ItemListContainer = ({greeting}) => {

        const [products, setProducts] = useState([])

        useEffect(() => {
                getProducts()
                .then(response => {
                })
                .catch(error => {
                        console.error(error)
                })
        },[])

        return (
            <div>
                    <h1>{greeting}</h1>
                    <itemList products={products}/>
            </div>

        )
}

export default ItemListContainer 