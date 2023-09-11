import React from "react";
import Hero from "../../../components/main/Hero";
import Recommended from "../../../components/main/Recommended";
import data from "../../../components/lib/data";
import InvestSeries from "../../../components/main/InvestSeries";
import Investing from "../../../components/main/Investing";
import MoneyLounge from "../../../components/main/MoneyLounge";
import Kudi from "../../../components/main/Kudi";
import Featured from "../../../components/main/Featured";
import Join from "../../../components/main/Join";
import Footer from "../../../components/main/Footer";

const Home = () => {
  const videos = data.filter(item => item.type === "videos");
  const articles = data.filter(item => item.type === "articles");
  const podcasts = data.filter(item => item.type === "podcasts");

  return (
    <React.Fragment>
      <main>
        <Hero data={data} />
        <Recommended data={[videos[0], videos[1], articles[0]]} />
        <Investing data={videos} />
        <InvestSeries data={videos} />
        <MoneyLounge data={podcasts} />
        <Kudi />
        <Featured data={articles} />
        <Join />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Home;
