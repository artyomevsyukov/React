const getElementName = (value) => {
  const elementName = {
    all: "Все",
    fire: "Огонь",
    water: "Вода",
    wind: "Ветер",
    earth: "Земля",
  }
  return elementName[value] || value
}

export default getElementName
