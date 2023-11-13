import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import css from "./styles/app.module.scss"


const App = () => {
  //don't forget to add font link in index.html



  return  <div className={`bg-primary ${css.container}`}>
      <Header /> 
      <Hero />
  </div>;
};

export default App;
