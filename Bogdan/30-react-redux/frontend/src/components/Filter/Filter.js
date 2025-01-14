import { useDispatch, useSelector } from "react-redux"
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
  setFavoriteFilter,
  selectFavoriteFilter,
} from "../../redux/slices/filterSlice"
import "./Filter.css"

function Filter() {
  const dispatch = useDispatch()
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)
  const favoriteFilter = useSelector(selectFavoriteFilter)

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value))
  }
  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value))
  }
  const handleFavoriteeCheckbox = () => {
    dispatch(setFavoriteFilter())
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

        <div className="filter-group">
          <input
            value={authorFilter}
            onChange={handleAuthorFilterChange}
            type="text"
            placeholder="Фльтр по автору"
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              checked={favoriteFilter}
              type="checkbox"
              onChange={handleFavoriteeCheckbox}
            />
            Only Favorite
          </label>
        </div>
        <button type="button" onClick={handleFilterReset}>
          Reset Filters
        </button>
      </div>
    </div>
  )
}

export default Filter
