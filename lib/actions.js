export function onSuccess (dispatch, type, success) {
  dispatch({ type, payload: success })
  return success
}

export function onError (dispatch, type, error) {
  dispatch({ type, payload: error })
  return error
}
