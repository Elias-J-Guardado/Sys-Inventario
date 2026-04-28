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
import { supabase } from './supabaseClient';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false)
    setProductoEditar(null);
  }

  // localStorage
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("inventarioLS")) || []
  );

  //Editar
  const [productoEditar, setProductoEditar] = useState(null);

  const handleGuardar = (nuevoItem) => {
    const listaActualizada = [...items, nuevoItem];
    localStorage.setItem("inventarioLS", JSON.stringify(listaActualizada));
    setItems(listaActualizada);
  }

  const handleEliminar = async(item) => {
   
    const nombreArchivo = decodeURIComponent(item.imagen_url.split("/").pop());
    console.log("nombreArchivo:", nombreArchivo);

    const {data, error} = await supabase.storage
      .from("imagen-inventario")
      .remove([nombreArchivo]);

    console.log("data: ", data)
    console.log("error: ", error)

    const listaActualizada = items.filter(i => i !== item);
    localStorage.setItem("inventarioLS", JSON.stringify(listaActualizada));
    setItems(listaActualizada);
  }
  
  const filtrarItem = items.filter(item =>
    item.nombre.toLowerCase().includes(busqueda.toLocaleLowerCase())
  ); 

    const handleEditar = (item) => {
    setProductoEditar(item);
    setShowModal(true)
  }

  const handleGuardarEdicion = itemEditado => {
    const listaActualizada = items.map(i => i === productoEditar ? itemEditado : i);
    localStorage.setItem("inventarioLS", JSON.stringify(listaActualizada));
    setItems(listaActualizada);
    setProductoEditar(null);
  }

  return (
    <>
      <InventarioHeader />
      <ItemSearch busqueda={busqueda} onSearch={setBusqueda} />

      <InventarioLista items={filtrarItem} onEliminar={handleEliminar} onEditar={handleEditar}>
        <InventarioItem />
      </InventarioLista >

      <CreateItemBtn onClick={handleOpenModal} />
      {showModal && <AgregarInventario 
      show={showModal} 
      handleClose={handleCloseModal}
      productoEditar={productoEditar}
      onGuardar={productoEditar ? handleGuardarEdicion : handleGuardar} />}

      <InventarioFooter />

    </>
  );
}


export default App
