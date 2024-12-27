import { v4 as uuidv4 } from "uuid"

const createBookWithId = (book, source) => {
  // Проверка на title and author
  return {
    ...book,
    source,
    isFavorite: false,
    id: uuidv4(),
  }
}

export default createBookWithId
