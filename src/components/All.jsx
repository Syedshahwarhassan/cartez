import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { app } from "./Firebase";
import { getDatabase, ref, onValue } from "firebase/database";
const All = () => {
  const [product, setProduct] = useState({});
  const db = getDatabase(app);
  useEffect(() => {
    const Ref = ref(db, "all/");
    onValue(Ref, (snapshot) => {
      const data = snapshot.val();

      
      setProduct(data);
    });
  }, []);
  return (
    <div className="card-container d-flex flex-wrap">
      {product && (
        <div className="card-container d-flex flex-wrap">
          {Object.entries(product).map(([key, c]) => {
            return (
              <div key={key} className="mini-card" style={{ width: "13rem" }}>
                <Link to={`/product/${c.id}`}>
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
                    {c.Price}$ <s style={{color:"gray"}}>{c.CAP}</s>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* {
    product.map((c)=>{
return(
    <div key={c.id} className="mini-card" style={{width: '13rem'}}>
  <Link to={`/electric/${c.id}`}><img src={c.thumbnail} className="card-img-top" style={{height:"200px"}} alt="..." /></Link>
  <div className="card-body">
    <h5 className="card-title">{c.title.slice(0,20)}...</h5>
    <p className="card-text">{c.brand}</p>
   <p style={{color:"red"}}><span style={{color:"black"}}>Price :</span>{c.price}</p>
  </div>
</div>
)

    })
} */}
    </div>
  );
};

export default All;
