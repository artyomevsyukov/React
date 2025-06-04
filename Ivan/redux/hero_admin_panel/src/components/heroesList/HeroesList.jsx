import { useHttp } from "../../hooks/http.hook"
import { useDispatch, useSelector } from "react-redux"
import { heroDelete } from "../../actions/actionCreators"
import HeroesListItem from "../heroesListItem/HeroesListItem"
import Spinner from "../spinner/Spinner"

const HeroesList = () => {
  console.log("render HeroesList")
  const heroes = useSelector((state) => state.heroes)
  const activeFilter = useSelector((state) => state.activeFilter)

  const heroesLoadingStatus = useSelector((state) => state.heroesLoadingStatus)
  const dispatch = useDispatch()
  const { request } = useHttp()

  const handleHeroDelete = (id) => {
    // dispatch(heroesFetching())
    request(`http://localhost:3001/heroes/${id}`, "DELETE")
      .then(() => dispatch(heroDelete(id)))
      .catch((error) => console.log("Ошибка удаления", error))
  }

  if (heroesLoadingStatus === "loading") {
    return <Spinner />
  } else if (heroesLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>
    }

    return arr.map(({ id, ...props }) => {
      return (
        <HeroesListItem
          key={id}
          handleHeroDelete={() => handleHeroDelete(id)}
          {...props}
        />
      )
    })
  }

  const filteredHeroes = (heroes) => {
    if (activeFilter === "all") return heroes

    return heroes.filter((hero) => hero.element === activeFilter)
  }

  const elements = renderHeroesList(filteredHeroes(heroes))
  return <ul>{elements}</ul>
}

export default HeroesList
