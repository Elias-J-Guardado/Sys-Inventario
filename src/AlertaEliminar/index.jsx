import Swal from "sweetalert2";

const AlertaEliminar = (objeto) => {
    Swal.fire({
        title: "¿Estás seguro?",
        text: `¿Quieres eliminar "${objeto.nombre}"?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "Cancelar",
        reverseButtons: true,
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            //ingresar handler aqui

            Swal.fire(
                "El Item ha sido Eliminado",
                `Se ha eliminado el item "${objeto.nombre}"`,
                "success"
            );
        }
    });
};