import { useState, useEffect } from "react"

import "./App.css"
import { DragAndDropList } from "./components/DragAndDropList"
import { DebouncedSearch } from "./components/DebouncedSearch"
import { useFetch } from "./hooks/useFetch"
import { UserCard } from "./hooks/useCard"
import { useWindowSize } from "./hooks/useWindowSize"

function AppTest() {
  const { width, height } = useWindowSize()
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <>
      <p>
        Window size: {width}px × {height}px
      </p>
      <div>
        <h2>{data?.title}</h2>
        <p>{data?.body}</p>
      </div>
      <p>======================================================</p>
      <UserCard userId={5} />
      <p>======================================================</p>
      <DragAndDropList />
      <DebouncedSearch />
    </>
  )
}

export default AppTest
