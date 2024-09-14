import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  // Creates notes Array
  const [notesArray, setNotesArray] = useState ([]);


  function addNote(newNote){
    // console.log(note);
    // Holds the previousNotes of the notesArray
    setNotesArray(prevNotes => {
      // gets ahold of previous note + newNote at the end
      // FORGOT RETURN!!!!
     return [...prevNotes,newNote];
    })
  }
  // gets the ID filters it  
  // we gonna need the id to be deleted
  function deleteNote(id){
    setNotesArray((prevNotes) => {
      return prevNotes.filter((noteItems,index) => {
        return index !== id;
      });
    })
  }
  return (
    <div>
      <Header />
      <CreateArea
      // Receives the note from CreateArea component
      onAdd={addNote}
      />
      {/* Use notes array to map for each item */}
      {/* for each noteItem in array and get hold of  noteItem*/}
      {notesArray.map((noteItems, index) => {
         // return new Note component
      return (
        <Note 
        // Properties pass through to Note
        key={index}
        id={index}
        onDelete={deleteNote}
        title={noteItems.title}
        content={noteItems.content}
        />
        );
      })}
      {/* <Note key={1} title="Note title" content="Note content" /> */}
      <Footer />
    </div>
  );
}

export default App;
