import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Peter from "./components/Peter";
import Timer from "./components/Timer";

function App() {
const [questionNumber, setQuestionNumber] = useState(1);
const [stop, setStop] = useState(false);
const [earned, setEarned] = useState("$ 0");


 const data = [
   {
     id: 1,
     question: "Rolex is a company that specializes in what type of product?",
     answers: [
       {
         text:"Phones",
         correct: false,
       },
       {
         text: "Watches",
         correct: true,
       },
       {
         text: "Cosmatics",
         correct: false,
       },
       {
         text: "Food",
         correct: false,
       },
     ],
   },

   {
     id: 2,
     question: "When was the site 'Facebook' launched?",
     answers: [
       {
         text: "2004",
         correct: true,
       },
       {
         text: "2005",
         correct: false,
       },
       {
         text: "2016",
         correct: false,
       },
       {
         text: "2001",
         correct: false,
       },
     ],
   },

   {
     id: 3,
     question: "Who played the character of harry potter in the movie?",
     answers: [
       {
         text: "Micheal King",
         correct: false,
       },
       {
         text: "Loenardo Di Caprio",
         correct: false,
       },
       {
         text: "Denzel Wishington",
         correct: false,
       },
       {
         text: "Dainel Red Cliff",
         correct: true,

       },

     ],
   },
 ];
  const moneyPyrimad = useMemo(()=>
    [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 500"},
    {id:5, amount:"$ 1000"},
    {id:6, amount:"$ 2000"},
    {id:7, amount:"$ 4000"},
    {id:8, amount:"$ 8000"},
    {id:9, amount:"$ 16000"},
    {id:10, amount:"$ 32000"},
    {id:11, amount:"$ 64000"},
    {id:12, amount:"$ 125000"},
    {id:13, amount:"$ 250000"},
    {id:14, amount:"$ 500000"},
    {id:15, amount:"$ 1000000"},
  ].reverse(),
   []
   );

  useEffect(()=>{
    questionNumber >1 && setEarned(moneyPyrimad.find(m=> m.id === questionNumber-1).amount);
  }, [moneyPyrimad, questionNumber]);
  return (
    <div className="app">
      <div className="main">
        {stop ? (
         <h1 className="endText">You earned: {earned}</h1> 
        ) :(
         <>
        <div className="top">
         <div className="timer">
           <Timer setStop={setStop} questionNumber={questionNumber}/>
         </div>
        </div>
        <div className="bottom"> 
        <Peter
        data={data} 
        setStop={setStop}
        questionNumber={questionNumber} 
        setQuestionNumber={setQuestionNumber}
        /> 
        </div>
           </>          
        )}

      </div>
      <div className="pyrimad">
      <ul className="moneyList">
        {moneyPyrimad.map((m) =>(
        <li className={questionNumber == m.id ?"moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
           <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
      </ul> 
      </div>
    </div>
  );
}

export default App;
