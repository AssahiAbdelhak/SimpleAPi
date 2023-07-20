import { addToFile, deleteFromFile, getAllPersons, updateFile } from "../storage/crud_functions.js"

export const readPersons = async (req,res) => {
    const allPersons = await getAllPersons();
    res.header("Content-Type","application/json")
    res.statusCode = 200;
    res.send(allPersons);
}

export const addPerson = async(req,res) => {
    let newPerson = await addToFile(req.body)
    res.header("Content-Type","application/json")
    res.statusCode = 200;
    res.send(JSON.stringify(newPerson))

}

export const removePerson = async (req,res) => {
    await deleteFromFile(req.query.id);
    res.header("Content-Type","text/plain")
    res.statusCode = 200;
    res.send(`The person with id ${req.query.id} has been deleted`)
}

export const updatePerson = async (req,res) => {
    const newPerson = await updateFile(req.query.id,req.body);
    res.header("Content-Type","application/json")
    res.statusCode = 200;
    res.send(JSON.stringify(newPerson))
}