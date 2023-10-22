
function todosLosProyectos(req, res) {
    return res.status(200).json({
        message: 'todosLosProyectos'
    });
}


function proyectoPorId(req, res) {
    console.log(`proyectoPorId ${id}`);

}

function proyectoPorSeccion(req, res) {
    console.log(`proyectoPorSeccion ${seccion}`);
}


function crearProyecto(req, res) {
    console.log('crearProyecto');
}

function eliminarProyecto(req, res) {
    console.log('eliminarProyecto');
}

function editarProyecto(req, res) {
    console.log('editarProyecto');
}

export default {
    todosLosProyectos,
    proyectoPorId,
    proyectoPorSeccion,
    crearProyecto,
    eliminarProyecto,
    editarProyecto
}