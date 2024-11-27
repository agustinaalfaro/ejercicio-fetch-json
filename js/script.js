const DATA_URL = "json/data.json"; // URL del archivo JSON
const container = document.getElementById("container"); // Contenedor donde se mostrarán los datos

// Función para mostrar datos de los estudiantes
function showData(studentsArray) {
    console.log("Estudiantes recibidos:", studentsArray); // Depuración: verificar si llegan los datos

    for (const student of studentsArray) {
        // Mostrar el nombre, apellido y edad en el DOM
        container.innerHTML += `<p>${student.name} ${student.lastname}, Edad: ${student.age}</p>`;
    }
}

// Fetch al archivo JSON
fetch(DATA_URL)
    .then(response => {
        console.log("Respuesta del fetch:", response); // Depuración: verificar la respuesta del fetch
        if (!response.ok) {
            throw new Error(`Error al cargar los datos: ${response.statusText}`);
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        console.log("Datos obtenidos del JSON:", data); // Depuración: verificar los datos completos del JSON
        showData(data.students); // Pasar solo el arreglo `students` a la función
    })
    .catch(error => {
        console.error("Hubo un problema con el fetch:", error); // Mostrar cualquier error en consola
        container.innerHTML = `<p>Error al cargar los datos.</p>`; // Mensaje de error en la página
    });
