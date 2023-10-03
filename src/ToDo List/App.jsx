import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {


    const [inputList, setInputList] = useState("");
    const [items, setItems] = useState([]);
        // current data, upadate data,   initial data 

     const itemEvent  = (event)  => {

        setInputList(event.target.value);
     };

     const listOfItems = () => {

        setItems( (oldItems) =>  {

            return[...oldItems, inputList];
        });

        setInputList('');
     };

     const deleteItems = (id) => {

        console.log('deleted');
        setItems((oldItems) => {

            return oldItems.filter((arryElem, index) => {

                return index !== id;
            });
        })
    };

    return(

        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input 
                        type="text"
                        placeholder="Add a Items"
                        value={inputList}
                        onChange={itemEvent}
                      />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                       { 
                            items.map((itemValue, index) => {
                                
                             return( 

                                <ToDoList 
                                key = {index}
                                text = {itemValue}
                                id = {index}
                                onSelect = {deleteItems}    
                                />
                             );
                                
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );

}

export default App;