import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_NOTHING
} from '../actions/types'

import initialState from '../initialState'

import {fromJS } from 'immutable'

function character(state = initialState.get('character'), action) {
  switch(action.type) {
    case GET_CHARACTERS_SUCCESS: {


    console.log(action.payload.results)
    console.log(action.payload.info)

    console.log('Estamos en el reducer')

    return fromJS({
        general: {
          results: [ ...action.payload.results ]
        },
      })
    }
    case GET_CHARACTERS_NOTHING:
    default:
      return state
  }
}


export default character