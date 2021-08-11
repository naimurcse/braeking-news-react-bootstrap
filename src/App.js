import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import News from './components/News/News';
import Header from './components/Header/Header';
import TopHeadline from './components/TopHeadline/TopHeadline';




function App() {
  return (
    <div>
      <Header></Header>
      <TopHeadline></TopHeadline>
      <h1 className="text-primary">Breaking News</h1>
      <Button variant="primary">Primary</Button>
    </div>
  );
}

export default App;
