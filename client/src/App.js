import Header from "./components/header/Header";
import Head from "./components/head/Head";
import Supervisor from "./components/supervisor/Supervisor";
import Advantages from "./components/advantages/Advantages";
import Services from "./components/services/Services";
import Companies from "./components/companies/Companies";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <main>
          <Head />
          <Supervisor />
          <Advantages />
          <Services />
          <Companies />
        </main>
      </div>
    </div>
  );
}

export default App;
