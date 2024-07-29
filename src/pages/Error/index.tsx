import { Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <Container className="mt-5">
      <Alert variant="danger">
        <Alert.Heading>Something Went Wrong</Alert.Heading>
        <p>
          An unexpected error has occurred. Please try again later or contact support if the issue persists.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to="/">Go to Home</Link>
        </div>
      </Alert>
    </Container>
  )
}
