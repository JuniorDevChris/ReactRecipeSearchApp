import Home from "./pages/Home";
import Category from "./components/Category";
import {Browser}

function App() {
  return (
    <BrowserRouter>
    <>
      <Category />
      <Home />
    </>
    </BrowserRouter>
  );
}

export default App;
