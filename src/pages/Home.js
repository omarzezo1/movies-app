import React, { useEffect, useState } from "react";
import Navbar from "../utils/Navbar";
import Slider from "../components/Slider";
import SliderCards from "../components/SliderCards";
import { Ask } from "../components/Ask";
import Subscription from "../components/Subscription";
import axios from "axios"

const Home = () => {
  const [popularList, setPopularList] = useState([])
  const [topRated, setTopRatedList] = useState([])
  const [upcomingList, setUpcomingList] = useState([])

  const getData = async()=>{
    // get movies list
    await axios.get("").then((movies)=>{
      setPopularList(movies.data.results)
    })
    // get top rated list
    await axios.get("").then((tv)=>{
      setTopRatedList(tv.data.results)
    })
    // get upcoming list
    await axios.get("").then((tv)=>{
      setUpcomingList(tv.data.results)
    })
  }


  useEffect(()=>{
    getData()
  },[])



  return (
    <div className="landing">
      <Navbar />
      <Slider data={popularList.slice(8,11)} internal={false}/>
      <SliderCards title={"Top Rated Movies"} data={topRated}/>
      <SliderCards title={"Popular Movies"} data={popularList}/>
      <SliderCards title={"Upcoming Movies"} data={upcomingList}/>
      <Ask/>
      <Subscription/>
    </div>
  );
};

export default Home;
