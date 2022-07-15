import './App.css';
import Poster from './Components/Poster';

function App() {
  return (
    <Poster
      img= {require("./Assest/Imagies/Rear-Window-Poster.jpg")}
      title="Rear Window"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi magni, quidem asperiores itaque numquam ab pariatur aliquid ipsum quas maxime mollitia quasi! Cupiditate tempora facere tenetur dolores asperiores. Necessitatibus."
    />
  );
}

export default App;
