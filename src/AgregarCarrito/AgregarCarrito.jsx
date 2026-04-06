import { Button, Modal } from "react-bootstrap/Modal";

function AgregarCarrito() {
    
    return (
        <div className="modal-show" style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Tittle>Nuevo Producto</Modal.Tittle>
                </Modal.Header>

                <Modal.Body>
                    <form id="formulario" className="col-md-6 mx-auto">
                        <div>
                            <label htmlFor="formulario-label">Producto</label>
                            <input id="producto-nombre" name="producto-nombre" type="text" />
                        </div>
                        <div>
                            <label htmlFor="Precio-label">Precio</label>
                            <input id="precio-nombre" name="precio-nombre" type="text" />
                        </div>
                        <div>
                            <label htmlFor="Imagen-label">Imagen</label>
                            <input type="file" accept="image/*" onChange={handleImagen}/>
                        </div>
                        <div>
                            <label htmlFor="descripcion-label">Descripcion</label>
                            <textarea name="descripción" id="descripcion"></textarea>
                        </div>
                    
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secundary">Cerrar</Button>
                    <Button vatiant="primary">Guardar</Button>
                </Modal.Footer>

            </Modal.Dialog>

        </div>
    );
}

export { AgregarCarrito };