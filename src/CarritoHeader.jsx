function CarritoHeader() {
    return (
        <header style={{
            backgroundColor: '#4388de',
        }}>
            <nav className='navbar navbar-expand-lg navbar-light shadow-sm'>
                <a href="#" className='navbar-brand text-white mx-3'>SysCarrito</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
                    data-bs-target='#navbarMain'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse justify-content-center' id='navbarMain'>
                    <ul className='navbar-nav mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <a href="#" className='nav-link active text-white'>Inicio</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link active text-white'>Carrito</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#" className='nav-link active text-white'>Guardados</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export {CarritoHeader}