const initialState = {
  comments: [],
  isFetchComments: false,
  isErrorFetchComments: false
}

const aaaAaaa = () => { }
const bbbBbbb = () => { }
const cccCccc = () => { }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'aaaaa': return aaaAaaa(state, action)
    case 'bbbbb': return bbbBbbb(state, action)
    case 'ccccc': return cccCccc(state, action)
    default: return state
  }
}

export default reducer