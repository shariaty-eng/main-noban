import { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'
import "../assets/style/verification.css"
import DigitInput from "../component/DigitInput";
import useKeyPress from "../hooks/useKeyPress"  
import TextFieldModal from "../modals/TextFieldModal";

const Verification = () => {
    const initState = {
        validateCode: {},
        validatePhone: 'correct phone number',
        clearInputFlag:false,
        openDialogModal:false,
    }

    const [state, setState] = useState(initState)

    const validateCode = useRef();
    const dialogModal = useRef();

    useEffect(() => {
        validateCode.current.focus();
    }, [])

    const onKeyPress = (event) => {
        if(event.keyCode == 113){
            setState((prevState)=>({
                ...prevState,
                openDialogModal:true,
            }))
        }else if (event.keyCode == 114){
            dialogModal.current.focus();
        }
      };
    useKeyPress(['ctrlKey','shiftKey'], onKeyPress)

    const closeModal=()=>{
        setState((prevState)=>({
            ...prevState,
            openDialogModal:false,
        }))
    }

    const clearInput = () => {
        setState((prevState) => ({
            ...prevState,
           clearInputFlag:!state.clearInputFlag,
        }))
    }


    return (

        <div className="verification-segment">
            <div className="description">
                Enter your 4 digits verification code
            </div>
            <div className="InputDigitNumber-container mt-4">
                <DigitInput
                    ref={validateCode}
                    value={state.validateCode}
                    clearInputFlag={state.clearInputFlag}
                    clearInputFunc={clearInput}
                    onChange={(data) => {
                        setState((prevState) => ({
                            ...prevState,
                            validateCode: {
                                ...prevState.data,
                                firstField: data.firstField,
                                secondField: data.secondField,
                                thirdField: data.thirdField,
                                fourthField: data.fourthField,
                            },
                        }));
                    }}
                />


            </div>

            <div className="d-flex flex-row justify-content-end align-items-center mt-4">
                <button className="btn btn-outline-primary mx-3">VERIFY CODE</button>
                <button className="btn btn-outline-danger" onClick={clearInput}><AiOutlineClose size={15} /> CLEAR</button>
            </div>
            {/* <div>
        <input
        type="text"
        name="validatePhone"
        value={state.validatePhone}
        className="input_style"
        />

      </div> */}

{state.openDialogModal && 
    <TextFieldModal
    show={state.openDialogModal}
    onChange={closeModal}
    ref={dialogModal}
    />
}

        </div>


    );

}

export default Verification