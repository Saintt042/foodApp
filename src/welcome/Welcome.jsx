import { Container } from './WelcomeStyle';
import { NavLink } from "react-router-dom";

const Welcome = () => {
  return (
    <Container>
        <div className="homelayout">
        <div className="welcome">
          <h1>
            Welcome to <span> Zubis </span> Restaurant
          </h1>
          <p>
            {" "}
            People eat with their eyes and Zubis creates an easy way for
            customers to order when they can see beautiful photos of your food{" "}
          </p>
        </div>
        <div className="btn">
          <ul>
            <li>
              <NavLink to="/menu" className={'butt'} >Menu</NavLink>
            </li>

            <li>
              <NavLink to="/cart" className={'butt'}>Cart</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Welcome