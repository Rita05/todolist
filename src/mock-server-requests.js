var mockServerClient = require('mockserver-client').mockServerClient

const tasks = [
    {id: 1,  taskName: 'buy products'},
    {id: 2,  taskName: 'wash the dishes'},
];


var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 3000).mockAnyResponse({
    "httpRequest": {
        "method": "POST",
        "path": "/login",
        "body": {
            "username": "foo",
            "password": "bar"
        }
    },
    "httpResponse": {
        "statusCode": 302,
        "headers": {
            "Location": [
                "https://www.mock-server.com"
            ]
        }
    }
}).then(
    function () {
        console.log("expectation created");
    },
    function (error) {
        console.log(error);
    }
);