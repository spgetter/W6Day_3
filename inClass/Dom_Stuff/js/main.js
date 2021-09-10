console.log( document.getElementsByTagName('h1')[0].innerHTML = "Hola Mundo!" )

let color_button = document.getElementById('color-button')
console.log(color_button)

function color_change(){
    let header_text = document.getElementsByTagName('h1')[0].innerHTML
    if(header_text == 'Hola Mundo!'){
        document.getElementsByTagName('h1')[0].className = 'color-change'
    } else {
        header_text = 'Something Else'
    }
}

// Change Text Color via click event in JS
color_button.addEventListener('click', color_change)

// Adding a new button via JS
let button = document.createElement('button')
let button_display = document.createElement('h2')

// Add ineer text to the button
button.innerHTML = 'I am alive!'
document.body.append(button)

button.addEventListener('click', function(){
    button_display.innerHTML = "More JS info here..."
    document.body.append(button_display)
})

// Grab some copied text -- Then place it onto the clipboard

const source = document.querySelector('div.source');
source.addEventListener('copy', ( event ) => {
    console.log(ClipboardEvent)
    console.log(event)
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase())
    event.preventDefault()
})

// Grabbing Form Data from a submit event
const form = document.querySelector("#testDataForm")
// console.log(form)

// Add Event Listener for submit event
form.addEventListener('submit', ( event ) => {
    event.preventDefault();
    // grab form information (way # 1)
    let query_first = document.querySelector('#first-name')
    let query_last = document.querySelector('#last-name')

    // grab form information (way # 2)
    let first_name = event.path[0][0].value
    let last_name = event.path[0][1].value

    console.log(event)
    console.log(first_name, last_name)
    console.log(`This came from the query selectors: ${query_first.value}, ${query_last.value}`)
})
