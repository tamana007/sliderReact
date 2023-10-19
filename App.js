import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
import people from "./data";
function App() {
  // const [peoples,setPeoples]=useState(people[1]);
  const [peoples, setPeoples] = useState(people);
  const [value, setValue] = useState(0);

  // useEffect(()=>{
  //   setPeoples(people[0])
  //   console.log(peoples);
  // },[peoples])

  // function changeVal(){
  //   people.map((item,index)=>{
  //     return setValue(index)
  //   })
  // }

  const { id, name,image,title,quote } = peoples[value];

  return (
    <section className="section">
      
      <div className="container">
      
       <div className="title">
       <h2 className="review">Reviews Project</h2>
        <img src={image} className="person-img"></img>
        <h4 >{name}</h4>
        <p>{title}</p>
        <div className="btn-container">
        </div>
          <button
            onClick={() => {
              const newValue = value+1;
              if(newValue > peoples.length-1 ){
                setValue(0)
              }else{
                setValue(newValue)
              }
            }}
          >
            Next
          </button>
          <button
            onClick={() => {
            const newvalue=value-1;
            if(newvalue<0){
              setValue(peoples.length-1)
            }
            else{
              setValue(newvalue)
            }
            }}
          >
            {" "}
            previous
          </button>
        </div>
        <div>
          <p>{quote}</p>
        </div>

        {/* <p>{people.id}</p> */}
      </div>
    </section>
  );
}

export default App;
