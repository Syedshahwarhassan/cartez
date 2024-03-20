import React, { useEffect, useState } from 'react'
import { getDatabase,ref,onValue } from 'firebase/database'
import {app} from '../Firebase'
import { Link } from 'react-router-dom';
const Electronic = () => {
    const [data,setData]=useState();
useEffect(()=>{
    const db=getDatabase(app);
const Ref=ref(db,'/Electronics')
onValue(Ref,(snapshot)=>{
    const dat=snapshot.val()
setData(dat)
})
},[])
  return (
    <div className="card-container d-flex flex-wrap">
    {data && (
      <div className="card-container d-flex flex-wrap">
        {Object.entries(data).map(([key, c]) => {
          return (
            <div key={key} className="mini-card" style={{ width: "13rem" }}>
              <Link to={`/all/${c.id}`}>
                <img
                  src={c.ImageUrl}
                  className="card-img-top"
                  style={{ height: "200px" }}
                  alt="..."
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{c.Title}...</h5>
                <h6 className="card-title">{c.Category}...</h6>
                <p style={{ color: "red" }}>
                  <span style={{ color: "black" }}>Price :</span>
                  {c.Price}$
                </p>
              </div>
            </div>
          );
        })}
      </div>
    )}

  </div>
  )
}

export default Electronic