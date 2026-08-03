import React, { useEffect } from "react";

// Components
import Hero from "../components/home/Hero";
import Welcome from "../components/home/Welcome";
// import News from '../components/home/News';
import Programs from "../components/home/Programs";
import Gallery from "../components/home/Gallery";
import Testimonials from "../components/home/Testimonials";
import AssistantHeadmasterViews from "../components/home/AssistantHeadmasterViews";

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = "St. Michel's | Excellence in Education";
  }, []);

  return (
    <div className="w-[110vw] md:w-full overflow-x-hidden">
      <Hero />
      <Welcome />
      <AssistantHeadmasterViews/>
      <Programs />
      {/*News component removed  */}
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default HomePage;
