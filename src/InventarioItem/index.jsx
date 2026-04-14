import { FaHeart, FaTrash, FaMarker } from "react-icons/fa";

function InventarioItem({ item }) {
  return (
    <>
      <div className="col-6 col-md-4">
        <div className="card shadow-sm d-flex align-items-center">
          {item.imagen_url && <img className="img-fluid" src={item.imagen_url} alt={item.nombre} />}
          <p>{item.nombre}</p>
          <p>Cantidad: {item.cantidad}</p>
          <div className="d-flex p-1 gap-2 mt-2">
            <button className='btn btn-danger'><FaTrash /></button>
            <button className="btn btn-primary"><FaHeart /></button>
            <button className="btn btn-warning"><FaMarker /></button>
          </div>
        </div>
      </div>
    </>
  );
}

export { InventarioItem };