import "./App.css";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import About_Dina_Six from "./components/About_Dina_Six";
import Meet_The_Cast from "./components/Meet_The_Cast";
import Book_Scenes from "./components/Book_Scenes";

function App() {
  return (
    <>
      <NavBar />
        <Carousel />
      <div id="meet_the_leads">
        <Meet_The_Cast />
      </div>
        <Book_Scenes />
      <div id="about_dina_six">
        <About_Dina_Six />
      </div>
    </>
  );
}

export default App;
