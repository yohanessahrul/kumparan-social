export const getUserData = (id, identifier, data) => {
  let result = ''
  data.forEach((item) => {
    if (id === item.id) {
      result = item[identifier]
    }
  })

  return result
}