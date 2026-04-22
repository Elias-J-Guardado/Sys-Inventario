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
  const [busqueda, setBusqueda] = useState("");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false)

  // localStorage
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("inventarioLS")) || []
  );

  const handleGuardar = (nuevoItem) => {
    const listaActualizada = [...items, nuevoItem];
    localStorage.setItem("inventarioLS", JSON.stringify(listaActualizada));
    setItems(listaActualizada);
  }
  
  const filtrarItem = items.filter(item =>
    item.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase())
  ); 

  return (
    <>
      <InventarioHeader />
      <ItemSearch busqueda={busqueda} onSearch={setBusqueda} />

      <InventarioLista items={filtrarItem}>
        <InventarioItem />
      </InventarioLista >

      <CreateItemBtn onClick={handleOpenModal} />
      {showModal && <AgregarInventario show={showModal} onGuardar={handleGuardar} handleClose={handleCloseModal} />}

      <InventarioFooter />

    </>
  );
}


export default App
