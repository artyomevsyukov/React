import * as actions from "./actionTypes"

export const heroesFetching = () => {
  return {
    type: actions.HEROES_FETCHING,
  }
}

export const heroesFetched = (heroes) => {
  return {
    type: actions.HEROES_FETCHED,
    payload: heroes,
  }
}

export const heroesFetchingError = () => {
  return {
    type: actions.HEROES_FETCHING_ERROR,
  }
}

export const heroDelete = (id) => {
  return {
    type: actions.HERO_DELETE,
    payload: id,
  }
}

export const addHero = (hero) => {
  return {
    type: actions.ADD_HERO,
    payload: hero,
  }
}

export const filtersFetching = () => {
  return {
    type: actions.FILTERS_FETCHING,
  }
}

export const filtersFetched = (filters) => {
  return {
    type: actions.FILTERS_FETCHED,
    payload: filters,
  }
}

export const filtersFetchingError = () => {
  return {
    type: actions.FILTERS_FETCHING_ERROR,
  }
}

export const updateFilter = (id) => {
  return {
    type: actions.UPDATE_FILTER,
    payload: id,
  }
}
