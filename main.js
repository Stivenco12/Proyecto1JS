//primera parte

const FormularioEstudiantes = document.querySelector("#FormularioEstudiantes")

FormularioEstudiantes.addEventListener("submit", function(event){

    event.preventDefault();
    const DatosEstudiantes = new FormData(FormularioEstudiantes);

    let NombreEstudiantes = DatosEstudiantes.get("nombre")
    let EdadEstudiantes = DatosEstudiantes.get("edad")
    let CedulaEstudiantes = DatosEstudiantes.get("cedula")

    let estudiantes = [
        {Nombre: NombreEstudiantes, Edad: EdadEstudiantes, Cedula: CedulaEstudiantes,}
    ]

    const estudiantesJson = JSON.stringify(estudiantes);
    localStorage.setItem(estudiantes.Cedula, estudiantesJson)

    console.log(JSON.parse(localStorage.getItem(estudiantes.Nombre)))
    console.log(estudiantes)
})

// segunda parte

    