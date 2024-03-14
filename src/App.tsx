import Carousel from "./components/Carousel/Carousel";
import Banner1 from "./assets/Banner1.png";
import Banner2 from "./assets/Banner2.png";

function App() {
  return <Carousel arrowSize="medium" items={[Banner1, Banner2]} />;
}

export default App;
