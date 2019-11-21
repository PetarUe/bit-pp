


const searchItem = document.querySelector('.search')
const searchResultsUl = document.querySelector('.search-results')

function searchText() {
    return searchItem.value
}
function displayUsers(user) {


    user.forEach(function (user) {
        const divEl = document.createElement('div').setAttribute('class', 'divElement')
        $(divEl).append(user.image)

        const li = $(`<li> 
            userName: ${user.name}
           </li>`)

        $(searchResultsUl).append(li)


    });

}

export {
    searchText, displayUsers
}

