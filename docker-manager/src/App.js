import Containers from "./components/containers/containers";
import Logo from "./components/logo/logo";
import Scroll from "./components/Scroll/Scroll"
import { useEffect, useState } from 'react'

function App() {
  const [containers, setContainers] = useState([]);
  // const [search, setSearch] = useState('');
  const [ops, setOps] = useState(new Map());

  useEffect(() => {
    fetch('http://192.168.0.134:5555/containers/json?all=true', {
        method: 'get',
        headers: {'content-type': 'application/json'},
    })
    .then(resp => resp.json())
    .then(data => {
        setContainers([...data])
    })
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
    <div>
      <Logo></Logo>
      <Containers onCheck={onCheck} handleOpt={handleOpt} containers={containers}></Containers>

      
    </div>
  );
}

export default App;
