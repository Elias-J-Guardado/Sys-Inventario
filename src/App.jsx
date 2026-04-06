import { useState } from 'react'
// import frankenstain from '/img/frankenstein.jpg'
// import './App.css'

import { InventarioHeader } from './InventarioHeader';
import {ItemSearch} from './ItemSearch';
import { InventarioLista } from './InventarioLista';
import { InventarioItem } from './InventarioItem';
import { CreateItemBtn } from './CreateItemBtn';
import {InventarioFooter} from './InventarioFooter';

function App() {  

  return (
    <>
      <InventarioHeader />
      <ItemSearch />

      <InventarioLista>
          <InventarioItem />
      </InventarioLista>

      <CreateItemBtn />
      
      <InventarioFooter />

    </>
  )
}


export default App
