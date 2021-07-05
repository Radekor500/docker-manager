import Containers from "./components/containers/containers";
import Logo from "./components/logo/logo";
import { useEffect, useState } from 'react'

function App() {
  const [containers, setContainers] = useState([]);
  const [search, setSearch] = useState('');

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


  return (
    <div>
      <Logo></Logo>
      <Containers containers={containers}></Containers>
    </div>
  );
}

export default App;
