function WhoAmI({ name, surname, link }) {
  return (
    <div>
      <h2>
        My name is {name()}, surname - {surname}
      </h2>
      <a href={link}>My profile</a>
      <div></div>
    </div>
  )
}
function App2() {
  return (
    <div>
      <WhoAmI
        name={() => {
          return "John"
        }}
        surname="Smith"
        link="Facebook.com"
      />
      <WhoAmI
        name={() => {
          return "Tom"
        }}
        surname="CL"
        link="Vk.com"
      />
    </div>
  )
}

export default App2
