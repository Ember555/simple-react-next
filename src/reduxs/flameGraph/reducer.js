const profileState = {
  //
  success: false,
  loading: false,
  alert: false,
}

export default (state = profileState, action) => {
  const { type, ...rest } = action

  if (type.startsWith('flameGraph/')) {
    console.log('>>>>>>. state', rest)
    return Object.assign({}, state, rest)
  }

  return state
}
