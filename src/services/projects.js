import e from "express";
import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient('mongodb://127.0.0.1:27017'); // conectionstring

const db = client.db("AH20231CP1");
const ProjectsCollection = db.collection("Projects");



/**
 * Devuelve un array con todos los proyectos
 * @returns {Promise<Array>}
 */
async function todosLosProyectos() {
  await client.connect()
  return ProjectsCollection.find().toArray()
}



/**
 * Devuelve un proyecto por id
 */
async function getProjectPorId(id) {
  await client.connect()
  return ProjectsCollection.findOne({_id: new ObjectId(id)})
}




