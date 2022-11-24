import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Container } from './MenuStyle';
import a from '../resources/a.png';
import b from '../resources/b.png';
import c from '../resources/c.png';
import d from '../resources/d.png';
import e from '../resources/f.png';
import f from '../resources/g.png';
import g from '../resources/h.png';
import h from '../resources/i.png';

const Menu = () => {
  const menuList = [  
    {
      icon: a,
      name: "Smashed Ava",
    },
    {
      icon: b,
      name: "Ying and Yang",
    },
    {
      icon: c,
      name: "Pancake",
    },
    {
      icon: d,
      name: "Huevos Rancheros",
    },
    {
      icon: e,
      name: "Rancheros (Tofu)",
    },
    {
      icon: f,
      name: "Breakkie Roll",
    },
    {
      icon: g,
      name: "Breakkie Roll",
    },
    {
      icon: h,
      name: "Burrito",
    }
  ];
  return (
    <Container>
      <div className="contents">
      <h1> SUSHI FOOD </h1>
       <section className='foodies'>
				{menuList.map((item, indx) => (
					<Card key={indx} icon={item.icon} name={item.name} />
				))}
        
			</section>
      
       <Navbar />

      
       <div className="lasts">
        
       <button className='loadmore'> LOAD MORE </button>
        <Footer />
       </div>

      </div>
    </Container>
  )
}

export default Menu