import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_NOTHING,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_NOTHING
} from './types'

// Utils
import to from 'await-to-js'
import Fetch from '../lib/fetch'
import { onError, onSuccess } from '../lib/actions'

export function characters() {
  return async dispatch => {
    const [err, success] = await to(Fetch.get('character/'))

    if (err) onError(dispatch, GET_CHARACTERS_NOTHING, success)

    return onSuccess(dispatch, GET_CHARACTERS_SUCCESS, success)
  }
}

export function character(characterId) {
  return async dispatch => {
    const [err, success] = await to(Fetch.get(`character/${characterId}`))
    
    
    if(err) onError(dispatch, GET_CHARACTER_NOTHING, success)
    
    return onSuccess(dispatch, GET_CHARACTER_SUCCESS, success)
  }
}