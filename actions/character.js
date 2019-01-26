import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_NOTHING
} from './types'

// Utils
import to from 'await-to-js'
import Fetch from '../lib/fetch'
import { onError, onSuccess } from '../lib/actions'

export function character() {
  return async dispatch => {
    const [err, success] = await to(Fetch.get('character/'))

    if (err) onError(dispatch, GET_CHARACTERS_NOTHING, success)

    return onSuccess(dispatch, GET_CHARACTERS_SUCCESS, success)
  }
}