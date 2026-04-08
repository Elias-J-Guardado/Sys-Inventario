import { useState } from 'react'
// import frankenstain from '/img/frankenstein.jpg'
// import './App.css'

import { InventarioHeader } from './InventarioHeader';
import { ItemSearch } from './ItemSearch';
import { InventarioLista } from './InventarioLista';
import { InventarioItem } from './InventarioItem';
import { CreateItemBtn } from './CreateItemBtn';
import { InventarioFooter } from './InventarioFooter';
import { AgregarInventario } from './AgregarInventario/';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      <InventarioHeader />
      <ItemSearch />

      <InventarioLista>
        <InventarioItem />
      </InventarioLista>

      <CreateItemBtn onClick={handleOpenModal} />
      {showModal && <AgregarInventario show={showModal} handleClose={handleCloseModal} />}

      <InventarioFooter />

    </>
  );
}


export default App
