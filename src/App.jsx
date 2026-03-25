import { useState } from 'react'
// import frankenstain from '/img/frankenstein.jpg'
import './App.css'

import { CarritoHeader } from './CarritoHeader';
import {CarritoSearch} from './CarritoSearch';
import { CarritoLista } from './CarritoLista';
import { CarritoIitem } from './CarritoItem';
import { CreateCarritoBtn } from './CreateCarritoBtn';

function App() {  

  return (
    <>
      <CarritoHeader />
      <CarritoSearch />

      {/* <CarritoLista> */}
          <CarritoIitem />
      {/* </CarritoLista> */}

      <CreateCarritoBtn/>

    </>
  )
}


export default App
