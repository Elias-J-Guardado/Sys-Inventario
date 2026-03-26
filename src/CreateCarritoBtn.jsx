function CreateCarritoBtn() {
  return (
    <>
        <div>
            <button className="btn btn-primary rounded-circle fs-4 text-center" type="button" style={{
              boxShadow: "0px 5px 25px rgb(97, 218, 250, 0.5)",
              border: 'none',
              cursor: 'pointer',
              position: 'fixed',
              right: '15px',
              width: '50px',
              height: '50px',
              marginTop: '50px'
            }}>+</button>
        </div>
    </>
  );
}

export {CreateCarritoBtn}