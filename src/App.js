
import React from 'react';
import Heading from './component/Heading';
import Data from './component/Data';
import Option from './component/Option';
import Items from './component/Items'
function App() {
  const todoItem=[
    {name:"data1",date:"24/01/2024"},{name:"data2",date:"24/01,2024"},{name:"data3",date:"24/01/2024"}
  ]
  return (
    <>
    <center>
    <Heading/>
    <Option />
    <Items todoItems={todoItem}/>
    </center>
   
    </>
  );
}

export default App;
