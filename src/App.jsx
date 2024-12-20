import { Routes, Route } from "react-router";
import "./index.css";

function PageAcueil() {
  return <h1>page acceuil</h1>;
}
function PageAbout() {
  return (
    <main>
      <h1>page about</h1>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageAcueil />} />
      <Route path="/about" element={<PageAbout />} />
    </Routes>
  );
}

export default App;
