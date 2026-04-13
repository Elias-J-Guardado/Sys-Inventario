import { InventarioItem } from "../InventarioItem";

function InventarioLista({items}) {
    return (
        <>
            <div className="container">
               <div className="row g-4 mt-4 justify-content-center">
                 {items.map((item, index) => (
                    <InventarioItem key={index} item={item} />
                ))}
               </div>
            </div>
        </>
    )
}

export { InventarioLista };