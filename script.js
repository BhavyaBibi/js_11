const strObject =
{
    id :0,
    name : "debug",
    company :"google"
}
const strJSON =
`{ "id" :0,
"name" : "debug",
"company" :"google"
}`
const parsedJSON =JSON.parse(strJSON)
const stringifyJSON =JSON.stringify(strObject)

console.log( strObject);
console.log( stringifyJSON)