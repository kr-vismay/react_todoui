import React from 'react';
import Data from './Data';

function Items({todoItems}){
    return(
        <>
        <div className='container'>
        {todoItems.map((list)=>(<Data todoData={list.name} todoDate={list.date}/>))}
        </div>
        </>
        );
}

export default Items;
