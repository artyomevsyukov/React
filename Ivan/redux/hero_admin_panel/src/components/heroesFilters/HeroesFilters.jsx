import { useDispatch, useSelector } from "react-redux"
import CN from "classnames"
import { getButtonVariant } from "../../utils/getButtonVariant"
import getElementName from "../../utils/getElementName"
import Spinner from "../spinner/Spinner"
import {
  selectFilters,
  setActiveFilter,
  selectFiltersLoadingStatus,
} from "../../redux/slices/filtersSlice"
const HeroesFilters = () => {
  const dispatch = useDispatch()

  const filters = useSelector(selectFilters)
  const filtersLoadingStatus = useSelector(selectFiltersLoadingStatus)

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

  const renderFilter = (arr) => {
    return arr.map((filter) => {
      const btnClass = CN("btn", `btn-${getButtonVariant(filter.name)}`, {
        active: filter.active,
      })

      return (
        <button
          key={filter.id}
          onClick={() => handlerFilter(filter.id, filter.name)}
          className={btnClass}>
          {getElementName(filter.name)}
        </button>
      )
    })
  }

  const elements = renderFilter(filters)

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">{elements}</div>
      </div>
    </div>
  )
}

export default HeroesFilters
