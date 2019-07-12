import { alertError } from './alert'

export const handle = (data, title = 'Error') => {
  const { statusCode, message } = data

  let _message
  switch (statusCode) {
    case 500:
      _message =
        'There are some problem occured on the server, please try again.'
      break

    default:
      _message = message
  }

  alertError(_message, title)
}
