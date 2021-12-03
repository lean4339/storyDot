import React from "react";


export default function Product(props){
    const id = props.id
    const title = props.title;
    const image = props.image;
    const price = props.price;
    const setProduct = props.setProduct;
    const setOpenModal = props.setOpenModal;
    const openModal = props.openModal;

    async function detalle(){
        const data = await    fetch(`https://still-river-75502.herokuapp.com/products/${id}`)
        const product = await data.json()
        setProduct(product);
        setOpenModal(!openModal);

    }
  
    
        
    return(
        <article onClick={()=>{detalle()}} className="task">
            <img className="product-image" src={image} alt="imagen de product"/>
            <div className="info-container">
            <h6 className="task-title">{title}</h6>
            <p className="price">$ {price}</p>
            </div>
        </article>
    )
}