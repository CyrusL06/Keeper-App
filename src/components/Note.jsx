//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
import React from "react";

function Note(props) {

  // Is where we trigger that pass from props that deletes from array
  function handleClick(){
    // triggers the function onDelete in App component
    // so we pass that props.id and sent it back when triger onDelete
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>DELETE</button>
    </div>
  );
}

export default Note;
