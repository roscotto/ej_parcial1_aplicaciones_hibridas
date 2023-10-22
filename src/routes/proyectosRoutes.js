import express from 'express';
import proyectosControllers from '../controllers/proyectosControllers.js';


const route = express.Router();


route.get('/proyectos', proyectosControllers.todosLosProyectos);

route.get('/proyectos/:id', proyectosControllers.proyectoPorId);

route.get('/proyectos/seccion/:seccion', proyectosControllers.proyectoPorSeccion);

route.post('/proyectos/', proyectosControllers.crearProyecto);

route.delete('/proyectos/:id', proyectosControllers.eliminarProyecto);

route.put('/proyectos/:id', proyectosControllers.editarProyecto);

export default route
