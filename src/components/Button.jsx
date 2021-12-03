import React from "react";

export default function Button (props){
    const setOpenModalView = props.setOpenModalView;
    const openModalView = props.openModalView;
    const setId = props.setId;
    const setEliminar = props.setEliminar;
    
    const name = props.name
    const id = props.id
    function trabajar(name,id){

        switch (name) {
            case "Ver":
                setOpenModalView(!openModalView);
                setId(id);
                break;
            case "Crear":
                console.log(name);
                break;
            case "Eliminar":
                console.log(name);
                setEliminar(true);
                break;
            case "Editar":
                console.log(name);
                break;
            default:
                console.log("hola");
                break;
        }
    
    }
    return (
        <button onClick={()=>{trabajar(name,id)}} className={` button ${name}`}>{name}</button>
    )
}