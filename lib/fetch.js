import 'isomorphic-fetch'
import config from '../config'

const Fetch = {
  get: async function get (url) {
    const res = await fetch(`${config.api.host}/api/${url}`)

    return res.json()
  }
}

export default Fetch
