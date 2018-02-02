const INITIAL_STATE =  {
  data: {} 
}

export const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_DATA':
      return { data: action.data }
    default:
      return state
  }
}