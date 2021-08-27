
import './App.css';
import Header from './_layout/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import MainTable from './_layout/TableBook';

function App() {
  return (
    <div className="App">
      <header>
      <Header></Header>
      
      </header>
      <main>
        <BrowserRouter>
        <Route exact path='/'>
        <MainTable></MainTable>
        </Route>

        </BrowserRouter>
      </main>
    </div>
    
  );
}

export default App;
