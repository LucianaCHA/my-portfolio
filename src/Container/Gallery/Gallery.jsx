import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";

import s from "./Gallery.module.css";
import Imgs from "./Imgs";

export default function Gallery(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
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
    autoplayTimeout: 2500,
    smartSpeed: 1800,
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
    { img: "./img/pokemon1.jpg", caption: "Landing page" },
    { img: "./img/pokemon2.jpg", caption: "Home page" },
    { img: "./img/pokemon3.jpg", caption: "Pokemon detail" },
    { img: "./img/pokemon4.jpg", caption: "Creation Form" },
  ];
  const portfolio = [
    { img: "./img/portfolio1.jpg", caption: "Landing page" },
    { img: "./img/portfolio2.jpg", caption: "Home page" },
  ];

  const marvel = [
    { img: "./img/marvel1.jpg", caption: "Landing page" },
    { img: "./img/marvel2.jpg", caption: "marvel2" },
    { img: "./img/marvel3.jpg", caption: "Home marvel3" },
    { img: "./img/marvel4.jpg", caption: "Home marvel4" },
    { img: "./img/marvel4.png", caption: "Home marvel5" },
    { img: "./img/marvel5.png", caption: "Home marvel6" },
  ];

  return (
    <div className={s.galleryContainer}>
      <ScreenHeading title={"Projects Gallery"} subtitle={"What have I learnt doing it?"} />
      <section className={s.gallerySection} id={props.id || ""}>
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
                    <p>
                      <h3 className={s.galleryTitle}> Pokemon App</h3>
                      <a href="https://github.com/LucianaCHA">
                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                      </a>
                      This project allowed me to integrate and develop the PERN stack using. Furthermore, this challenged me to implement CSS exclusively for styles. Also, learning a lot about the pokemon world!
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
                    <p>
                      <h3 className={s.galleryTitle}> Marvel+</h3>
                      <a href="https://github.com/LucianaCHA">
                        <i className="bi bi-arrow-up-right-circle-fill"></i>
                      </a>
                      For this project, I took part in a team of five. I enjoyed the teamwork, and I learned a lot about e-commerce technologies like payment gateway, login, authentication, and admins module.
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
    </div>
  );
}
