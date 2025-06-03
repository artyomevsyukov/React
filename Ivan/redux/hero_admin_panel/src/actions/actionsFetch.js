// import {
//   filtersFetching,
//   filtersFetched,
//   filtersFetchingError,
//   heroesFetching,
//   heroesFetched,
//   heroesFetchingError,
// } from "."
// import { useHttp } from "../hooks/http.hook"

// const { request } = useHttp()

// export const fetchFilters = () => async (dispatch) => {
//   dispatch(filtersFetching())
//   request("http://localhost:3001/filters")
//     .then((data) => dispatch(filtersFetched(data)))
//     .catch(() => dispatch(filtersFetchingError()))
// }

// export const fetchHeroes = () => async (dispatch) => {
//   dispatch(heroesFetching())
//   request("http://localhost:3001/heroes")
//     .then((data) => dispatch(heroesFetched(data)))
//     .catch(() => dispatch(heroesFetchingError()))
// }
// export const fetchFilters = () => async (dispatch) => {
//   dispatch(filtersFetching())
//   try {
//     const response = await fetch("http://localhost:3001/filters")
//     const data = await response.json()
//     dispatch(filtersFetched(data))
//   } catch (e) {
//     dispatch(filtersFetchingError())
//   }
// }

// export const fetchHeroes = () => async (dispatch) => {
//   dispatch(heroesFetching())
//   try {
//     const response = await fetch("http://localhost:3001/heroes")
//     const data = await response.json()
//     dispatch(heroesFetched(data))
//   } catch (e) {
//     dispatch(heroesFetchingError())
//   }
// }
