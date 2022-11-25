import { Container } from "./NotFoundStyle"
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container> 
        <div className="not-found">
            <h2> 404 </h2>
            <p> Page not found </p>
            <p> Try searching for something else: mmuah!!! </p>
            <Link to="/">
            <button> Back to home </button>
         </Link>
        </div>
     </Container>
  );
};

export default NotFound;