const socketState = {
  status: null,
  notis: {},
}

export default (state = socketState, action) => {
  const { type, ...rest } = action

  if (type.startsWith('socket/')) {
    if (type === 'socket/received') {
      const { data } = rest
      const { key } = data // `${data.key}-${data.timestamp}`
      // const exists = state.notis.find(noti => noti.key !== key)

      // if (!exists) {
      // data.key = key
      state.notis[key] = data
      // }

      return Object.assign({}, state)
    }

    return Object.assign({}, state, rest)
  }

  return state
}
