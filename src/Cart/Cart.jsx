import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Container } from './CartStyle';
import Card from '../CartCard/CartCard';
import a from '../resources/a.png';
import b from '../resources/b.png';
import c from '../resources/c.png';
// import d from '../resources/d.png';
import e from '../resources/f.png';
import Subtotal from '../Subtotal/Subtotal';
// import f from '../resources/g.png';
// import g from '../resources/h.png';
// import h from '../resources/i.png';


const Cart = () => {
  const menuList = [  
    {
      icon: a,
      name: "Smashed Avo",
      price: "20.00",
    },
    {
      icon: b,
      name: "Ying and Yang",
      price: "10.00",
    },
    {
      icon: c,
      name: "Pancake",
      price: "25.00",
    },
    // {
    //   icon: d,
    //   name: "Huevos Rancheros",
    //   price: "15.00",
    // },
    {
      icon: e,
      name: "Rancheros (Tofu)",
      price: "25.00",
    },
    // {
    //   icon: f,
    //   name: "Breakkie Roll",
    //   price: "30.00",
    // },
    // {
    //   icon: g,
    //   name: "Breakkie Roll",
    //   price: "35.00",
    // },
    // {
    //   icon: h,
    //   name: "Burrito",
    //   price: "100.00",
    // }
  ];
  
  return (
    <Container>
        <h1> CART </h1>
        <section className='foodies'>
				{menuList.map((item, indx) => (
					<Card key={indx} icon={item.icon} name={item.name} price={item.price} />
				))}
        
			</section>
      <Subtotal />
        <Navbar />
        <Footer />
    </Container>
  )
}

export default Cart