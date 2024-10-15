
import './App.css';
import NavBar from './components/Nav/NavBar';
import BannerC from './components/bannerComponent/BannerC';
import RowPost from './components/rowPosts/RowPost';
import {originals,action, ComedyMovies, horror, romance, documentaries} from './Urls'


function App() {
  return (
    <div className="App">
    <NavBar/>
 <BannerC/>
<RowPost  url={originals} title='Netflix Originals' />
<RowPost  url={action} title='Action' isSmall/>
<RowPost  url={ComedyMovies} title='comedy' isSmall/>
<RowPost  url={horror} title='Horror' isSmall/> 
<RowPost  url={romance} title='Romance' isSmall/>
<RowPost  url={documentaries} title='Documentries' isSmall/>
    </div>
  );
}

export default App;
