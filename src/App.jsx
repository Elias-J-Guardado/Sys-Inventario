import { useState } from 'react'
// import frankenstain from '/img/frankenstein.jpg'
import './App.css'

function App() {  

  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm'>
          <a href="#" className='navbar-brand'>SysCarrito</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse'
          data-bs-target='#navbarMain'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarMain'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                    <a href="#" className='nav-link active'>Inicio</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link active'>Carrito</a>
                </li>
                <li className='nav-item'>
                    <a href="#" className='nav-link active'>Guardados</a>
                </li>
              </ul>
          </div>
        </nav>
      </header>
      <main>
          <section>
            <div className='container text-center'>
              <div className='row g-4 mt-4 justify-content-center'>
                {/* card */}
                <div className='col-6 col-md-4 col-lg-2'>
                  <div className='card h-100 w-100 shadow-sm'>
                    <div className='card-body d-flex flex-column align-items-center justify-content-center'>
                      <h3>Frankenstein</h3>
                      <img className='img-fluid' src="/img/frankenstain.jpg" alt="Libro 1"/>
                      <button className='btn btn-info mt-2'>Ver mas</button>
                    </div>
                  </div>
                </div>
                {/* card */}
                <div className='col-6 col-md-4 col-lg-2'>
                  <div className='card h-100 w-100 shadow-sm'>
                    <div className='card-body d-flex flex-column align-items-center justify-content-center'>
                      <h3>Frankenstein</h3>
                      <img className='img-fluid' src="/img/frankenstain.jpg" alt="Libro 1"/>
                      <button className='btn btn-info mt-2'>Ver mas</button>
                    </div>
                  </div>
                </div>
                {/* card */}
                <div className='col-6 col-md-4 col-lg-2'>
                  <div className='card h-100 w-100 shadow-sm'>
                    <div className='card-body d-flex flex-column align-items-center justify-content-center'>
                      <h3>Frankenstein</h3>
                      <img className='img-fluid' src="/img/frankenstain.jpg" alt="Libro 1"/>
                      <button className='btn btn-info mt-2'>Ver mas</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
      </main>
    </>
  )
}

export default App
