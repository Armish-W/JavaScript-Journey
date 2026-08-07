// const darazUser =  new Object () this is singleton
const darazUser = {} // non-singleton
darazUser.id = "12345"
darazUser.name = "sam"
darazUser.isLoggedIn = false

// console.log(darazUser);
const regularUser = 
{
    email: "sam@gmail.com",
    fullname: {

        userFullName: {
            firstname: "michael",
            lastname: "jordan"

        }

    }
}

// console.log(regularUser.fullname.userFullName)
const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3= {...obj1, ...obj2}
console.log(obj3)
const users = [

    {
        id: '123',
        email: 'sam123@gmail.com'
    },

    {
        id:'111'
    }
]

console.log (users[0])
console.log(darazUser);
console.log(Object.keys(darazUser))
console.log(Object.values(darazUser))
console.log(Object.entries(darazUser))

console.log(darazUser.hasOwnProperty("name"))