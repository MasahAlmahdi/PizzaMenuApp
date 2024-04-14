import logo from './logo.svg';
import './App.css';
import Pizza from './components/Pizza';
import Header from './components/Header'
import Footer from './components/Footer'
import Menu from './components/Menu'
import './index.css'
function App() {
  return (
    <div className='container'>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}

export default App;
