import { v4 as uuidv4 } from "uuid"

const createHero = (hero) => {
  return {
    ...hero,
    id: uuidv4(),
  }
}

export default createHero
