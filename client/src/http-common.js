import axios from 'axios'

export default axios.create({
  // correspond à la porte du serveur qui est 8080
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-type': 'application/json'
  }
})
