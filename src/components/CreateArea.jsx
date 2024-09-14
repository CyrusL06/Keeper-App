import React, { useState } from "react";
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.
//- Pass the new note back to the App.
//- Add new note to an array.
//- Take array and render seperate Note components for each item.
  function CreateArea(props) {
    //1. Create a constant that keeps track of the title and content.
    const [note, setNote] = useState({
      title:"",
      content:"",
  });
    // receives an even when tiggered
  function handleChange(){
    // targets event.target name& value
    const { name, value} = event.target
    // This codes saves the input into the state
    setNote(prevNote => {
      // return new object with previous Note
      return{
        // spread operator: spreads all the data inside the object note
        ...prevNote,
        // add the new name and value
        [name]: value
      }
    })
  }
  // pass event to stop the refresh
  function submitNote(event){
    //- Pass the new note back to the App.
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    // prevents the default refresh of form
    event.preventDefault();
  }

  return (
    <div>
      <form>
        {/* FOR THIS TITLE */}
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        {/* FOR THIS Content */}
        <textarea onChange={handleChange} value = {note.content} name="content" placeholder="Take a note..." rows="3" />
        {/* Adds the trigger */}
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
