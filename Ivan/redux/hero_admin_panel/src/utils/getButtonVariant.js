export const getButtonVariant = (element) => {
  const variants = {
    fire: "danger",
    water: "primary",
    wind: "success",
    earth: "secondary",
    all: "outline-dark",
  }
  return variants[element] || "outline-dark"
}
