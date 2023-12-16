import {useState, useEffect} from "react"
import { getProducts } from "../../DataSet"
import itemList from "../ItemList/ItemList"

import {useParams} from "react-router-dom"


const ItemListContainer = ({greeting}) => {

        const [products, setProducts] = useState([])

        const {categoryId} = useParams()

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