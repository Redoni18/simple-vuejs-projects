import axios from 'axios'

export default () => {
  return axios.create({
    // eslint-disable-next-line indent
    baseURL: `http://localhost:4000`
  })
}
