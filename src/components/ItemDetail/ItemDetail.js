import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, descripcion, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
        <picture>
            <img src={img} alt= {name} className="ItemTag"/>
        </picture>
        <section>
            <p className="Info">
                Categoria: {category}
            </p>
            <p className="Info">
                Descripcion: {descripcion}
            </p>
            <p className="Info">
                Precio: {price}
            </p>
        </section>
        <footer className="ItemFooter">
            <ItemCount initial= {1} stock={stock} onAdd={(quantity) => console.log("cantidad agregada", quantity)}/>
        </footer>
        </article>
    )
}