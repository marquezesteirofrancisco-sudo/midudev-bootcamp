import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const baseUrl2 = 'https://jsonplaceholder.typicode.com/posts'



const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const deleteItem = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}
 

export default { 
  getAll: getAll, 
  create: create, 
  update: update,
  delete: deleteItem,
};