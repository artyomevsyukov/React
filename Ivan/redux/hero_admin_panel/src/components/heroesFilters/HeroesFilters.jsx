import { useDispatch, useSelector } from "react-redux"
import CN from "classnames"
import { getButtonVariant } from "../../utils/getButtonVariant"
import getElementName from "../../utils/getElementName"
import Spinner from "../spinner/Spinner"
import { setActiveFilter } from "../../actions/actionCreators"

const HeroesFilters = () => {
  console.log("render HeroesFilters")
  const dispatch = useDispatch()
  const filters = useSelector((state) => state.filters)
  const filtersLoadingStatus = useSelector(
    (state) => state.filtersLoadingStatus
  )

  if (filtersLoadingStatus === "loading") {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spinner />
      </div>
    )
  } else if (filtersLoadingStatus === "error") {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  const handlerFilter = (filterId, filterName) => {
    dispatch(setActiveFilter({ filterId, filterName }))
  }

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {filters.map((filter) => {
            return (
              <button
                key={filter.id}
                onClick={() => handlerFilter(filter.id, filter.name)}
                className={CN("btn", `btn-${getButtonVariant(filter.name)}`, {
                  active: filter.active,
                })}>
                {getElementName(filter.name)}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default HeroesFilters
