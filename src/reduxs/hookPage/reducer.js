const profileState = {
  isFetching: true,
  cat: {}
}

export default (state = profileState, action) => {
  const { type, ...rest } = action

  if (type.startsWith("hookPage/")) {
    return Object.assign({}, state, rest)
  }

  return state
}
