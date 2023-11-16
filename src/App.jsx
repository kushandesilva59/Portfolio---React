import Experties from "./components/Experties/Experties";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Works from "./components/works/Works";
import css from "./styles/app.module.scss"



const App = () => {
  //don't forget to add font link in index.html



  return  <div className={`bg-primary ${css.container}`}>
      <Header /> 
      <Hero />
      <Experties />
      <Works />
  </div>;
};

export default App;
