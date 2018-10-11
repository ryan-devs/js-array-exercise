var credentials = {
    username: "abed",
    password: "communityCollege"
};

var database = [{
        username: "abed",
        password: "communityCollege"
    },
    {
        username: "jeff",
        password: "123"
    },
    {
        username: "gal",
        password: "456"
    }
];

var newsfeed = [{
        username: 'bob',
        timeline: 'what up yalll'
    },
    {
        username: 'bill',
        timeline: 'lets get to codin my hombres'
    },
    {
        username: 'jeff',
        timeline: 'shoop de woop'
    }
];
var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(user, pass) {
    for (var i = 0; i < 3; i++) {
        if (user === database[i].username && pass === database[i].password) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
        if (isUserValid(user, pass)) {
            console.log(newsfeed);
        } else {
            alert("Sorry, wrong username and password")
        }
};

signIn(usernamePrompt, passwordPrompt);
