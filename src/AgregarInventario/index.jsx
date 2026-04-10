import { useState } from "react";
import { Button, Modal } from "react-bootstrap";


function AgregarInventario({show, handleClose, onGuardar}) {

    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleEnviar = () => {
        onGuardar({nombre, cantidad, descripcion})
    }


    return (    
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton onHide={handleClose}>
                        <Modal.Title>Nuevo Producto</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form id="formulario" className="col-md-6 mx-auto">
                            <div className="mb-3">
                                <label htmlFor="formulario-label">Producto</label>
                                <input id="producto-nombre" name="producto-nombre" type="text" onChange={(e) => setNombre(e.target.value)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cantidad-label">Cantidad</label>
                                <input id="cantidad-nombre" name="cantidad-nombre" type="text" onChange={(e) => setCantidad(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Imagen-label">Imagen</label>
                                <input type="file" accept="image/*" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion-label">Descripcion</label>
                                <textarea name="descripción" id="descripcion" onChange={(e) => setDescripcion(e.target.value)}></textarea>
                            </div>

                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secundary" onClick={handleClose}>Cerrar</Button>
                        <Button variant="primary" onClick={handleEnviar}>Guardar</Button>
                    </Modal.Footer>

                </Modal>
    );
}

export { AgregarInventario };