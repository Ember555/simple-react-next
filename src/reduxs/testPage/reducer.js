const profileState = {
  filename: '',
  //
  success: false,
  loading: false,
  alert: false,
}

export default (state = profileState, action) => {
  const { type, ...rest } = action

  if (type.startsWith('testPage/')) {
    return Object.assign({}, state, rest)
  }

  return state
}
