import './App.module.css'
import s from './App.module.css'
import {Model} from "./components/Model";
import {Params} from "./components/Params";
import './index.css'
function App() {
  return (
      <div className={s.app}>
          <Params/>
          <Model/>
      </div>
  )
}

export default App
