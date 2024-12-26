import { useDispatch, useSelector } from "react-redux"
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
} from "../../redux/slices/filterSlice"
import "./Filter.css"

function Filter() {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleFilterReset = () => {
    dispatch(resetFilters())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={titleFilter}
            onChange={handleTitleFilterChange}
            type="text"
            placeholder="Фльтр по названию"
          />
        </div>
        <button type="button" onClick={handleFilterReset}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
