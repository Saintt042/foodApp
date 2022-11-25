import { Container } from './CardStyles';


const Card = ({ icon, name, price }) => {
	return (
		<Container>
			<figure>
				<img src={icon} alt='foodie' />
			</figure>

			<section className='info'>
				<div>
					<p> { name } </p>
					<p> { price } </p>
				</div>
			</section>
		</Container>
	);
};

export default Card;