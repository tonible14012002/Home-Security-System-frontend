const getOrdinaryUsers = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                [{
                    "id": 8,
                    "username": "tony123",
                    "first_name": "Bui",
                    "last_name": "NamAnh",
                    "email": "namanh12@gmail.com",
                    "phone": "0796518081",
                    "address": "Ta quang buu",
                    "birth": "2022-10-31"
                },
                    {
                        "id": 7,
                        "username": "tony12",
                        "first_name": "Jisoo",
                        "last_name": "",
                        "email": "namanh1@gmail.com",
                        "phone": "0796518081",
                        "address": "Ta quang buu",
                        "birth": "2022-10-31"
                    },
                    {
                        "id": 9,
                        "username": "wof",
                        "first_name": "worl",
                        "last_name": "verine",
                        "email": "wof@gmail.com",
                        "phone": "0931912999",
                        "address": "Ta quang buu 2",
                        "birth": "2022-11-03"
                    },
                    {
                        "id": 6,
                        "username": "tony",
                        "first_name": "Rose",
                        "last_name": "Bui",
                        "email": "rose@gmail.com",
                        "phone": "0931912999",
                        "address": "Ta quang buu 2",
                        "birth": "2022-10-31"
                    },
                    {
                        "id": 4,
                        "username": "lisa",
                        "first_name": "Lisa",
                        "last_name": "Bui",
                        "email": "asdasd@gmail.com",
                        "phone": "0933802218",
                        "address": "Ta quang buu",
                        "birth": "2022-10-31"
                    }
                ]
            )
        }, 1000)
    })
}


const getAdminUsers = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve([

            ])
        }, 1000);

    })
}

const updateUser = (userID) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve({
                "id": 4,
                "username": "lisa",
                "first_name": "Lisa",
                "last_name": "Bui",
                "email": "asdasd@gmail.com",
                "phone": "0933802218",
                "address": "Ta quang buu",
                "birth": "2022-10-31"
            })    
        }, 1000);
    })
}

const deleteUser = (userID) => {
    return new Promise (resolve => {
        setTimeout(() => {
            
        }, 1000);
    })
}

export { getOrdinaryUsers, getAdminUsers, updateUser, deleteUser }