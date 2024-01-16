import './App.css';
import Header from './component/Header';
import TestChart from './component/TestChart';
import SideBar from './component/SideBar';

function App() {
  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <main id="main" class="main">

      <TestChart></TestChart>
      </main>
    </>
  );
}

export default App;
