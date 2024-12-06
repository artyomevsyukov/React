function Person(props) {
  // console.log(props)

  const { firstName, lastName, email, img } = props
  return (
    <div className="card">
      <img src={img} alt="img" />
      <h1>
        {firstName} {lastName}
      </h1>
      <div>{email}</div>
    </div>
  )
}

export default Person
