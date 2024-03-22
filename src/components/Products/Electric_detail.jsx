import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {app} from '../Firebase'
import { getDatabase, ref, onValue } from "firebase/database";
import Review from "../review/Review";
import Review_output from "../review/Review_output";
import Quantity from "../Quantity";
import { Button } from "../Button";


const Electric_detail = () => {
    const { id } = useParams();
    const [proid, setProid] = useState();
    // let x=product.find((c)=>c.id==id);
    useEffect(() => {
      const db = getDatabase(app);
  
      const Refer = ref(db, "Electronics/" + id);
      onValue(Refer, (snapshot) => {
        const data = snapshot.val();
  
        setProid(data);
      });
    }, []);
  return (
    <div>
      {proid && (
        <div>
          <div className="ele-container">
            <div className="ele-div">
              <img
                src={proid.ImageUrl}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="ele-div">
            <p>Cartez</p>
            {proid.discount && (
              <p style={{backgroundColor:"#ABA944",width:"60px",padding:"5px"}}>{proid.discount} %</p>
            )}
              <h1 className="title">{proid.Title}</h1>
{proid.Brand &&
(<p>{proid.Brand}</p>)}
              <h5>Price : {proid.Price}$   <s style={{color:"red"}}>{proid.CAP}</s></h5>
            <Quantity/>
             <Button/>
              <p>
                Description: <br />
                {proid.Description}
              </p>
            </div>
          </div>
        </div>
      )}
<Review/>
<Review_output/>
    </div>
  )
}

export default Electric_detail