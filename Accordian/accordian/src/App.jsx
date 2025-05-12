import { useState } from 'react'
import './App.css'

function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const [openItems, setOpenItems] = useState([]);
  const [allowMultiple, setAllowMultiple] = useState(false);

  const items = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  const toggleAccordian = (index) => {

    if (allowMultiple){
      setOpenItems((prev) => {
      return  prev.includes(index) ? prev.filter((i) => i !== index) : [...prev , index]
      })
    }
    else{
      setOpenIndex(openIndex === index ? null : index)
    }
  }


const Accordian = ({item , onClick , openIndex}) => {
  return <div className='main-container' onClick={onClick}>

    <div className='header-area' cursor="pointer">
      <div className='tile'>{item.title}</div>
      <div>{openIndex ? "_" : "+"}</div>
       </div>
   {openIndex &&  <div className='info'> {item.content}</div> }  

  </div>
} 



  return (
    <>
    
      <h1>Accordian</h1>
     
      <label><input type='checkbox' onChange={() => {
        setAllowMultiple(!allowMultiple)
      }} /> select for multiple allows</label>

      {
        items.map((item , index) => {

          return <Accordian key={index} item={item} openIndex={ allowMultiple ? openItems.includes(index) : openIndex === index} onClick={ () => toggleAccordian(index)}/>
        })
      }
    </>
  )
}

export default App
