import React, { useState } from 'react'

const Upload = () => {
const [title,SetTitle]=useState();
const [des,SetDes]=useState();
const [price,SetPrice]=useState();
const [cate,SetCate]=useState();
const [img,SetImg]=useState('');
const submit = () =>{
    console.log(title)
    console.log(des)
    console.log(price)
    console.log(cate)
    console.log(img)
}

  return (
    <div>
 <form onSubmit={(e)=>e.preventDefault()} action="#" method="post" encType="multipart/form-data" className="form-container">
  <label htmlFor="name" className="form-label">Title:</label>
  <input type="text" id="name" name="name" required onChange={(e)=>SetTitle(e.target.value)} className="form-input" />
  <label htmlFor="description" className="form-label">Description:</label>
  <textarea id="description" name="description" rows={4} required  onChange={(e)=>SetDes(e.target.value)}className="form-input" defaultValue={""} />
  <label htmlFor="price" className="form-label">Price:</label>
  <input type="number" id="price" name="price" onChange={(e)=>SetPrice(e.target.value)}min={0} step="0.01" required className="form-input" />
  <label htmlFor="category" className="form-label" >Category:</label>
  <select id="category" name="category" required onChange={(e)=>SetCate(e.target.value)} className="form-input">
    <option value>Select Category</option>
    <option value="Electronics">Electronics</option>
    <option value="Clothing">Kurt's</option>
    <option value="Books">Men Shirts</option>
    {/* Add more options as needed */}
  </select>
  <label htmlFor="image" className="form-label">Image:</label>
  <input type="file" id="image" onChange={(e)=>SetImg(e.target.files[0])} name="image" accept="image/*" required className="form-file-input" />
  <input type="submit" onClick={()=>{submit()}} defaultValue="Submit" className="form-submit" />
</form>

    </div>
  )
}

export default Upload