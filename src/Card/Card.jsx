import { Container } from './CardStyles';


const Card = ({ icon, name }) => {
	return (
		<Container>
			<figure>
				<img src={icon} alt='foodie' />
			</figure>

			<section className='info'>
				<div>
					<p> { name } </p>
				</div>
			</section>
		</Container>
	);
};

export default Card;