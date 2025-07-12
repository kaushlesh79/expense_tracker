
import React ,{ useState , useEffect , useRef } from "react";

import ExpenseForm from "./components/ExpenseForm";

import Expenselist from "./components/ExpenseList";

import { ExpenseContext } from "./context/ExpenseContext";


//var sum =0;

function App() {

  const [item , setItem] = useState({name : "" , price : 0}); // state (item is an object )
  
  const [itemlist , setItemlist] = useState([]);  // state for array of item

    const hasMounted = useRef(false); //  useRef instead of useState

  // useffect 1 for fetching data from local storage 
  // expense data ko local storage me save krne ke liye useeffect ka use kr rhe hai
   
 useEffect(() => {
  const data = localStorage.getItem("expense-data");
  if (data) {
    setItemlist(JSON.parse(data));
  }
}, []);


  // useffect 
  // now entered data ko storing in localstorage in form of json pair (key , item)

    useEffect(() => {
      if (hasMounted.current) {
      localStorage.setItem("expense-data", JSON.stringify(itemlist));
    } else {
      hasMounted.current = true;
    }
  }, [itemlist]);
    


  
    
    function deletefn (idx_to_be_deleted){

     const updatedlist = itemlist.filter((_ , idx) => idx!==idx_to_be_deleted);

     setItemlist(updatedlist);


}

  

  


  return (
      //ye sbko ye sari values provide krega hr value props ke through mangni nhi pdegi props passing/drilling both hi hectic hota h  
    <ExpenseContext.Provider value = {{item , setItem , itemlist , setItemlist ,deletefn }}>
     
     <div style={{textAlign:"center" , padding : "20px"}}>
      <h1>Expense Tracker</h1>
      <ExpenseForm/>
      <Expenselist/>

     </div>



    </ExpenseContext.Provider>
    

  )
}

export default App;



//