import './App.css';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

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
