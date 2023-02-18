import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Clients from "../components/Clients/clients";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Clients />
      <Projects />
      <Technologies />
      <Timeline />
    </Layout>
  );
};

export default Home;
