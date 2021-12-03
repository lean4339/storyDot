import React from "react";


export default function Detail(props){
    const {image_url,name,description,price} = props.product
    const setOpenModal = props.setOpenModal;
    const openModal = props.openModal;

    function cerrar(){
        setOpenModal(!openModal);
    }

    
  
    
        
    return(
      <section className="editar">
            <article onClick={()=>{cerrar()}} className="task-detail">
            <img className="product-image" src={image_url} alt="imagen de product"/>
            <div className="info-container-detail">
            <h6 className="task-title">{name}</h6>
            <p className="price">$ {price}</p>
            <p>{description}</p>
            </div>
        </article>
      </section>
    )
}