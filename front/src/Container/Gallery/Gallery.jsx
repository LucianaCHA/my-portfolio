import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import s from "./Gallery.module.css";
import Imgs from './Imgs';
import pokemon1 from '../../img/pokemon1.JPG';
import pokemon2 from '../../img/pokemon2.JPG';
import pokemon3 from '../../img/pokemon3.JPG';
import pokemon4 from '../../img/pokemon4.JPG';

import marvel1 from '../../img/marvel1.jpg';
import marvel2 from '../../img/marvel2.jpg';
import marvel3 from '../../img/marvel3.jpg';
import marvel4 from '../../img/marvel4.jpg';

import portfolio1 from '../../img/portfolio1.png';
import portfolio2 from '../../img/portfolio2.png';
import portfolio3 from '../../img/portfolio3.png';


export default function Gallery(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 5,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  const pokemon = [
    { img: pokemon1, caption: "Landing page" },
    { img: pokemon2, caption: "Home page" },
    { img: pokemon3, caption: "Pokemon detail" },
    { img: pokemon4, caption: "Creation Form" },
  ];
  const portfolio = [
    { img: portfolio1, caption: "Hellopage" },
    { img: portfolio2, caption: "Resume section" },
    { img: portfolio3, caption: "Contact section" },
  ];

  const marvel = [
    { img: marvel1, caption: "Homepage" },
    { img: marvel2, caption: "Favourites" },
    { img: marvel3, caption: "Comics" },
    { img: marvel4, caption: "Detail comic" },

  ];

  return (
    <div className='screen fade-in' id={props.id}>
    <div className={s.galleryContainer}>
    
      <ScreenHeading
        title={"Projects Gallery"}
        subtitle={"What have I learnt doing it?"}
      />
     
      <section className={s.gallerySection} >
        <div className={s.container}>
          <div className={s.row}>
            <OwlCarousel
              className={s.owlCarousel}
              id="galleryCarousel"
              {...options}
            >
              {/* last project! */}

              {/* portfolio */}

              <div className="col-lg-12">
                <div className={s.galleryItem}>
                  <h6 className={s.galleryLastProject}>Newest!!</h6>
                  <div className={s.galleryComment}>
                    <h3 className={s.galleryTitle}>Current webpage</h3>
                    <p>
                      <a href="https://github.com/LucianaCHA">
                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                      </a>
                      This project allowed me to apply most of the knowledge
                      acquired in React and let me test -and learn- about new
                      libraries. I took this as a chance to improve my coding
                      practices.
                    </p>
                  </div>
                  <div className={s.info}>
                    <Imgs props={portfolio} />
                  </div>
                </div>
              </div>

              {/* //pokeapp */}
              <div className="col-lg-12">
                <div className={s.galleryItem}>
                  <div className={s.galleryComment}>
                    <h3 className={s.galleryTitle}> Pokemon App</h3>
                    <p>
                      <a href="http://pi-pokemon-indol.vercel.app">
                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                      </a>
                      This project allowed me to integrate and develop the PERN
                      stack. Furthermore, this challenged me to implement
                      CSS exclusively for styles. Also, learning a lot about the
                      pokemon world!
                    </p>
                  </div>
                  <div className={s.info}>
                    <Imgs props={pokemon} />
                  </div>
                </div>
              </div>

              {/* marvelApp */}

              <div className="col-lg-12">
                <div className={s.galleryItem}>
                  <div className={s.galleryComment}>
                    <h3 className={s.galleryTitle}> Marvel+</h3>
                    <p>
                      <a href="https://github.com/LucianaCHA/Final-Project">
                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                      </a>
                      For this project, I took part in a team of five. I enjoyed
                      the teamwork, and I learned (and implemented) a lot about e-commerce
                      technologies like payment gateway, login, authentication,
                      and admins features.
                    </p>
                  </div>
                  <div className={s.info}>
                    <Imgs props={marvel} />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      
      <div className={s.footerImg}>
        <img
          src={require("../../assets/Home/shape-bg.png")}
          alt="Phot0 not responding"
        />
      
    </div>
    </div>
    </div> 
  );
}
