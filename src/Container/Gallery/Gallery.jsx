import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";

import s from "./Gallery.module.css";

export default function Gallery(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading title={"Projects Gallery"} subtitle={"Details"} />
      <section className={s.gallerySection} id={props.id || ""}>
        <div clasName={s.container}>
          <div className={s.row}>
            <OwlCarousel className={s.owlCarousel} id="galleryCarousel">
              <div className="col-lg-12">
                <div className={s.galleryItem}>
                  <div className={s.galleryComment}>
                    <p>
                      <a href="https://github.com/LucianaCHA">
                        <i class="bi bi-arrow-up-right-circle-fill"></i>
                      </a>
                      This project, made out individually, allowed me to
                      integrate and develop PERN stack using. Furthermore,
                      challenged my design skills by implementing exclusively
                      CSS. Also, learning a lot about the pokemon world! Go!
                    </p>
                   
                  </div>
                    <div className={s.info}>
                        <img src='./img/pokemon1.jpg' alt= 'not available'></img>
                        <h5>Landscape</h5>
                        <img src='./img/pokemon2.jpg' alt= 'not available'></img>
                        <h5>Homepage</h5>
                        <img src='./img/pokemon3.jpg' alt= 'not available'></img>
                        <h5>Pokemon Detail</h5>
                        <img src='./img/pokemon4.jpg' alt= 'not available'></img>
                        <h5>Creation Form</h5> 
                    </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={s.galleryItem}>
                  <div className={s.galleryComment}>
                    <p>
                      <a href="https://github.com/LucianaCHA">
                        <i class="bi bi-arrow-up-right-circle-fill"></i>
                      </a>
                      This project, made out individually, allowed me to
                      integrate and develop PERN stack using. Furthermore,
                      challenged my design skills by implementing exclusively
                      CSS. Also, learning a lot about the pokemon world! Go!
                    </p>
                   
                  </div>
                    <div className={s.info}>
                        <img src='./img/pokemon1.jpg' alt= 'not available'></img>
                        <h5>Landscape</h5>
                        <img src='./img/pokemon2.jpg' alt= 'not available'></img>
                        <h5>Homepage</h5>
                        <img src='./img/pokemon3.jpg' alt= 'not available'></img>
                        <h5>Pokemon Detail</h5>
                        <img src='./img/pokemon4.jpg' alt= 'not available'></img>
                        <h5>Creation Form</h5> 
                    </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className={s.galleryItem}>
                  <div className={s.galleryComment}>
                    <p>
                      <a href="https://github.com/LucianaCHA">
                        <i class="bi bi-arrow-up-right-circle-fill"></i>
                      </a>
                      This project, made out individually, allowed me to
                      integrate and develop PERN stack using. Furthermore,
                      challenged my design skills by implementing exclusively
                      CSS. Also, learning a lot about the pokemon world! Go!
                    </p>
                   
                  </div>
                    <div className={s.info}>
                        <img src='./img/pokemon1.jpg' alt= 'not available'></img>
                        <h5>Landscape</h5>
                        <img src='./img/pokemon2.jpg' alt= 'not available'></img>
                        <h5>Homepage</h5>
                        <img src='./img/pokemon3.jpg' alt= 'not available'></img>
                        <h5>Pokemon Detail</h5>
                        <img src='./img/pokemon4.jpg' alt= 'not available'></img>
                        <h5>Creation Form</h5> 
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
