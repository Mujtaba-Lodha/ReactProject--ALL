import React, { useState } from "react";
import Header from "./Header";
import './kepp.css';
import Footer from "./Footer";
import CreatNote from "./CreateNote";
import Note from "./Note";

const Leep = () => {

    const [addItem, setAddItem] = useState([]);

    const addNote = (note) => {

        // alert('i am clicked');
        setAddItem((prevData) => {
            return[...prevData, note];
        });

    };

    const onDelete = (id) => {

        setAddItem((oldData) =>

          oldData.filter((currData, index) => {

            return index !== id;
        })

        )
    }
  

    return(
        <>
           <Header />
           <CreatNote passNote = {addNote} />
         
            { addItem.map((val, index) => {
                return(
                    <Note 
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                );

              })
            }

           <Footer />
        </>
    )
};
export default Leep;