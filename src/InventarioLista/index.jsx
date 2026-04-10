import { InventarioItem } from "../InventarioItem";

function InventarioLista({items}) {
    return (
        <>
            <div className="container" style={{
                maxHeight: '80vh',
                overflowY: 'auto',
                paddingBottom: '100px'
            }}>
                {items.map((item, index) => (
                    <InventarioItem key={index} item={item} />
                ))}
            </div>
        </>
    )
}

export { InventarioLista };