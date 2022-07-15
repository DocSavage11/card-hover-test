import './App.css';
import Poster from './Components/Poster';
import NavBar from './Components/Nav/NavBar'


function App() {
  return (
    <>
      <NavBar/>
      <div className="Poster-Container">
          <Poster
          img= {require("./Assest/Imagies/Rear-Window-Poster.jpg")}
          title="Rear Window"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi magni, quidem asperiores itaque numquam ab pariatur aliquid ipsum quas maxime mollitia quasi! Cupiditate tempora facere tenetur dolores asperiores. Necessitatibus."}
        />
        <Poster
          img= {require("./Assest/Imagies/American-Psycho-Poster.jpg")}
          title="American Psycho"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi magni, quidem asperiores itaque numquam ab pariatur aliquid ipsum quas maxime mollitia quasi! Cupiditate tempora facere tenetur dolores asperiores. Necessitatibus."}
        />
        <Poster
          img= {require("./Assest/Imagies/Parasite-Poster.jpg")}
          title="Parasite"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi magni, quidem asperiores itaque numquam ab pariatur aliquid ipsum quas maxime mollitia quasi! Cupiditate tempora facere tenetur dolores asperiores. Necessitatibus."}
        />
        <Poster
          img= {require("./Assest/Imagies/Star-Wars-ESB-Poster.jpg")}
          title="Star Wars"
          subTitle="The Empire Strikes Back"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi magni, quidem asperiores itaque numquam ab pariatur aliquid ipsum quas maxime mollitia quasi! Cupiditate tempora facere tenetur dolores asperiores. Necessitatibus."}
        />
        <Poster
          img= {require("./Assest/Imagies/John-Wick-Poster.jpg")}
          title="John Wick"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi magni, quidem asperiores itaque numquam ab pariatur aliquid ipsum quas maxime mollitia quasi! Cupiditate tempora facere tenetur dolores asperiores. Necessitatibus."}
        />
        <Poster
          img= {require("./Assest/Imagies/Baby-Driver-Poster.jpg")}
          title="Baby Driver"
          description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi magni, quidem asperiores itaque numquam ab pariatur aliquid ipsum quas maxime mollitia quasi! Cupiditate tempora facere tenetur dolores asperiores. Necessitatibus."}
        />
      </div>
    </>
  );
}

export default App;
