import { Button, Modal } from "react-bootstrap";

function HistorialCarrito() {
    return(
        <>
            <div className="modal-show" style={{display: "block", position: 'initial'}}>
                <Modal.Header>
                    <Modal.Title>Historial de ventas</Modal.Title>
                </Modal.Header>

                <Modal.body>

                </Modal.body>

                <Modal.Footer>
                    <Button variant="secundary">Cerrar</Button>
                    <button variant="primary">Imprimir</button>
                </Modal.Footer>
            </div>
        </>
    )
}