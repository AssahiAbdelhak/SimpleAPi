import Fastify from 'fastify'
import { addPerson, readPersons, removePerson, updatePerson } from './functions/servData.js';


const app = Fastify();

app.get('/persons',async (req,res) => {
    await readPersons(req,res);
})

app.post('/persons',async (req,res) => {
    await addPerson(req,res);
})

app.delete('/persons',async (req,res) => {
    await removePerson(req,res);
})

app.put('/persons',async (req,res) => {
    await updatePerson(req,res);
})

app.listen({port:3000})
