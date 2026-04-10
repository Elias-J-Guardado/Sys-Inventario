import { FaHeart, FaTrash } from "react-icons/fa";

function InventarioItem() {
  return (
    <>
      <main>
          <section>
            <div className='container text-center'>
              <div className='row g-4 mt-4 justify-content-center'>
                {/* card */}
                <div className='col-6 col-md-4 '>
                  <div className='card h-80 w-50 shadow-sm'>
                    <div className='card-body d-flex flex-column align-items-center justify-content-center'>
                      <img className='img-fluid' src="/img/frankenstain.jpg" alt="Libro 1"/>
                      <p>Frankenstein</p>
                      <p>Cantidad: 4</p>
                      <div className="d-flex p-1 gap-2 mt-2">
                        <button className='btn btn-danger'><FaTrash/></button>
                        <button className="btn btn-primary"><FaHeart/></button>
                      </div>
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