export const SUBMIT_FLAME_GRAPH = 'flameGraph/submit'
export const submitflameGraph = data => ({
  type: SUBMIT_FLAME_GRAPH,
  loading: true,
  alert: false,
  success: false,
  ...data,
})

export const SUBMIT_CANCEL = 'flameGraph/cancel'
export const submitCancel = () => ({
  type: SUBMIT_CANCEL,
  loading: false,
  success: false,
})

export const SUBMITED_FLAME_GRAPH_ERROR = 'flameGraph/submited/error'
export const submitedflameGraphError = data => ({
  type: SUBMITED_FLAME_GRAPH_ERROR,
  loading: false,
  alert: true,
  success: false,
  ...data,
})

export const SUBMITED_FLAME_GRAPH_SUCCESS = 'flameGraph/submited/success'
export const submitedflameGraphSuccess = data => ({
  type: SUBMITED_FLAME_GRAPH_SUCCESS,
  loading: false,
  alert: false,
  success: true,
  ...data,
})

export const ERROR_HANDLER = 'flameGraph/error/close'
export const errorHandler = () => ({
  type: ERROR_HANDLER,
  alert: false,
})
