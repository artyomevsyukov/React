import { useEffect } from "react"
import { useDispatch } from "react-redux"

import HeroesList from "../heroesList/HeroesList"
import HeroesAddForm from "../heroesAddForm/HeroesAddForm"
import HeroesFilters from "../heroesFilters/HeroesFilters"
import { useHttp } from "../../hooks/http.hook"
import {
  filtersFetching,
  filtersFetched,
  filtersFetchingError,
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from "../../actions"
import "./app.scss"

const App = () => {
  const dispatch = useDispatch()
  const { request } = useHttp()

  useEffect(() => {
    dispatch(filtersFetching())
    request("http://localhost:3001/filters")
      .then((data) => dispatch(filtersFetched(data)))
      .catch(() => dispatch(filtersFetchingError()))

    dispatch(heroesFetching())
    request("http://localhost:3001/heroes")
      .then((data) => dispatch(heroesFetched(data)))
      .catch(() => dispatch(heroesFetchingError()))
  }, [])

  return (
    <main className="app">
      <div className="content">
        <HeroesList />
        <div className="content__interactive">
          <HeroesAddForm />
          <HeroesFilters />
        </div>
      </div>
    </main>
  )
}

export default App
