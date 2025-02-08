import { Link } from "react-router-dom"
import ErrorMessage from "../errorMessage/ErrorMessage"

function PageNotFound() {
  return (
    <div>
      <ErrorMessage />
      <h1 style={{ textAlign: "center", marginTop: "30px", fontSize: "50px" }}>
        Page Not Found
      </h1>
      <Link
        to={"/"}
        style={{
          display: "block",
          textAlign: "center",
          marginTop: "30px",
          fontSize: "50px",
          color: "blue",
        }}>
        Back to main page
      </Link>
    </div>
  )
}

export default PageNotFound
