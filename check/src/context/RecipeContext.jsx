import { createContext, useState, useContext } from "react"
import { initialRecipes } from "../data/recipes"
import { v4 as uuidv4 } from "uuid"

// eslint-disable-next-line react-refresh/only-export-components
export const RecipeContext = createContext()

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState(initialRecipes)

  const addRecipe = (name, ingredients, desc) => {
    if (!name.trim() || ingredients.length === 0) return
    setRecipes([...recipes, { id: uuidv4(), name, ingredients, desc }])
  }

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, deleteRecipe }}>
      {children}
    </RecipeContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useRecipe = () => useContext(RecipeContext)

// export function useRecipe() {
//   return useContext(RecipeContext)
// }
