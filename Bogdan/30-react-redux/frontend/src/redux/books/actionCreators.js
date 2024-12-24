import * as actions from "./actionTypes"

export function addBook(newBook) {
  return { type: actions.ADD_BOOK, payload: newBook }
}
export function deleteBook(id) {
  return { type: actions.DELETE_BOOK, payload: id }
}