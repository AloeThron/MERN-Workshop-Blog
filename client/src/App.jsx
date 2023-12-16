import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <>
      <div className="container p-5">
        <Nav />
        <h1 className="mt-5">MERN Stack | Workshop</h1>
        <a className="mt-5 btn btn-primary" href="/create">
          Write Article
        </a>
      </div>
    </>
  );
}

export default App;
