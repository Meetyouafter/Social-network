import './App.css';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
