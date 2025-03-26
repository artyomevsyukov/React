import { useRecipe } from "../context/RecipeContext"
import { initialRecipes } from "../data/recipes"
import { v4 as uuidv4 } from "uuid"
import AddRecipe from "./AddRecipe"

const RecipesList = () => {
  const { recipes, setRecipes, deleteRecipe } = useRecipe()
  return (
    <div>
      <AddRecipe />
      <div style={{ marginBottom: "30px" }}>
        <button onClick={() => setRecipes("")}>Clear</button>
        <button onClick={() => setRecipes(initialRecipes)}>Reset</button>
      </div>

      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "30px" }}>
            <div>{recipe.name}</div>
            <div>{recipe.desc}</div>
            {/* Вынести в отдельный компонент */}
            <ul>
              {recipe.ingredients.map((ingredient) => (
                // <li key={`${recipe.id}-${ingredient}-${i}`}>
                //   {ingredient.name} - {ingredient.amount}
                // </li>
                <li key={uuidv4()}>
                  {ingredient.name} - {ingredient.amount}
                </li>
              ))}
            </ul>

            <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
          </div>
        ))
      ) : (
        <div>Нет данных</div>
      )}
    </div>
  )
}
export default RecipesList
