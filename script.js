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

console.log( strObject);
console.log(typeof parsedJSON)