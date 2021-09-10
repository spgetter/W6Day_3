// Get our Rangers API data

const getData = async () => {
    let response = await axios.get(`https://my-json-server.typicode.com/CodingTemple/Power-Rangers-API-Json/rangers`)
    console.log(response.data)
    return response.data
}

// create Constants to Hold DOM Elements
const DOM_Elements = {
    ranger_list : '.ranger-list'
}

// Creation of the Ranger List HTML
const create_list = ( id, name, color ) => {
    const html = `<a href = "#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">Name: ${name}|Color: ${color} </a>`;
    document.querySelector(DOM_Elements.ranger_list).insertAdjacentHTML('beforeend', html)
}

// Function to Load Data and Displays HTML

const load_data = async () => {
    const rangers = await getData();

    rangers.forEach( element => create_list( element.id, element.name, element.color ))
}

// Function to Clear Data from HTML
const clear_data = () => {
    document.querySelector(DOM_Elements.ranger_list).innerHTML = "";
}