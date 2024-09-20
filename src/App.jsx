import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import PageNotFound from "./component/pageNotFound/PageNotFound";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      
    </Router>
  );
}

export default App;
