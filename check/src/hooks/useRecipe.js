import { useContext } from "react"

import { RecipeContext } from "../context/RecipeContext"

export const useRecipe = () => useContext(RecipeContext)
