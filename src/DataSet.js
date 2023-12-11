const products =[

    {
        id:"1",
        name:"El señor de los anillos: la comunidad del anillo",
        price: 9000,
        category: "Fantasia",
        img: "https://images.cdn1.buscalibre.com/fit-in/360x360/c6/78/c678ab2c90ed50d7d8849e30bc92b05a.jpg",
        stock: 25,
        description: "Libro El señor de los Anillos: la comunidad del anillo"
    },
    {
        id:"2",
        name:"La guerra de los mundos",
        price: 6500,
        category: "Fantasia",
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/9f/9a/9f9a08922c49c945bec7e1d2cc8c6b59.jpg",
        stock: 20,
        description: "Libro La guerra de los mundos"
    },
    {
        id:"3",
        name:"Frankenstein",
        price: 15000,
        category: "Fantasia",
        img: "https://images.cdn1.buscalibre.com/fit-in/360x360/d3/b6/d3b63d03adc6b07a6ad05e32aa5a1411.jpg",
        stock: 15,
        description: "Libro Frankenstein"
    },
    {
        id:"4",
        name:"La iliada",
        price: 2500,
        category: "Clasicos",
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/98/bc/98bcf71a02eb05d59ed47b8bae4c7855.jpg",
        stock: 25,
        description: "Libro La iliada"
    },
    {
        id:"5",
        name:"La odisea",
        price: 27000,
        category: "Clasicos",
        img: "https://images.cdn3.buscalibre.com/fit-in/360x360/30/0d/300dff10bb14e05d86944f2c9ce8f7ec.jpg",
        stock: 30,
        description: "Libro La odisea"
    },
    {
        id:"6",
        name:"Las mil y una noches",
        price: 26000,
        category: "Clasicos",
        img: "https://images.cdn2.buscalibre.com/fit-in/360x360/b7/8d/b78dbac0c33e08954e41bf810e694008.jpg",
        stock: 45,
        description: "Libro Las mil y una noches"
    }
]

export const getProducts = () =>{
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}