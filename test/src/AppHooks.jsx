import data from "../data/data"
import { useState, useMemo, useDeferredValue, useTransition } from "react"

function AppHook() {
  const [text, setTest] = useState("")
  const [posts, setPosts] = useState(data)
  //   const [isPending, startTransition] = useTransition()
  const onValueChange = (e) => {
    setTest(e.target.value)
    // startTransition(() => setTest(e.target.value))
  }

  //   const filteredPosts = useMemo(() => {
  //     return posts.filter((item) => item.name.toLowerCase().includes(text))
  //   }, [text, posts])

  //   useDeferredValue
  const deferredValue = useDeferredValue(text)
  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.name.toLowerCase().includes(deferredValue)
    )
  }, [deferredValue])

  //   useTransition
  //   const filteredPosts = useMemo(() => {
  //     return posts.filter((item) => item.name.toLowerCase().includes(text))
  //   }, [text, posts])

  return (
    <>
      <input type="text" value={text} onChange={onValueChange} />
      <hr />
      <div>
        {filteredPosts.map((post) => (
          <div key={post._id}>
            <h4>{post.name}</h4>
          </div>
        ))}

        {/* {isPending ? (
          <div>Загрузка...</div>
        ) : (
          filteredPosts.map((post) => (
            <div key={post._id}>
              <h4>{post.name}</h4>
            </div>
          ))
        )} */}
      </div>
    </>
  )
}

export default AppHook
