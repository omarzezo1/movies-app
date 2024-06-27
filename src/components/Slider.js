import React from "react";
import Play from "../images/svg/play.svg";
import Plus from "../images/svg/plus.svg";
import Facebook from "../images/svg/facebook.svg";
import Twitter from "../images/svg/twitter.svg";
import Instagram from "../images/svg/instagram.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = ({ data, internal }) => {
  return (
    <>
      <div className="slider">
        <div className="slider-wraper">
          <Swiper
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.length > 0
              ? data.map((trend) => (
                  <SwiperSlide key={trend.id}>
                    <div className="slide" style={{
                      background: `url('https://image.tmdb.org/t/p/w1280${trend.backdrop_path}')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                      }}>
                      <div className="overlay">
                        <div className="info">
                          <h2>{trend.title}</h2>
                          <p>{trend.overview}</p>
                          <div className="btns-wraper">
                              <Link className="watch" to= {`movie/${trend.id}`}>
                              <img src={Play} alt="play" />
                              {internal ? "play":"watch"}
                              </Link>
                            <Link to="">
                              <img src={Plus} alt="plus" />
                              add to list
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : null}
          </Swiper>
        </div>
        {/* social icons */}
        <div className="social">
          <a href="">
            <img src={Facebook} alt="facebook" />
          </a>
          <a href="">
            <img src={Twitter} alt="twitter" />
          </a>
          <a href="">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
        {/* switch buttons */}
        <div className="switch">
          <i className="fas fa-circle active" data-switch="block-1"></i>
          <i className="fas fa-circle" data-switch="block-3"></i>
          <i className="fas fa-circle" data-switch="block-2"></i>
        </div>
      </div>
    </>
  );
};

export default Slider;
