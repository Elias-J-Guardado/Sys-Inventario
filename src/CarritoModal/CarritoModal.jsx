import { Button, Modal } from "react-bootstrap/Modal";

function CarritoModal() {
    return (
        <>
            <div className="modal-show" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Tittle>Carrito de compras</Modal.Tittle>
                    </Modal.Header>

                    <Modal.Body>
                        <div id="carrito" className="container">
                            <table id="lista-carrito">
                                <thead>
                                    <tr>
                                        <th>Carrito</th>
                                    </tr>
                                </thead>

                            </table>
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secundary">Cerrar</Button>
                        <Button vatiant="primary">Guardar</Button>
                    </Modal.Footer>

                </Modal.Dialog>

            </div>
        </>
    )
}

export { CarritoModal };