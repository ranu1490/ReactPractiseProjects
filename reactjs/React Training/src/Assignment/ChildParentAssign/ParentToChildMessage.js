import React, { createContext, useContext, useState } from "react";

const MessageContext = createContext({});

function ParentToChildMessage() {
  const [parentMessage, setParentMessage] = useState("No Message from Parent");
  const [childMessage, setChildMessage] = useState("No Message from Child");
  const [tempParentMessage, setTempParentMessage] = useState("");
  const [tempChildMessage, setTempChildMessage] = useState("");

  const handleSendMessageToChild = () => {
    // Send the parentMessage to the ChildComponent
    setChildMessage(tempParentMessage);
   // console.log("tempParentMessage",tempParentMessage);
  };

  return (
    
      <div>
        <h2>Parent Component</h2>
        <input
          type="text"
          onChange={(e) => setTempParentMessage(e.target.value)}
          placeholder="Enter message for child"
        />
        <button onClick={handleSendMessageToChild}>Send to Child</button>
        <p>Child Says: {parentMessage}</p>
        <ChildComponent 
        parentMessage={parentMessage}
        setParentMessage={setParentMessage}
        childMessage={childMessage}
        tempParentMessage={tempParentMessage}
        setTempParentMessage={setTempParentMessage}
        tempChildMessage={tempChildMessage}
        setTempChildMessage={setTempChildMessage}
        />
      </div>
  );
}

function ChildComponent(props) {
  const {
    parentMessage,
    //setChildMessage,
    childMessage,
    setParentMessage,
    tempChildMessage,
    setTempChildMessage,
  } = props;

  const handleSendMessageToParent = () => {
    // Send the childMessage to the ParentComponent
    setParentMessage(tempChildMessage);
    //console.log("parentMessage",parentMessage);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        onChange={(e) => setTempChildMessage(e.target.value)}
        placeholder="Enter message for parent"
      />
      <button onClick={handleSendMessageToParent}>Send to Parent</button>
      <p>Parent Says: {childMessage}</p>
    </div>
  );
}

export default ParentToChildMessage;
