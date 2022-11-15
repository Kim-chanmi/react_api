import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashTag from "../include/UnsplashTag";
import UnsplashCont from "../include/UnsplashCont";
import Contact from "../layout/Contact";

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);

  // unsplash search
  const search = async (query) => {
    await fetch(
      `https://api.unsplash.com/search/photos?client_id=ArGvdKlJWl3YpwcaZmGDf5jEEVo81-0sbA8evCVSBo4&query=${query}&per_page=30`
    )
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then((result) => setImages(result.results))
      .catch((error) => console.log("error", error));
  };

  // unsplash
  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/random?client_id=ArGvdKlJWl3YpwcaZmGDf5jEEVo81-0sbA8evCVSBo4&count=30"
    )
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then((result) => setImages(result))
      .catch((error) => console.log("error", error));

    fetch(
      "https://api.unsplash.com/photos/random?client_id=ArGvdKlJWl3YpwcaZmGDf5jEEVo81-0sbA8evCVSBo4&count=10"
    )
      .then((response) => response.json())
      // .then(result => console.log(result))
      .then((result) => setRandom(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["Unsplash", "reference api"]} />
        <UnsplashSlider random={random} />
        <UnsplashTag onSearch={search} />
        <UnsplashSearch onSearch={search} />
        <UnsplashCont images={images} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
};

export default Unsplash;
