import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home__container">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
        alt="Application banner"
      />
      <div className="home__row">
        <Product
          id="233544546"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          price={29.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
          rating={4}
        />
        <Product
          id="2334356243"
          title="Marvo Tech CA-210 ATX Gaming PC"
          price={2000.99}
          image="https://d12prgon3aw7l1.cloudfront.net/4275050_image_700x700.jpg"
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="2334224355243"
          title="ZACO Robot Shop ZACO V80 Robot Vacuum Cleaner and Robot Mop 2-in-1 Silver"
          price={100.99}
          image="https://cdn.webshopapp.com/shops/291600/files/325070519/zaco-v80-robot-vacuum-and-robot-mop-2-in-1-silver.jpg"
          rating={5}
        />
        <Product
          id="4423569573943"
          title="Amazon.com Cricut Explore Air 2, Matte Black"
          price={150.99}
          image="https://m.media-amazon.com/images/I/41qAjdUqqdL._AC_SS350_.jpg"
          rating={6}
        />
        <Product
          id="538402382479"
          title=" Kaforise Wire Wall Grid Panel, Multifunction Painted"
          price={10.99}
          image="https://1000boborless.com/wp-content/uploads/2020/02/wire_wall_grid_1489618226_48f6325f.jpg"
          rating={6}
        />
      </div>

      <div className="home__row">
        <Product
          id="4903758230587"
          title="Jumia Kenya 300ml USB Air Humidifier Electric Aroma Air Diffuser"
          price={10.99}
          image="https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/10/395192/1.jpg?6986"
          rating={5}
        />
      </div>
    </div>
  );
}
// {1:32:43}
export default Home;
