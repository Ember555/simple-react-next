export const SUBMIT_TEST_PAGE = 'testPage/submit'
export const submittestPage = data => ({
  type: SUBMIT_TEST_PAGE,
  loading: true,
  alert: false,
  success: false,
  ...data,
})

export const SUBMIT_CANCEL = 'testPage/cancel'
export const submitCancel = () => ({
  type: SUBMIT_CANCEL,
  loading: false,
  success: false,
})

export const SUBMITED_TEST_PAGE_ERROR = 'testPage/submited/error'
export const submitedtestPageError = data => ({
  type: SUBMITED_TEST_PAGE_ERROR,
  loading: false,
  alert: true,
  success: false,
  ...data,
})

export const SUBMITED_TEST_PAGE_SUCCESS = 'testPage/submited/success'
export const submitedtestPageSuccess = data => ({
  type: SUBMITED_TEST_PAGE_SUCCESS,
  loading: false,
  alert: false,
  success: true,
  ...data,
})

export const ERROR_HANDLER = 'testPage/error/close'
export const errorHandler = () => ({
  type: ERROR_HANDLER,
  alert: false,
})
