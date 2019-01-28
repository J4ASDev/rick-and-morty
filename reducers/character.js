import {
  GET_CHARACTERS_SUCCESS,
  GET_CHARACTERS_NOTHING,
  GET_CHARACTER_NOTHING,
  GET_CHARACTER_SUCCESS
} from '../actions/types'

import initialState from '../initialState'

import { fromJS, Map as map } from 'immutable'

function character(state = initialState.get('character'), action) {
  switch(action.type) {
    case GET_CHARACTERS_SUCCESS: {
      return fromJS({
        general: [...action.payload.results ],
        specific: state.get('specific')
      })
    }

    case GET_CHARACTER_SUCCESS: {
      const { id, name, status, species, type, gender, image, episode, url, created } = action.payload

      return map({
        general: state.get('general'),
        specific: {
          id,
          name,
          status,
          species,
          type,
          gender,
          origin: {
            origin_name: action.payload.origin.name,
            origin_url: action.payload.origin.url
          },
          location: {
            location_name: action.payload.location.name,
            location_url: action.payload.location.url
          },
          image,
          episode,
          url,
          created
        }
      })
    }
    case GET_CHARACTERS_NOTHING:
    case GET_CHARACTER_NOTHING:
    default:
      return state
  }
}


export default character