import { useState } from "react"

import "./App.css"

function App2() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <>
      <h2>Accordion</h2>
      <Panel
        title={"1111111"}
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sint
        doloribus eligendi itaque suscipit sequi accusantium natus totam
        pariatur repellat, maiores quibusdam dolor eveniet odit labore,
        voluptatum aliquam obcaecati assumenda!
      </Panel>
      <Panel
        title={"22222222222"}
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sint
        doloribus eligendi itaque suscipit sequi accusantium natus totam
        pariatur repellat, maiores quibusdam dolor eveniet odit labore,
        voluptatum aliquam obcaecati assumenda!
      </Panel>
      <Panel
        title={"333333333"}
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(2)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio sint
        doloribus eligendi itaque suscipit sequi accusantium natus totam
        pariatur repellat, maiores quibusdam dolor eveniet odit labore,
        voluptatum aliquam obcaecati assumenda!
      </Panel>
    </>
  )
}

function Panel({ title, children, onShow, isActive }) {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </section>
  )
}
export default App2
