import { forwardRef, useEffect, useRef, useState } from "react";
import "../assets/style/digit_input.css";

const DigitInput = forwardRef((props, ref) => {
    const initState={
        validateCode:{},
    }
  const [state, setState] = useState(initState);
  const secondField =useRef()
  const thirdField =useRef()
  const fourthField =useRef()
  
    useEffect(() => {
      ref.current.focus();
    }, [])

  useEffect(()=>{
    if(props.clearInputFlag){
      ref.current.value=""
      secondField.current.value=""
      thirdField.current.value=""
      fourthField.current.value=""
      props?.clearInputFunc()
    }
  },[props.clearInputFlag])

  useEffect(() => {
    if(props?.value){
    setState((prevState) => ({
        ...prevState,
        validateCode: {
            ...prevState.validateCode,
            firstField: props.value?.firstField,
            secondField: props.value?.secondField,
            thirdField: props.value?.thirdField,
            fourthField: props.value?.fourthField,
        },
    }));  
}
}, [props.value])

  useEffect(() => {
    if (
      state.validateCode?.firstField?.length === 1 &&
      state.validateCode?.secondField?.length === 1 &&
      state.validateCode?.thirdField?.length === 1 &&
      state.validateCode?.fourthField?.length === 1
      
    ){
      console.log("props.onChange", state)
        props.onChange(state);
    }
  }, [state]);

  const handleChange = (e) => {
      const { maxLength, value, name } = e.target;
      let reg = new RegExp(/^[0-9\b]+$/);
      if (!reg.test(value)) return;
    const [fieldName, fieldIndex] = name.split("-");
    let fieldIntIndex = parseInt(fieldIndex, 10);
    // Check if no of char in field == maxlength
    if (value.length == maxLength) {
      // It should not be last input field
      if (fieldIntIndex <= 4) {

        // Get the next input field using it's name
        const nextfield = document.querySelector(
          `input[name=field-${fieldIntIndex + 1}]`
        );

        // If found, focus the next field
        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }
    updateState(fieldIntIndex, value);
  };

  const updateState = (index, value) => {
    switch (index) {
      case 1:
        setState((prevState) => ({
          ...prevState,
          firstField: value,
        }));
        break;
      case 2:
        setState((prevState) => ({
          ...prevState,
          secondField: value,
        }));
        break;
      case 3:
        setState((prevState) => ({
          ...prevState,
          thirdField: value,
        }));
        break;
      case 4:
        setState((prevState) => ({
          ...prevState,
          fourthField: value,
        }));
        break;
    }
  };


  return (
          <div className="digit-input">
      <input
            ref={ref}
            name="field-1"
            type="text"
            value={state.validateCode?.firstField }
            id="digit"
            maxLength="1"
            onChange={handleChange}
          />
        
        <input
          name="field-2"
          type="text"
          ref={secondField}
          value={state.validateCode?.secondField }
          id="digit"
          maxLength="1"
          onChange={handleChange}
        />

        <input
          name="field-3"
          type="text"
          ref={thirdField}
          value={state.validateCode?.thirdField }
          id="digit"
          maxLength="1"
          onChange={handleChange}
        />

        <input
          name="field-4"
          type="text"
          ref={fourthField}
          value={state.validateCode?.fourthField }
          id="digit"
          maxLength="1"
          onChange={handleChange}
        />  
      </div>
  );
});

export default DigitInput;
