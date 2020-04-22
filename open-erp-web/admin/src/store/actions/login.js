import { LOGIN_SUBMIT } from '../constant/login'

export const onFinish = (value) => {
  return {
    type: LOGIN_SUBMIT,
    value
  }
}
