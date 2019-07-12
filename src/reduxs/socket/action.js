export const CONNECT = 'socket/connect'
export const connect = () => ({
  type: CONNECT,
  status: 'connecting',
})

export const CONNECTED = 'socket/connected'
export const connected = () => ({
  type: CONNECTED,
  status: 'connected',
})

export const ERROR = 'socket/error'
export const error = () => ({
  type: ERROR,
  status: 'error',
})

export const RECEIVED = 'socket/received'
export const received = data => ({
  type: RECEIVED,
  data,
})

export const OPENED = 'socket/opened'
export const opened = () => ({
  type: OPENED,
  status: 'opened',
})
