

import { User } from './user.js'

function fetchUsers(text, onSuccess) {

    const requestUrl = `https://api.github.com/search/users?q=${text}`

    $.get(requestUrl, function (response) {
        // response je argument (odnosno ono sto vraca sa servera)  NIZ OBJEKATA
        const userList = response.items
        console.log(userList);

        const myUsers = []

        for (let i = 0; i < userList.length; i++) {
            const userObj = userList[i]
            const user = new User(userObj.id, userObj.login, userObj.avatar_url)
            myUsers.push(user)
        }
        onSuccess(myUsers)
    });
}
export {
    fetchUsers
}

