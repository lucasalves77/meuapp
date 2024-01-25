import Menu from "./interfaces/Menu";
import Conteudo from "./interfaces/Conteudo";
import Header from "./interfaces/Header";
import "./App.css"

function App() {
  return (
    <div id="displayGrid" className=" text-white">

      <div className="w-widthMenu">
          <Menu />
      </div>
   
      <div className="w-full">
        <Header />
        <Conteudo />
      </div>
    </div>
  );
}

export default App;
