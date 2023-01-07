import { SEND_DATA, } from '../actionTypes'
export const sendTextfieldData = (data) => ({
  type: SEND_DATA,
  payload: data,
})