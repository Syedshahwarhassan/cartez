import { useState } from "react";
import { useParams } from "react-router-dom";
import { getDatabase, ref,set } from "firebase/database";
import {app} from '../Firebase'
import { toast } from "react-toastify";
const Write_review = () => {
  const {id}=useParams();
  console.log(id)
  const [title,setTitle]=useState();
  const [review,setReview]=useState();
  const [user,setUser]=useState();

  const submit=()=>{
    const unique=Math.floor(Math.random()*100000)
const db=getDatabase(app);
set(ref(db,'all/' + id + '/review/'+unique),{
  Title:title,
  Review:review,
  User:user,
  Reply:'',
  image:"https://firebasestorage.googleapis.com/v0/b/cartez-2c9d2.appspot.com/o/149071%20(1).png?alt=media&token=7384cedf-34c2-4a0f-b8f4-91a73441321c"
})
toast.success("Thanks for Review")
  }
  return (
    <div>
      <div className="write-review" id="write-review">
        <h1 className="text-center m-4">Write Review</h1>
        <label className="review-title">
          Title:
          <br />
          <input
            type="text"
            required
            placeholder="title of  your review"
            name="value"
       onChange={(e)=>setTitle(e.target.value)}
          />
        </label>
        <br />
        <label className="review-text">
          Review:
          <br />
          <textarea
          
            placeholder="your Review here...."
            name="text"
          onChange={(e)=>setReview(e.target.value)}
          ></textarea>
        </label>
        <br />
        <label className="review-name">
          {" "}
          User Name:
          <br />
          <input
            type="text"
            required
        onChange={(e)=>setUser(e.target.value)}
            placeholder="Your Name for Display"
            name="name"
          />
        </label>
        <br />
        <button className="review-btn" onClick={()=>submit()}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Write_review;
