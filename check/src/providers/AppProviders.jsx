import { RecipeProvider } from "../context/RecipeContext"

export function AppProviders({ children }) {
  return (
    <RecipeProvider>
      {/* <BarProvider>
        <OtherProvider> */}
      {children}
      {/* </OtherProvider>
      </BarProvider> */}
    </RecipeProvider>
  )
}
