import { notification } from 'antd'

export const alertSuccess = (
  message = 'Unknow Error',
  title = 'Notification',
) => {
  notification.success({
    message: title,
    description: message,
    duration: 0,
  })
}

export const alertInfo = (
  message = 'Unknow Error',
  title = 'Notification',
) => {
  notification.info({
    message: title,
    description: message,
    duration: 0,
  })
}

export const alertError = (
  message = 'Unknow Error',
  title = 'Notification',
) => {
  notification.error({
    message: title,
    description: message,
    duration: 0,
  })
}
