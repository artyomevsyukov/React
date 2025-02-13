import { Link } from "react-router-dom"
import ErrorMessage from "../errorMessage/ErrorMessage"
import { Helmet } from "react-helmet"

function PageNotFound() {
  return (
    <div>
      <Helmet>
        <meta name="description" content="page Not Found"></meta>
        <title>404</title>
      </Helmet>
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
