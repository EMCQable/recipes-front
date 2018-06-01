import { API } from 'aws-amplify'

const apiName = 'users'

const getUser = async (id) => {
  const path = `/${id}`
  return await API.get(apiName, path)
}

const create = async () => {
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
  return await API.post(apiName, path, myInit)
}

const update = async (id, newObject) => {
  const path = `/${id}`
  let myInit = { // OPTIONAL
    body: {
      Item: {
        newObject
      }
    }, // replace this with attributes you need
  }
  return await API.post(apiName, path, myInit)
}

export default { getUser, create, update }