import './App.css'
import Content from './component/content/Content';
import Genres from './component/genres/Genres';
import Header from './component/header/Header';
import Sidenav from './component/sidenav/Sidenav';

function App() {
  return (
    <>
      {/* header */}
      <Header />

      {/* sidenav */}
      <Sidenav />

      {/* genres top nav */}
      <Genres />

      {/*content*/}
      <Content />

    </>
  );
}

export default App;
