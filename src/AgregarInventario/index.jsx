import { Button, Modal } from "react-bootstrap";
import { useContext } from "react";

function AgregarInventario({ show, handleClose }) {

    return (    
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton onHide={handleClose}>
                        <Modal.Title>Nuevo Producto</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form id="formulario" className="col-md-6 mx-auto">
                            <div className="mb-3">
                                <label htmlFor="formulario-label">Producto</label>
                                <input id="producto-nombre" name="producto-nombre" type="text" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Precio-label">Precio</label>
                                <input id="precio-nombre" name="precio-nombre" type="text" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Imagen-label">Imagen</label>
                                {/* <input type="file" accept="image/*" onChange={handleImagen} /> */}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="descripcion-label">Descripcion</label>
                                <textarea name="descripción" id="descripcion"></textarea>
                            </div>

                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secundary" onClick={handleClose}>Cerrar</Button>
                        <Button variant="primary">Guardar</Button>
                    </Modal.Footer>

                </Modal>
    );
}

export { AgregarInventario };