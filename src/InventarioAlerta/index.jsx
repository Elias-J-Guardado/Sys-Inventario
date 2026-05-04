import Swal from "sweetalert2";
import { useState } from "react";

Swal.fire({
    title: "<strong>Error</strong>",
    icon: "info",
    html: `
        El objeto que intenta añadir ya se encuentra en favoritos...
    `,
    showCloseButton: true,
    closeButtonText: "Cerrar"
})
