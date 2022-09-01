
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar"

import "./styles.css"

const App = () => {
  return (
    <body>
      <header>
        <NavBar />
      </header>
    <main>
      <ItemListContainer/>
    </main>

    </body>


  )
}

export default App;
