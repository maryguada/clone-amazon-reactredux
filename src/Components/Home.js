import React from 'react';
import HomeImg from '../img/HomeImg.png';
import Product from './Product';
import '../Styles/Home.css';

function Home() {
    return (
        <div className="home">
            <img
                className="home-img"
                src={HomeImg}
                alt=""
            />
            {/* Product */}
            <div className="home-row">
                <Product
                    id="1"
                    title="Good Vibes Good Life"
                    price={11.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/31qVx2k8uzL._SX348_BO1,204,203,200_.jpg'
                />

                <Product
                    id="2"
                    title="You are a Badass"
                    price={8.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/51r5X3h8IWL._SX315_BO1,204,203,200_.jpg'
                />
            </div>

            <div className="home-row">

                <Product
                    id="3"
                    title="Amazon Echo 2nd Gen"
                    price={79.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/71I6oj6ZFBL._AC_SX425_.jpg'
                />

                <Product
                    id="4"
                    title="Kitchen Aid"
                    price={11.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/81LBhCVGIPL._AC_UL320_.jpg'
                />

                <Product
                    id="1"
                    title="Elaikement Sport Band"
                    price={31.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/61GTcHJsgcL._AC_SX679_.jpg://images-na.ssl-images-amazon.com/images/I/31qVx2k8uzL._SX348_BO1,204,203,200_.jpg'
                />
            </div>


            <div className="home-row">

                <Product
                    id="5"
                    title="LG 38 Inch Monitor "
                    price={1099}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81x55WcoReL._AC_SX679_.jpg'
                />

            </div>

        </div >
    )
}

export default Home; 