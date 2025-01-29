const ExampleCarouselImage = ({ imageUrl, text }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "400px",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff", // Цвет текста
        fontSize: "24px", // Размер текста
      }}>
      {text}
    </div>
  )
}

export default ExampleCarouselImage
