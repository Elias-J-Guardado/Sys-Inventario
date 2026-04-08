import { Button, Modal } from "react-bootstrap";

function ItemsFavoritos() {
    return(
        <>
            <div className="modal-show" style={{display: "block", position: 'initial'}}>
                <Modal.Header>
                    <Modal.Title>Productos Guardados</Modal.Title>
                </Modal.Header>

                <Modal.body>
                    <table>
                        <thead>
                            <tr>
                                <th>Items</th>
                            </tr>
                            <tbody>

                            </tbody>
                        </thead>
                    </table>
                </Modal.body>

                <Modal.Footer>
                    <Button variant="secundary">Cerrar</Button>
                    <button variant="primary">Guardar</button>
                </Modal.Footer>
            </div>
        </>
    )
}

export {ItemsFavoritos};