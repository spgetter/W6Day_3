// Get our standings API data
const getData = async (season, round) => {
    console.log(`http://ergast.com/api/f1/${season}/${round}/driverstandings.json`)
    let response = await axios.get(`http://ergast.com/api/f1/${season}/${round}/driverstandings.json`)
    console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings)
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
}

const create_list = ( position, name, nationality, constructor, points) => {
    const html = `<div class="standings_list_item">${position}</div><div class="standings_list_item">${name}</div><div class="standings_list_item">${nationality}</div><div class="standings_list_item">${constructor}</div><div class="standings_list_item">${points}</div>`;
    document.querySelector(DOM_Elements.standings_list).insertAdjacentHTML('beforeend', html)
}

// Function to Load Data and Displays HTML

const load_data = async () => {
    let query_season = document.querySelector('#season')
    let query_round = document.querySelector('#round')
    const drivers = await getData(query_season.value,query_round.value);
    
    drivers.forEach( element => create_list( element.position, element.Driver.driverID, element.Driver.nationality, element.Constructors[0].constructorId, element.points ))
}

// Function to Clear Data from HTML
const clear_data = () => {
    document.querySelector(DOM_Elements.standings_list).innerHTML = "";
}
