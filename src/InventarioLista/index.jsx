import { InventarioItem } from "../InventarioItem";

const listaVacia = "No hay ningun item en la lista, por favor agrega uno";



function InventarioLista({ items, onEliminar, onEditar, onFavorito, favoritos }) {
    if (items.length === 0) {
        return <p className="h3 text-info text-center pt-5">{listaVacia}</p>
    }
    return (
        <>
            <div className="container pb-8">
                <div className="row g-4 mt-4 justify-content-center">
                    {items.map((item, index) => (
                        <InventarioItem key={index} item={item} onEliminar={onEliminar} onEditar={onEditar} favoritos={favoritos} onFavorito={onFavorito} />
                    ))}
                </div>
            </div>
        </>
    )
}

export { InventarioLista };