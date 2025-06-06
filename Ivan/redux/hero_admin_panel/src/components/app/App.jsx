import { useEffect } from "react"
import { useDispatch } from "react-redux"

import HeroesList from "../heroesList/HeroesList"
import HeroesAddForm from "../heroesAddForm/HeroesAddForm"
import HeroesFilters from "../heroesFilters/HeroesFilters"

import { fetchFilters } from "../../redux/slices/filtersSlice"
import { fetchHeroes } from "../../redux/slices/heroesSlice"

import "./app.scss"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchFilters())
    dispatch(fetchHeroes())
  }, [])

  // useEffect(() => {
  //   const loadData = async () => {
  //     try {
  //       dispatch(filtersFetching())
  //       dispatch(heroesFetching())

  //       // await new Promise((resolve) => setTimeout(resolve, 2000))

  //       const [filters, heroes] = await Promise.all([
  //         request("http://localhost:3001/filters"),
  //         request("http://localhost:3001/heroes"),
  //       ])

  //       dispatch(filtersFetched(filters))
  //       dispatch(heroesFetched(heroes))
  //     } catch (error) {
  //       console.log("Error: ", error.message)
  //       dispatch(filtersFetchingError())
  //       dispatch(heroesFetchingError())
  //     }
  //   }

  //   loadData()
  // }, [])

  // useEffect(() => {
  //   dispatch(filtersFetching())
  //   dispatch(heroesFetching())

  //   setTimeout(() => {
  //     Promise.all([
  //       request("http://localhost:3001/filters")
  //         .then((data) => dispatch(filtersFetched(data)))
  //         .catch(() => dispatch(filtersFetchingError())),

  //       request("http://localhost:3001/heroes")
  //         .then((data) => dispatch(heroesFetched(data)))
  //         .catch(() => dispatch(heroesFetchingError())),
  //     ])
  //   }, 3000)
  // }, [])

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
