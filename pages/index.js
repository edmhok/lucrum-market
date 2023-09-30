import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import Challenges from "../components/Challenges";


export default function Home() {
  return (
    <>
      <SeoHead title='Lucrum Market Landing Page' />
      <Layout>
        <Hero />
        <Feature />
        <Challenges />
      </Layout>
    </>
  );
}
