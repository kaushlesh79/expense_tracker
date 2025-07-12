// here input fields and button will be putted 

//jsx component 

import React , { useContext} from "react";

import {ExpenseContext} from "../context/ExpenseContext";



const ExpenseForm = () => {

     const {item , itemlist , setItem , setItemlist} =useContext(ExpenseContext);

     function Additem (){

          if(item.name.trim() !== "" && Number(item.price)>0){
      // ensuring item name is string and item price is number

      const newItem = {
        name : item.name ,
        price : Number(item.price)


      }
    setItemlist([...itemlist , newItem]);  // adding  item in itemlist 
    setItem({name : "" , price : 0});   // state of item is reseted // nothing will be there in item(state) // aur react kahega re render kro // then hme updated ui dikhta hai (virtual dom ki wajah se)
    
  }
  console.log(itemlist);
}




return (
     <div style={{listStyle:"none" , padding : 0}}>
      <input style={{marginRight :"10px"}} type ="text" placeholder = "Enter name of item" value={item.name} onChange={(e) => setItem({...item , name:e.target.value})}></input>

     <input style={{marginRight :"10px"}} type = "number" placeholder="Enter price of item" value ={item.price} onChange={(e) => setItem({ ...item , price : e.target.value})}></input>

     <button style={{marginLeft :"10px"}} onClick={Additem}>Add Item</button>
     </div>
);

};// Expense form componet final bracket 


export default ExpenseForm;


