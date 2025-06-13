import Fastify from 'fastify'
import { addPerson, readPersons, removePerson, updatePerson } from './functions/servData.js';


const app = Fastify();

app.get('/persons',async (req,res) => {
    console.log('Received GET request for persons');
    await readPersons(req,res);
})

app.post('/persons',async (req,res) => {
    console.log('Received POST request to add a person');
    await addPerson(req,res);
})

app.delete('/persons',async (req,res) => {
    console.log('Received DELETE request to remove a person');
    await removePerson(req,res);
})

app.put('/persons',async (req,res) => {
    console.log('Received PUT request to update a person');
    await updatePerson(req,res);
})

app.listen({port:3000}, () => {
    console.log('Server is running on port 3000');
})
