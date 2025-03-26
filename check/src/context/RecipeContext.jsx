import { createContext, useState, useContext } from "react"
import { initialRecipes } from "../data/recipes"
import { v4 as uuidv4 } from "uuid"

// eslint-disable-next-line react-refresh/only-export-components
export const RecipeContext = createContext()
// eslint-disable-next-line react-refresh/only-export-components
export const useRecipe = () => useContext(RecipeContext)
// export function useRecipe() {
//   return useContext(RecipeContext)
// }

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState(initialRecipes)

  const addRecipe = (name, ingredients, desc) => {
    if (!name.trim() || ingredients.length === 0) return
    const ingredientsWithId = ingredients.map((ingredient) => ({
      ...ingredient,
      id: uuidv4(),
    }))

    setRecipes([
      ...recipes,
      { id: uuidv4(), name, ingredients: ingredientsWithId, desc },
    ])
  }

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider
      value={{ recipes, addRecipe, deleteRecipe, setRecipes }}>
      {children}
    </RecipeContext.Provider>
  )
}
