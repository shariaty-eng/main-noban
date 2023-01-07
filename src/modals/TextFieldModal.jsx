import { forwardRef, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AppModal from "./AppModals"
import { sendTextfieldData } from "../redux"


const TextFieldModal = forwardRef((props, ref) => {
  const initState = {
    textField: "",
  }
  const [state, setState] = useState(initState)
  const dispatch = useDispatch();

  const handlChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  useEffect(() => {
    dispatch(sendTextfieldData(state.textField));
  }, [state.textField])


  const appRedux = useSelector(state => state.rootReducer)

  return (
    <AppModal
      title={"Text Field Modal"}
      show={props.show}
      onChange={() => props?.onChange()}
      class="col-8 col-md-6 p-0"
    >
      <div className="d-flex flex-column justify-content-center m-4 text-center">

        <input
          type='text'
          name="textField"
          value={state.textField}
          className="border rounded bg-light mb-3"
          onChange={handlChange}
          ref={ref}
        />
        <span className="border rounded bg-light mb-3">
          FIELD DATA :
          <strong className="text-success">
            {appRedux.textFieldData ?? ''}
          </strong>
        </span>

      </div>
    </AppModal>

  )
})

export default TextFieldModal