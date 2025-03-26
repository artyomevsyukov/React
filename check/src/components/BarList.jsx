import { useRecipe } from "../context/RecipeContext"

const BarList = () => {
  const { recipes } = useRecipe()
  return <div>{recipes[0].desc}</div>
}
export default BarList
