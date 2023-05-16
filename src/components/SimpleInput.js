import { useRef, useState } from "react";

const SimpleInput = (props) => {
  //const inputRef = useRef()
  const [enteredInput, setInput] = useState('')
  const [touched,setTouch] = useState(false)

  const enteredValid = enteredInput.trim() !== ""
  const formSubmitted = !enteredValid && touched
  const nameInputChangeHandler = event => {
    setInput(event.target.value)
  }

  const formHandler = (e) => {
    e.preventDefault();
    setTouch(true)
    if(!enteredValid){
      return
    }
    console.log(enteredInput);
    setInput("")
    setTouch(false)
  }

  const nameInputBlurHandler = (e) => {
    setTouch(true)
    if(!enteredValid){
      return
    }
  }
  
  const formClasses = formSubmitted ? "form-control invalid" : "form-control "
  return (
    <form onSubmit={formHandler}>
      <div className={formClasses}>
        <label htmlFor='name'>Your Name</label>
        <input value={enteredInput} type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler}/>
        {formSubmitted && <p className="error-text ">Name must be type!</p>}
      </div>
      <div className="form-actions">  
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
