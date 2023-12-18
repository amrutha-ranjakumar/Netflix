import logo from './logo.svg';
import './App.css';
import Row from './components/Row';
import { requests } from './Request';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
       <Row  title="NetFlixOriginal" fetchUrl={requests.fetchNetflixOriginals}/>  
       <Row  title="Trending" fetchUrl={requests.fetchTrending}/>
       <Row  title="Top Rated" fetchUrl={requests.fetchTopRated}/> 
       <Row  title="Action" fetchUrl={requests. fetchActionMovies}/> 
       <Row  title="Comedy" fetchUrl={requests.fetchComedyMovies}/> 
       <Row  title="Horror" fetchUrl={requests.fetchHorrorMovies}/> 
       <Row  title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
       <Row  title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>  
    </div>
  );
}

export default App;
