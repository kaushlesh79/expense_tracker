
import { useState , useEffect , useRef } from "react";

//var sum =0;

function App() {

  const [item , setItem] = useState({name : "" , price : 0}); // state (item is an object )
  
  const [itemlist , setItemlist] = useState([]);  // state for array of item

    const hasMounted = useRef(false); // ✅ useRef instead of useState

  // useffect 1 for fetching data from local storage 
  // expense data ko local storage me save krne ke liye useeffect ka use kr rhe hai
   
 useEffect(() => {
  const data = localStorage.getItem("expense-data");
  if (data) {
    setItemlist(JSON.parse(data));
  }
}, []);


  // useffect 
  // now entered data ko storing in localstorage in form of pair (key , item)

    useEffect(() => {
      if (hasMounted.current) {
      localStorage.setItem("expense-data", JSON.stringify(itemlist));
    } else {
      hasMounted.current = true;
    }
  }, [itemlist]);
    


  function Additem(){
    
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

  

  const items = itemlist.map((exp, idx) => (
  <li key={idx} style={{ color: exp.price > 1000 ? "red" : "black", marginBottom: "10px" }}>
    {exp.name} - ₹{exp.price}
  </li>
));



// total expense calculate krna reduce methode ka use krke reduce ek array ko single value mei la deta hai like acc mei sare values add hote jayenge curr.price krke each item ke // acc total_exp variable hai curr curr_item_price vriable

const total = itemlist.reduce((acc , curr) => acc + Number(curr.price) , 0);


  return (
      
    

    <div style ={{
       
      textAlign : "center" ,
      padding : "20px"
      
    }}>
     <h1>Expense Tracker</h1>
     
     <input style={{marginRight :"10px"}} type ="text" placeholder = "Enter name of item" value={item.name} onChange={(e) => setItem({...item , name:e.target.value})}></input>

     <input style={{marginRight :"10px"}} type = "number" placeholder="Enter price of item" value ={item.price} onChange={(e) => setItem({ ...item , price : e.target.value})}></input>

     <button style={{marginLeft :"10px"}} onClick={Additem}>Add Item</button>

     <h2>Itemlist</h2>
     <ul style = {{listStyle: "none" , padding : "0"}}>{items}</ul>
     
     <h3> Total Expense : {" "}
        
        <span style ={{color : total > 10000 ? "green" : total > 3000 ? "red" : "black" ,}}>
          {total > 10000 ? `Bhai abhi to majduri krna pdega ₹${total} ` : `₹${total}` }
        </span>
       </h3>
    </div>
  );
}

export default App;



//