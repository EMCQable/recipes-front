import { API } from 'aws-amplify'

const getAll = () => {
  const apiName = 'users'
  const path = '/'
  let myInit = { // OPTIONAL
    body: {}, // replace this with attributes you need
  }
  return API.get(apiName, path, myInit)
}

const getRecipe = (id) => {
  const apiName = 'users'
  const path = `/${id}`
  let myInit = { // OPTIONAL
    body: {}, // replace this with attributes you need
  }
  return API.get(apiName, path, myInit)
}

const create = (newObject) => {
  const apiName = 'users'
  const path = '/'
  let myInit = { // OPTIONAL
    body: {
      Item: {
        newObject
      }
    }, // replace this with attributes you need
  }
  return API.post(apiName, path, myInit)
}

export default { getAll, getRecipe, create }