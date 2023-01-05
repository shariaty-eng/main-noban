import { useEffect, useRef, useState } from "react";
import PinInput from "react-pin-input";
import { AiOutlineClose } from 'react-icons/ai'
import "../assets/style/verification.css"

const Verification = () => {

    const initState = {
        validateCode: null,
        validatePhone: 'correct phone number',
    }


    const [state, setState] = useState(initState)

    const validateCode = useRef();
    useEffect(() => {
        validateCode.current.focus();
    }, [])

    const handlChange = (value) => {

        let reg = new RegExp(/^[0-9\b]+$/);
        if (!reg.test(value)) return;
        setState((prevState) => ({
            ...prevState,
            validateCode: value,
        }))
    }

    const clearInput = () => {
        setState((prevState) => ({
            ...prevState,
            validateCode: null,
        }))
    }


    return (

        <div className="verification-segment">
            <div className="description">
                Enter your 4 digits verification code
            </div>
            <div className="InputDigitNumber-container mt-4">
                <PinInput
                    length={4}
                    type="numeric"
                    inputMode="number"
                    ref={validateCode}
                    // value={state.validateCode}
                    autoSelect={true}
                    name="validateCode"
                    onChange={handlChange}
                    inputStyle={{
                        background: '#f7f7f7',
                        boxShadow: "none",
                        border: "none",
                        borderRadius: "4px",
                        borderBottom: "1px solid #979797",
                        boxSizing: "border-box",
                        margin: "5px",
                        height: "63px",
                        width: "45px",
                        textAlign: "center",
                        fontSize: "28px",
                        color: "#4d4d4d",
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

        </div>


    );

}

export default Verification