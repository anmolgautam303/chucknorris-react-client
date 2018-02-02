export const fetchCategories = url => {
  return {
    type: 'FETCH_CATEGORIES',
    url: url
  }
}

export const saveCategories = categories => {
  return {
    type: 'SAVE_CATEGORIES',
    categories: categories
  }
}