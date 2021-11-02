import './App.css';
import SiteAppBar from "./components/parts/site-app-bar/SiteAppBar";
import HomePage from "./components/pages/home/HomePage";
// import {connect} from "react-redux";

const App = props => {
  return (
    <div className="App">
      <SiteAppBar></SiteAppBar>
      <HomePage/>
    </div>
  );
}
export default App;
//
// const mapStateToProps = state => {
//   return { state };
// }
//
// export default connect(mapStateToProps)(App);