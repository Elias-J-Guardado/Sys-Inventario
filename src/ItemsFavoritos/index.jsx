import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function ItemsFavoritos({ showFavoritos, handleCloseFavoritos }) {
    return (
        <>
            <Modal show={showFavoritos} onHide={handleCloseFavoritos} centered>
                <Modal.Header closeButton onHide={handleCloseFavoritos}>
                    <Modal.Title>Productos Guardados</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <table>
                        <thead>
                            <tr>
                                <th>Items</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseFavoritos}>Cerrar</Button>
                    <Button variant="primary">Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { ItemsFavoritos };
