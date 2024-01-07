import { useState } from "react";
import styles from "./App.module.css";
import AppName from "./components/AppName";
import Buttons from "./components/Buttons";
import InputCalc from "./components/InputCalc";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButton = (buttonText) => {
    // console.log(buttonText);
    if(buttonText==='C'){
      setCalVal("");
    }
    else if(buttonText==='='){
      let result = eval(calVal);
      setCalVal(result)
    }
    else{
      setCalVal(calVal+buttonText)
    }
  };

  return (
    <div className={styles.container}>
      <AppName className={styles.h3}></AppName>
      <InputCalc className={styles.display} display={calVal} />
      <Buttons
        buttonGrp={styles.buttonsGroup}
        button={styles.button}
        handleButton={handleButton}
      />
    </div>
  );
}

export default App;
