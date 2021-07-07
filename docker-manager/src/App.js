import Containers from "./components/containers/containers";
import Logo from "./components/logo/logo";
import Scroll from "./components/Scroll/Scroll"
import { useEffect, useState } from 'react'
import Menu from "./components/Menu/menu"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Images from "./components/containers/images";
import Options from "./components/Options/options";



function App() {
  const [containers, setContainers] = useState([]);
  const [call, setCall] = useState('');
  const [images, setImages] = useState([]);
  
  // const [search, setSearch] = useState('');
  const [ops, setOps] = useState(new Map());

  useEffect(() => {
    if (call) {
        console.log(call)
        fetch(`http://192.168.0.134:5555/${call}/json?all=true`, {
            method: 'get',
            headers: {'content-type': 'application/json'},
        })
        .then(resp => resp.json())
        .then(data => {
            if (call === 'containers') {
                setContainers([...data])
            } else {
                setImages([...data]);
            }
            
        })
    }
   
    //console.log(containers)

})

let handleOpt = (event) => {
  let msg = document.querySelector('.alert-wrap');
  for (const container of ops) {
      if (container[1]) {
          let name = container[0].slice(1)
          console.log(name);
          fetch(`http://192.168.0.134:5555/containers/${name}/${event.target.value}`, {
              method: 'post',
              headers: {'content-type': 'application/json'}
          })
          .then(resp => {
              let alert = document.createElement('div');
              if (resp.status === 204) {
                  if (event.target.value === 'stop') {
                      alert.style.backgroundColor = '#f44336'
                  } else {
                      alert.style.backgroundColor = '#04AA6D'
                  }
                  alert.innerHTML = name;
              } else {
                  alert.style.backgroundColor = '#c2790b'
                  alert.innerHTML = 'Connection error'
              }
              alert.classList.add('alert')
              msg.appendChild(alert)
          
              setTimeout(() => {
                  alert.remove();
              },10000)

          })
      }
      
      
  }



  let checkboxes = document.querySelectorAll('.check');
  checkboxes.forEach(elem => elem.checked = false)
}

let onCheck = (event) => {
  setOps((prevOps) => 
      prevOps.set(event.target.value, event.target.checked)
  )
}


  return (
    <Router>
        <div>
            <Logo></Logo>
            <Switch>
                <Route exact path='/'>
                    <Menu call={call} setCall={setCall}></Menu>
                </Route>
                <Route exact path='/containers'>
                    <Containers onCheck={onCheck} handleOpt={handleOpt} containers={containers}></Containers>
                </Route>
                <Route exact path='/images'>
                    <Options onCheck={onCheck} handleOpt={handleOpt}></Options>
                    <Images onCheck={onCheck} handleOpt={handleOpt} images={images}></Images>
                </Route>
            </Switch>
        </div>
      </Router>
      
  );
}

export default App;
