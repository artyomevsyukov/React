import { v4 as uuidv4 } from "uuid"

const createBookWithId = (book) => {
  // Проверка на title and author
  return {
    ...book,
    isFavorite: false,
    id: uuidv4(),
  }
}

export default createBookWithId
