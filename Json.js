let jsonString = `{
    "name": "Swathy",
    "age": 24,
    "city": "New York",
    "skills": ["HTML", "CSS", "PhotoShop", "Figma", "Canva", "Basic JS"],
    "isEmployed": true,
    "address": {
        "street": "123 main st",
        "zipcode": 632007
    }
}`;
let jSonObj = JSON.parse(jsonString);
console.log("Raw Json String", jsonString);
console.log("parsed Json Obj", jSonObj);
console.log("Skills", jSonObj.skills);

// Explanation

/*"name": "Swathy" → string

"age": 24 → number

"city": "New York" → string

"skills": [...] → array of strings

"isEmployed": true → boolean

"address": {...} → nested object

JSON.parse() takes a JSON string and converts it into a JavaScript object.

Now jsonObj is a normal object you can work with (not just a string).

jsonString = raw text data (JSON format).

JSON.parse(jsonString) = converts that text into a usable JavaScript object.

Then you can access data with dot notation (obj.key) or nested access (obj.address.zipcode).
*/
let newJSONString = JSON.stringify(jSonObj)
console.log("Stringify Json", newJSONString)

let prettyJson = JSON.stringify(jSonObj, null, 4);  /*--->preety code syntax = 4*/
console.log("pretty JSon", prettyJson);

let person = {
    name: "yogha"
};
person.self = person;
try {
    JSON.stringify(person);
}catch(error) {
    console.error("Error Stringfying Circular JSON", error.message);
}

let filteredJson = JSON.stringify(jSonObj, ["name", "age"]);
console.log("Filtered Json:", filteredJson);

let modifiedJson = JSON.parse(jsonString, (key, value) => {
    if (key === "age") return value + 10;
    return value
});
console.log("Modified JSON:", modifiedJson);

let jSonArrayString = `[
    {"id": 1, "name": "alice"},
    {"id": 2, "name": "Yogha"},
    {"id": 3, "name": "bob"}
]`;
let JsonArray = JSON.parse(jSonArrayString);
console.log("JSON Array parsed:", JsonArray);

async function fetchJson() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log("Fetched JSON Data:", data);
    }catch (error) {
        console.error("Error Fetching JSON:", error);
    }
}
fetchJson()