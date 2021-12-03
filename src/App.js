import './App.css';
import CenterSec from './Components/CenterSec';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ImageSec from './Components/ImageSec';
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import ProImg from './Components/ProImg';

function App(props) {
  return (
      <>
      <Navbar />

      <Header first="green"
        sec="cedar"
        third="Sailing in spring, new life growing, flowing, feeling perfectly enclosed in between a mountain range..."
      />

      <ImageSec link1="https://i.pinimg.com/564x/dc/a3/b4/dca3b40982dba02380c236abc6558d6f.jpg"
        link2="https://cdn.shopify.com/s/files/1/1012/7888/products/BOB6460_1050x.jpg?v=1589168640"
      />

      <Product
        name="green cedar"
        price="$150.00"
        des="The unique combination of a twice distilled Texas cedar and wild harvested Atlas Mountain cedar make for a distinctive, intoxicating fragrance. *1% of Green Cedar revenue goes to supporting nonprofit Plastic Soup Foundation"
        lastline="Enjoy FREE SHIPPING on all orders over $60 ($8.50 fee for orders under $60)"
        otxt="add to bag"
        olink=""

        primg="https://cdn.shopify.com/s/files/1/0167/9232/2148/products/Parfum-Naturel-Green-Cedar-Parfum-Naturel-Abel-Odor-50ml_e1a05f9c-b4ba-43ad-9570-78650e6f679d.jpg?v=1629902839"
      />

      <CenterSec centertxt="It’s crazy when you smell the cedarwood from the Atlas Mountains in Morocco, it is so peculiar and aromatic, it really
            takes you to the oriental North Africa."
      />

        <Product
        name="At Abel we care..."
        price="modern natural perfume for all"
        des="We believe in the power and beauty of (100% natural) scent and its ability to enrich daily life in a way nothing else can. We also believe that we are the generation of businesses and consumers who can turn the tide on the global climate crisis, but that we must act now. Read more about our environmental initiatives here, and help us, by holding us accountable."
        lastline=""

        primg="https://images.unsplash.com/photo-1595978706768-d3e0648ae1d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2VkYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
      />

      <ProImg imglink="https://i.pinimg.com/originals/fc/c5/5b/fcc55b47e3d93b7684588e3d4b5d3532.jpg"/>
      
      <Footer name="compnay"
        des="For nearly a decade, our mission has been to create the world’s best 100% natural perfume without compromising on ethics of aesthetics, and in doing so, inspire positive change. Born in Amsterdam and now calling Wellington, New Zealand home, you can find our collection in a thoughtful edit of the world’s top stores, across 33 countries."
        info="More info"
        infotxt1="ingredient lists" infolink1=""
        infotxt2="100% natural perfume" infolink2=""
        infotxt3="faq" infolink3=""
        follow="Follow us"
        ig="Instagram" iglink=""
        fb="Facebook" fblink=""
        pt="Pintrest" ptlink=""

      />
      </>
  );
}

export default App;
