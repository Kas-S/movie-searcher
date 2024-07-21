import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Layout, Index} from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Index/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
