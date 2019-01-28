// Immutable.js
import { fromJS } from 'immutable'

export default fromJS({
  character: {
    general: [],
    specific: {
      id: 0,
      name: '',
      status: '',
      species: '',
      type: '',
      gender: '',
      origin: {
        origin_name: '',
        origin_url: ''
      },
      location: {
        location_name: '',
        location_url: '',
      },
      image: '',
      episode: [],
      url: '',
      created: ''
    }
  }
})
