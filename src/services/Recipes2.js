import { API } from 'aws-amplify'

const getAll = async () => {
  const apiName = 'recipes'
  const path = '/'
  let myInit = { // OPTIONAL
    body: {}, // replace this with attributes you need
  }
  const data = await API.get(apiName, path, myInit)
  return data
}

const getRecipe = async (id) => {
  const apiName = 'recipes'
  const path = `/${id}`
  let myInit = { // OPTIONAL
    body: {}, // replace this with attributes you need
  }
  return await API.get(apiName, path, myInit)
}

const create = async (newObject) => {
  const apiName = 'recipes'
  const path = '/'
  let myInit = { // OPTIONAL
    body: {
      Item: {
        newObject
      }
    }, // replace this with attributes you need
  }
  return await API.post(apiName, path, myInit)
}

export default { getAll, getRecipe, create }