function InventarioItem() {
  return (
    <>
      <main>
          <section>
            <div className='container text-center'>
              <div className='row g-4 mt-4 justify-content-center'>
                {/* card */}
                <div className='col-6 col-md-4 '>
                  <div className='card h-100 w-100 shadow-sm'>
                    <div className='card-body d-flex flex-column align-items-center justify-content-center'>
                      <p>Frankenstein</p>
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
  );
}

export {InventarioItem};