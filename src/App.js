import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Engineering from "./components/Engineering";
import LanguageContextProvider from "./context/LanguageContext";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <LanguageContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/engineering" component={Engineering} />
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageContextProvider>
  );
}

export default App;
