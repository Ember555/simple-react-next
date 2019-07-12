import socket from 'socket.io-client'
import { wsUrl } from '../config/endpoint'

import { received } from '../reduxs/socket/action'
// import {
//   profileEvent,
//   credentialEvent,
//   channelEvent,
//   settingsEvent,
//   tlsEvent,
//   blockSyncingEvent,
//   registrationEvent,
// } from '../config/event'

let _socket

export const client = () => {
  if (!_socket) {
    const url = wsUrl()

    _socket = socket.connect(url)
  }

  return _socket
}

export const onReceived = dispatch => {
  const socket = client()
  const events = [].concat(
    Object.values(profileEvent),
    Object.values(credentialEvent),
    Object.values(channelEvent),
    Object.values(settingsEvent),
    Object.values(tlsEvent),
    Object.values(blockSyncingEvent),
    Object.values(registrationEvent),
  )

  events.forEach(event =>
    socket.on(event, data => {
      dispatch(received({ key: event, ...data }))
    }),
  )
}
