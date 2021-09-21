const URL_SERVICE = 'https://www.thecocktaildb.com/api/json/v1/1/'

export const getRandom = () => fetch(`${URL_SERVICE}/random.php`)
export const getByName = (name: string) =>
  fetch(`${URL_SERVICE}/search.php?s=${name}`)
export const getById = (id: string) =>
  fetch(`${URL_SERVICE}/lookup.php?i=${id}`)
