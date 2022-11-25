import { Container } from "./CartCardStyle";
import xxx from '../resources/Path.png';

const CartCard = ({ icon, name, price }) => {
  return (
    <Container>
			<figure>
				<img src={icon} alt='foodie' />
			</figure>

			<section className='info'>
				<div>
					<p className="bold" > { name } </p>
					<p className="money" > ${ price } </p>
				</div>
			</section>

			<div className="add">
				<p className="one" > - <span className="span" > 1 </span> +  </p>
				<img src={ xxx } alt="cancel" />
			</div>
		</Container>
  );
};

export default CartCard;