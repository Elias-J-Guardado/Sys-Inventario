import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

function ItemsFavoritos({ showFavoritos, handleCloseFavoritos }) {
    return(
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
                            <tbody>

                            </tbody>
                        </thead>
                    </table>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secundary">Cerrar</Button>
                    <button variant="primary">Guardar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export {ItemsFavoritos};
