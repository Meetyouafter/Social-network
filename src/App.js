import './App.css';
import Body from './Components/Content/Home';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dialogs from './Components/Content/Dialogs/Dialogs';
import Setting from './Components/Content/Setting/Setting';
import News from './Components/Content/News/News';
import Home from './Components/Content/Home';
import Music from './Components/Content/Music/Music';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Sidebar />
        <Body />
        <div className='content_container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
