import { InventarioItem } from "../InventarioItem";

function InventarioLista({items}) {
    return (
        <>
            <div className="container pb-8">
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