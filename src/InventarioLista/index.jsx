function InventarioLista({children}) {
    return (
        <>
            <div className="container" style={{
                maxHeight: '80vh',
                overflowY: 'auto',
                paddingBottom: '100px'
            }}>
                {children}
            </div>
        </>
    )
}

export { InventarioLista };