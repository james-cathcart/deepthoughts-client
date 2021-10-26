import './App.css';
import SiteAppBar from "./components/parts/site-app-bar/SiteAppBar";
import HomePage from "./components/pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <SiteAppBar></SiteAppBar>
      <HomePage/>
    </div>
  );
}

export default App;
