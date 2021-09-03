import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BookList from './components/BookList'
import fantasyBooks from './fantasyBooks.json'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Registration from './components/Registration'
import AppNavigation from './components/AppNavigation'

function App() {
  return (
    <Router>
    <div className="App">
    <AppNavigation />
      <header className="App-header">
    <Route path="/registration" exact render={()=><Registration/>}/>
    <Route path="/" exact render={()=><BookList books={fantasyBooks}/>}/>        
    

      </header>
    </div>
    </Router>
  )
}

export default App
