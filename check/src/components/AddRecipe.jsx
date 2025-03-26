import { useRecipe } from "../context/RecipeContext"

const AddRecipe = () => {
  const { setRecipes, addRecipe } = useRecipe()

  return (
    <div style={{ marginBottom: "30px" }}>
      <button
        onClick={() =>
          addRecipe(
            "NAME",
            [
              { name: "tomatoes", amount: "1" },
              { name: "cucumber", amount: "2" },
              { name: "orange", amount: "3" },
            ],
            "ОПИСАНИЕ"
          )
        }>
        Add
      </button>
    </div>
  )
}
export default AddRecipe
