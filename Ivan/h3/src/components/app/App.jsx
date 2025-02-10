import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { MainPage, ComicsPage, SingleComicPage } from "../pages"

import AppHeader from "../appHeader/AppHeader"
import Spinner from "../spinner/Spinner"

const PageNotFound = lazy(() => import("../pages/PageNotFound"))
const MainPage = lazy(() => import("../pages/MainPage"))
const ComicsPage = lazy(() => import("../pages/ComicsPage"))
const SingleComicPage = lazy(() => import("../pages/SingleComicPage"))

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main>
          {/* <Suspense fallback={<span>Loading...</span>}> */}
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/comics/:comicId" element={<SingleComicPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

export default App
