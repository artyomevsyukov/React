import { useHttp } from "../../hooks/http.hook"
import { useDispatch, useSelector } from "react-redux"
import {
  heroDelete,
  selectHeroes,
  selectHeroesLoadingStatus,
} from "../../redux/slices/heroesSlice"
import HeroesListItem from "../heroesListItem/HeroesListItem"
import Spinner from "../spinner/Spinner"
import { useCallback, useMemo } from "react"
import { selectActiveFilter } from "../../redux/slices/filtersSlice"

const HeroesList = () => {
  const heroes = useSelector(selectHeroes)
  const activeFilter = useSelector(selectActiveFilter)
  const heroesLoadingStatus = useSelector(selectHeroesLoadingStatus)
  const dispatch = useDispatch()
  const { request } = useHttp()

  const handleHeroDelete = useCallback(
    async (id) => {
      try {
        await request(`http://localhost:3001/heroes/${id}`, "DELETE")
        dispatch(heroDelete(id))
      } catch (error) {
        console.error("Ошибка удаления", error)
      }
    },
    [request, dispatch]
  )

  // if (heroesLoadingStatus === "loading") {
  //   return <Spinner />
  // } else if (heroesLoadingStatus === "error") {
  //   return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  // }

  // const renderHeroesList = (arr) => {
  //   if (!arr || arr.length === 0) {
  //     return <h5 className="text-center mt-5">Героев пока нет</h5>
  //   }

  //   return arr.map(({ id, ...props }) => (
  //     <HeroesListItem
  //       key={id}
  //       id={id}
  //       handleHeroDelete={handleHeroDelete}
  //       {...props}
  //     />
  //   ))
  // }

  // const filteredHeroes = (heroes) => {
  //   if (!heroes || heroes.length === 0) return []
  //   if (activeFilter === "all") return heroes
  //   return heroes.filter((hero) => hero.element === activeFilter)
  // }

  // const elements = renderHeroesList(filteredHeroes(heroes))

  const filteredHeroes = useMemo(() => {
    if (!heroes || heroes.length === 0) return []
    if (activeFilter === "all") return heroes
    return heroes.filter((hero) => hero.element === activeFilter)
  }, [heroes, activeFilter])

  const elements = useMemo(() => {
    if (filteredHeroes.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>
    }

    return filteredHeroes.map(({ id, ...props }) => (
      <HeroesListItem
        key={id}
        id={id}
        handleHeroDelete={handleHeroDelete}
        {...props}
      />
    ))
  }, [filteredHeroes, handleHeroDelete])

  if (heroesLoadingStatus === "loading") {
    return <Spinner />
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  return <ul>{elements}</ul>
}

export default HeroesList
