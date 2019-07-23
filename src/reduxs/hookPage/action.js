export const FETCH_CAT_PENDING = "hookPage/pending"
export const fetch_cat_pending = () => ({
  type: FETCH_CAT_PENDING,
  isFetching: true,
})

export const FETCH_CAT_SUCCESS = "hookPage/success"
export const fetch_cat_success = data => ({
  type: FETCH_CAT_SUCCESS,
  isFetching: false,
  cat: data,
})
