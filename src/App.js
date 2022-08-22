import Header from "./components/Header/Header";
import Image from "./components/Image/Image";
import Info from "./components/Info/Info";
import LakshmanJhula from "./components/LakshmanJhula/LakhsmanJhula";
import Explore from "./components/LakshmanJhula/Explore";
import Advantage from "./components/LakshmanJhula/Advantage";
import RoomsSuites from "./components/LakshmanJhula/RoomsSuites";
import Testimony from "./components/LakshmanJhula/Testimony";
import Packages from "./components/LakshmanJhula/Packages";
import RoundUp from "./components/LakshmanJhula/RoundUp";
import Contact from "./components/LakshmanJhula/Contact";
import Footer from "./components/LakshmanJhula/Footer";

function App() {
  return (
    <div>
      <Header />
      <Image />
      <Info />
      <LakshmanJhula />
      <Explore />
      <Advantage />
      <RoomsSuites />
      <Testimony />
      <Packages />
      <RoundUp />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
