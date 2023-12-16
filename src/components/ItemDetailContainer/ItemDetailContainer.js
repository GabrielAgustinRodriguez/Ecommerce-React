import {useState, useEffect} from "react"
import {getProductById} from "../../DataSet"
import ItemDetail from "../ItemDetail/ItemDetail"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState(null)

    useEffect(()=>{
        getProductById("1")
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[])

    return(
        <div className="ItemListContainer">
            <ItemDetail{...product}/>                
        </div>
    )

}

export default ItemListContainer
