import { API } from 'aws-amplify'

const apiName = 'users'

const getRecipe = (id) => {
  const path = `/${id}`
  let myInit = { // OPTIONAL
    body: {}, // replace this with attributes you need
  }
  return API.get(apiName, path, myInit)
}

const create = () => {
  const day = new Date()
  const path = '/'
  let myInit = { // OPTIONAL
    body: {
      Item:
        {
          created: day,
          schedule: []
        }
    }, // replace this with attributes you need
  }
  return API.post(apiName, path, myInit)
}

const update = (id, newObject) => {
  const path = `/${id}`
  let myInit = { // OPTIONAL
    body: {
      Item: {
        newObject
      }
    }, // replace this with attributes you need
  }
  return API.post(apiName, path, myInit)
}

export default { getRecipe, create, update }