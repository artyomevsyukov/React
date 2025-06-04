import * as actionType from "../actions/actionTypes"

const initialState = {
  heroes: [],
  heroesLoadingStatus: "idle",
  filters: [],
  filtersLoadingStatus: "idle",
}

const reducer = (state = initialState, action) => {
  console.log("Current state:", state)

  switch (action.type) {
    case actionType.HEROES_FETCHING:
      return {
        ...state,
        heroesLoadingStatus: "loading",
      }
    case actionType.HEROES_FETCHED:
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: "idle",
      }
    case actionType.HEROES_FETCHING_ERROR:
      return {
        ...state,
        heroesLoadingStatus: "error",
      }
    case actionType.HERO_DELETE:
      return {
        ...state,
        heroes: state.heroes.filter((hero) => hero.id !== action.payload),
        heroesLoadingStatus: "idle",
      }
    case actionType.ADD_HERO:
      return {
        ...state,
        heroes: [...state.heroes, action.payload],
      }
    case actionType.FILTERS_FETCHING:
      return {
        ...state,
        filtersLoadingStatus: "loading",
      }
    case actionType.FILTERS_FETCHED:
      return {
        ...state,
        filters: action.payload,
        filtersLoadingStatus: "idle",
      }
    case actionType.FILTERS_FETCHING_ERROR:
      return {
        ...state,
        filtersLoadingStatus: "error",
      }
    case actionType.UPDATE_FILTER:
      return {
        ...state,
        filters: state.filters.map((filter) => {
          return {
            ...filter,
            active: filter.id === action.payload ? true : false,
          }
        }),
      }

    default:
      return state
  }
}

export default reducer
