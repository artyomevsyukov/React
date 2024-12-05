function PetInfo({ animal, age, hasPet }) {
  // const text = hasPet ? `My ${animal} is ${age} years old` : "Нет животного!"
  // return <h1>{text}</h1>
  return hasPet ? (
    <h1>
      My {animal} is {age} years old
    </h1>
  ) : (
    <h2>Нет животного!</h2>
  )
}

export default PetInfo
