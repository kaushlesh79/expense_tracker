
// yha list jo render hogi  aur calculation of total expense hoga 

//Expenselist 

import React ,{useContext} from "react";



import {ExpenseContext} from "../context/ExpenseContext";

const Expenselist = () => {

    const {itemlist , deletefn} = useContext(ExpenseContext);


    // total expense 

    const total = itemlist.reduce((acc , curr) => acc + Number(curr.price) , 0);


    return (
        <div>
            <h2>item list</h2>
            <ul style={{listStyle:"none" , padding : "0"}}>
         
                {itemlist.map((exp, idx) => (
  <li key={idx} style={{ color: exp.price > 1000 ? "red" : "black", marginBottom: "10px" }}>
    {exp.name} - ₹{exp.price}
   <button onClick={() => deletefn(idx)} style ={{color : "red"}}>❌</button>
  </li>))}

            </ul>

            <h3> Total Expense : {" "}
        
        <span style ={{color : total > 10000 ? "green" : total > 3000 ? "red" : "black" ,}}>
          {total > 10000 ? `Bhai abhi to majduri krna pdega ₹${total} ` : `₹${total}` }
        </span>
       </h3>

        </div>

    );

};

export default Expenselist;

// jo bhi return wala part tha wo bracket mei krke dal diya 







// total expense calculate krna reduce methode ka use krke reduce ek array ko single value mei la deta hai like acc mei sare values add hote jayenge curr.price krke each item ke // acc total_exp variable hai curr curr_item_price vriable




