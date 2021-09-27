import cx from 'classnames';
import {useState}  from 'react';
import { v4 as uuidv4 } from 'uuid';
const Home =()=>{

  const[newitem,setNewitem]=useState([""]);
  const [items, setItems] = useState([
    {
      id:"123",
      message:"byumilk",
      done:false
    },
  ]);


  //add new item
  const handlenewitem =() =>
  {
    if(newitem){
      setItems
      ([
        {
          id:uuidv4(),
          message:newitem,
          done:false,
        },
         ...items]);
      setNewitem(""); 
    } 
  }

  //check input field empty or not
  const handleToggle =(id) =>{
    const _item = items.map((item) =>{
      if(item.id == id){
        return{
          ...item,
          done: !item.done,
        };
      };
      return item;
    });
    setItems(_item);
  };

  return (
   <div className="w-3/4 mx-auto text-center">
     <h1 className="text-5xl uppercase font-bold p-8">TODO LIST</h1>
     <input type="text" className="w-1/2 text-gray-900 px-4 py-2 text-center rounded-md" value={newitem} onChange={(e)=>setNewitem(e.target.value)}/>
     <button type="button" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ml-8 h-10 w-16 rounded-md " onClick={handlenewitem}>Add</button>

     <ul className="m-12">
        {/* firstlly get not done items  */}
       {
       items
       .filter(({done})=> !done)
       .map(({id,message,done})=>(
         <li 
         key={id} 
         onClick={() => handleToggle(id) } 
         className={cx( "item", {done}, "h-auto","bg-gray-600" ,"w-1/2","ml-48", "p-2" ,"mt-4")}
         >{message}</li>
       ))
       }
       
       {/* then see done items  */}
       {
       items
       .filter(({done})=> done)
       .map(({id,message,done})=>(
         <li key={id} onClick={() => handleToggle(id) } className={cx( "item", {done},"h-auto","bg-blue-600" ,"w-1/2","ml-48", "p-2" ,"mt-4")}>{message}</li>
       ))
       }
       
     </ul>
   </div>
  )
}
export default Home