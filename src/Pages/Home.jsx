import "../Styles/Default.css";
import Navbar from "../Components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
