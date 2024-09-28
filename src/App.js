import { useState } from "react";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import styles from "./styles/App.module.css";

function App() {

  const [calVal, setCalVal] = useState("");

  const onButtonClick= (buttontext)=> {
    if(buttontext === 'C'){
      setCalVal("");

    }else if(buttontext === '='){
      const result = eval(calVal);
      setCalVal(result);

    } else{
      const newDisplayValue = calVal + buttontext;
       setCalVal(newDisplayValue);    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
