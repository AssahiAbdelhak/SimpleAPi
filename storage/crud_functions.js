import { readFile,writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { nanoid } from "nanoid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileName = path.join(__dirname,'data.json')

export const getAllPersons = async() => {
    return await readFile(fileName,'utf8');
}

export const addToFile = async(person) => {
    let allPersons = JSON.parse(await getAllPersons());
    let newPerson = {
        firstName:"undefined",
        lastName:"undefined",
        age:0,
        ...person,
        id:nanoid()
    }
    allPersons.push(newPerson);
    await writeFile(fileName,JSON.stringify(allPersons))
    return newPerson;
}


export const deleteFromFile = async(id) => {
    let  allPersons = JSON.parse(await getAllPersons());
    let newPersons = allPersons.filter((person) => person.id !== id);
    await writeFile(fileName,JSON.stringify(newPersons))
}

export const updateFile = async (id,person) => {
    console.log(person)
    let newPerson;
    let  allPersons = JSON.parse(await getAllPersons());
    allPersons = allPersons.map((prs) => {
        if(prs.id===id){
            newPerson = {
                ...prs,
                ...person,
                id
            }
            return newPerson;
        }else{
            return prs;
        }
    })
    await writeFile(fileName,JSON.stringify(allPersons))
    return newPerson;
}