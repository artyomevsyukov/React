// import { useRecipe } from "../hooks/useRecipe"
import { useRecipe } from "../context/RecipeContext"

const RecipesList = () => {
  const { recipes } = useRecipe()
  const recipesContext = useRecipe()
  console.log("recipeContext: ", recipes)
  console.log("recipeContext: ", recipesContext)
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "30px" }}>
          <div>{recipe.id}</div>
          <div>{recipe.name}</div>
        </div>
      ))}
    </div>
    // <div>Test</div>
  )
}
export default RecipesList
