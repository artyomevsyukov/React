import { useRecipe } from "../context/RecipeContext"

const BarList = () => {
  const { recipes } = useRecipe()
  return <div>Bar-Test</div>
}
export default BarList
