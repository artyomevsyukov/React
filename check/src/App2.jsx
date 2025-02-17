import "./App.css"
import { recipes } from "./data/recipes"

// function App2() {
//   return (
//     <>
//       <h1>Text123</h1>
//       {recipes.map((recipe) => {
//         return (
//           <div key={recipe.id}>
//             <h2>{recipe.name}</h2>
//             <ul>
//               {recipe.ingredients.map((ingredient) => {
//                 return <li key={ingredient}>{ingredient}</li>
//               })}
//             </ul>
//           </div>
//         )
//       })}
//     </>
//   )
// }

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  )
}

function App2() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe {...recipe} key={recipe.id} />
      ))}
    </div>
  )
}

export default App2
