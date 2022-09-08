import React, { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import ProductList from "./components/productlist/ProductList";
const App =()=>{
    const [products , setProducts] =useState([
        {id :1 , title : 'Html'},
        {id :2 , title: 'Css'},
        {id : 3 , title :'java script'}
    ])
    const deleteProduct=(id)=>{
        setProducts(products.filter((item ) => item.id !== id))
    }
    const addProduct=(title)=>{
const id= Math.floor(Math.random() * 10000)
const newProduct ={id, ...title}
setProducts([...products , newProduct])
    }  
return(
    <div className="container">
        <AddProduct onAdd={addProduct}/>
<ProductList products={products} onDelete={deleteProduct}/>
</div>
)
}

export default App;