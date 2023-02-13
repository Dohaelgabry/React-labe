
import "./App.css"
import Name from "./components/Name"
import Main from './components/componentsRight/main'
import Mainleft from './components/componentleft/mainleft'

function App() {
  return (
    <div className='backcolorylo'>
      <div className="backcolorwight">
        <div className="backcolorgreen">
          <div className='backcolorborder'>

            {/* الاسم */}
            <Name />

            <div className="row">

              {/* الجزء الايسر */}
              <Main/>

              {/* الجزء الايمن */}
              <Mainleft/>

           </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
// style={"margin: 0 auto;"}