import { forwardRef, useState } from "react"
import AppModal from "./AppModals"

const TextFieldModal=forwardRef((props, ref)=>{
  const initState={
    textField:"",
  }
  const [state, setState]=useState(initState)
  const handlChange=(e)=>{
        let name =e.target.name
        let value =e.target.value
        setState((prevState)=>({
          ...prevState, 
            [name]:value,
        }))
  }

    return (
        <AppModal
          title={"Text Field Modal"}
          show={props.show}
          onChange={()=>props?.onChange()}
          class="col-8 col-md-6 p-0"
        >
          <div className="m-4 text-center">

          <input
          type='text'
          onChange={handlChange}
          ref={ref}
          />
          </div>
            </AppModal>

    )
})

export default TextFieldModal