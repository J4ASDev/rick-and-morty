import 'isomorphic-fetch'
import config from '../config'

const Fetch = {
  get: async function get (url, token) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    
    if (token) {
      options.headers['Authorization'] = `Token ${token}`
    }

    const res = await fetch(`${config.api.host}/api/${url}`, options)
    return res.json()
  },
  post: async function post (url, { token, data }) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }

    if (token) {
      options.headers['Authorization'] = `Token ${token}`
    }

    const res = await fetch(`${config.api.host}/api/${url}`, options)
    return res.json()
  }
}

export default Fetch
