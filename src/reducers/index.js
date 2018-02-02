const INITIAL_STATE =  {
  categories: [] 
}

export const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SAVE_CATEGORIES':
      return { categories: action.categories }
    default:
      return state
  }
}