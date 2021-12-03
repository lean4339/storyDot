import React,{useEffect, useState} from "react";
import Product from "./Product";

export default function Main(props){
    
    const [data,setData]= useState(false);
    const [tasks, setTasks] = useState();
    const setProduct = props.setProduct;
    const setOpenModal = props.setOpenModal;
    
    useEffect(()=>{
    
        fetch("https://still-river-75502.herokuapp.com/products")
        .then(Response=> Response.json())
        .then(data=>{
            setTasks(data);
        })
    
        
    },[data])

    function holis(){
        console.log("holis");
    }
   if(tasks){
    return(
        <main className="taskContainer">
            
            {  
                tasks.map((item) => (
                    <Product onClick={()=>{holis()}}  
                    key={item.id}
                    id={item.id}              
                    title={item.name}
                    description = {item.description}
                    image = {item.image_url}
                    price = {item.price}
                    setProduct = {setProduct}
                    setOpenModal = {setOpenModal}
                    />
                ))
            }
            
                
        </main>
    )
   }else{
       return(
           <div className="taskContainer">loading</div>
       )
   }
   
}