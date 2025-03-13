import React, { useState } from "react";
import "./App.css";

const App = () => {
  const data = [
    { id: 1, text: "Div 01" ,  bg : "red" },
    { id: 2, text: "Div 02" , bg : "blue"},
    { id: 3, text: "Div 03",  bg : "orange" },
    { id: 4, text: "Div 04",  bg : "yellow" },
    { id: 5, text: "Div 05",  bg : "green" },
  ];


  const [items ,  setItems] =useState(data) ; 

  const [draggedItem , setDraggedItem] = useState(null)

  const handleDragStart = (e , index) => {
    e.dataTransfer.effectAllowed = "move";
    setDraggedItem(index)
  }


  const handleDragEnd = () => {
    
    setDraggedItem(null)
  }

  const handleDragOn = (e ) => {
    e.preventDefault();

  }
  

  const handleDroped = (e , index) => {
    e.preventDefault()

    if (draggedItem === index) return ; 

    let newItems =  items.filter((item ,  idx ) => draggedItem !== idx)

    newItems.splice(index , 0 , items[draggedItem])

    setItems(newItems)
  }

  return (
    <div className="holder">
      {items.map((item, index) => (
        <div
          key={item.id} 
          style={{
            background: item.bg,
            width: "100px",
            padding: "10px",
            margin: "5px",
            textAlign: "center",
            cursor: "grab",
          }}
          draggable
          onDragStart={(e) => handleDragStart(e, index)} // Fixed event handling
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOn(e)}
          onDrop={(e) => handleDroped(e, index)}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default App;