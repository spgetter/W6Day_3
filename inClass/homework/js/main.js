table_built = false;

// Get our standings API data
const getData = async (season, round) => {
    console.log(`https://ergast.com/api/f1/${season}/${round}/driverstandings.json`)
    let response = await axios.get(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`);
    console.log(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
    return response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

}

const create_list = ( position, given_name, family_name, nationality, constructor, points) => {
    if(position < 8){
        let name = `${given_name} ${family_name}`;
        const html = ` <div class="row standings_list">
                        <div class="standings_list_item col-12 col-md-3 col-sm-3">${position}</div>
                        <div class="standings_list_name col-12 col-md-2 col-sm-2">${name}</div>
                        <div class="standings_list_item col-12 col-md-3 col-sm-3">${nationality}</div>
                        <div class="standings_list_item col-12 col-md-2 col-sm-2">${constructor}</div>
                        <div class="standings_list_item col-12 col-md-2 col-sm-2">${points}</div>
                        </div>`;
        document.querySelector(DOM_Elements.container).insertAdjacentHTML('beforeend', html);
    }
}


const DOM_Elements = {
    standings_list: '.standings_list',
    standings_list_item: '.standings_list_item',
    container: '.container'
}

// Function to Load Data and Displays HTML

const form = document.querySelector('#testDataForm')
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    let query_season = document.querySelector('#season');
    let query_round = document.querySelector('#round');
    if(table_built){
        clear_data();
    }
    const html = ` <div class="row">
                    <div class="tableHead col-12 col-md-3 col-sm-3">Position</div>
                    <div class="tableHead standings_list_name col-12 col-md-2 col-sm-2">Name</div>
                    <div class="tableHead col-12 col-md-3 col-sm-3">Nationality</div>
                    <div class="tableHead col-12 col-md-2 col-sm-2">Constructor</div>
                    <div class="tableHead col-12 col-md-2 col-sm-2">Points</div>
                    </div>`;
    document.querySelector(DOM_Elements.container).insertAdjacentHTML('beforeend', html);
    load_data(query_season.value, query_round.value);
});

const load_data = async (season, round) => {
    const drivers = await getData(season,round);
    drivers.forEach( element => create_list( element.position, element.Driver.givenName, element.Driver.familyName, element.Driver.nationality, element.Constructors[0].name, element.points ));
    table_built = true;
}

// Function to Clear Data from HTML
const clear_data = () => {
    document.querySelector(DOM_Elements.container).innerHTML = "";
}
