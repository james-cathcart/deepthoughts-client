import './App.css';
import SiteAppBar from "./components/parts/site-app-bar/SiteAppBar";
import HomePage from "./components/pages/home/HomePage";

const App = props => {
  return (
    <div className="App">
      <SiteAppBar></SiteAppBar>
      <HomePage/>
    </div>
  );
}
export default App;
