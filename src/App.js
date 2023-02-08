import Feed from './components/Feed';
import Navbar from './components/Navbar';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div >
      <Navbar/>
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
