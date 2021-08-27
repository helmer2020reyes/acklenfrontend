
import './App.css';
import Header from './_layout/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import MainTable from './_layout/TableBook';
import FormAdd from './_layout/FormAdd';
import Formedit from './_layout/Formedit';

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
        <Route exact path='/edit/:id'>
          <h1>Edit Book</h1>
          <Formedit></Formedit>
        </Route>
        <Route>
        <Route exact path='/create'>
        <FormAdd></FormAdd>
        </Route>
        </Route>

        </BrowserRouter>
      </main>
    </div>
    
  );
}

export default App;
