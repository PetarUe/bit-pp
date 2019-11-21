
import { fetchUsers } from './data.js';
import { searchText, displayUsers } from './ui.js'


function onSuccess(users) {

    displayUsers(users)

}
function init() {

    document.querySelector('.searchBtn').addEventListener('click', getDataOnClick)
}

function getDataOnClick(event) {
    const dataSearch = searchText()
    fetchUsers(dataSearch, onSuccess)
}

export {
    init
}

