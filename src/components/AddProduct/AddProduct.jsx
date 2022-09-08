import { useState } from "react";
import './AddProduct.css'
const AddProduct=({onAdd})=>{
    const [title , setTitle] = useState('')
    const submitForm=(event)=>{
        event.preventDefault();
        onAdd({title})
        setTitle('')

    }
return(
<div>
    <form className="add-form-product" onSubmit={submitForm}>
        <div className="form-control">
            <input 
            type="text"
            placeholder="add your skill"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <button type="submit" className="btn-form">Add</button>
    </form>
</div>
)
}

export default AddProduct;