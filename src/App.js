import './App.css';
import { Un } from './components/Un';
import { Deux } from './components/Deux';
import { Index } from "./components/Index";
import { useState } from 'react';
import {Helmet} from "react-helmet";
import { Contact } from './components/Contact';





function App() {
  const [page,setPage] = useState("index")
  const router = {
    "index":{
      "component":<Index setPage={setPage}/>
    },
    "un":{
      "component":<Un setPage={setPage}/>
    },
    "deux":{
      "component": <Deux setPage={setPage}/>
    },
    "contact":{
      "component": <Contact/>
    }
  }
  console.log(router[page]);
  return (

    <>
      <Helmet>
        <title>My Title</title>
      </Helmet>
    
      {router[page].component}
    </>
  );
}

export default App;
