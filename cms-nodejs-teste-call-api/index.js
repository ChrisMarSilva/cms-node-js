const axios = require('axios')
const https = require('https');

const api = axios.create({
    baseURL: 'https://localhost:51235/',
    timeout: 10000,
    httpsAgent: new https.Agent({ rejectUnauthorized: false }),
    headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

const data = JSON.stringify(
    {
        pagador: { ispb: 4358798, tipoPessoa: 0, tipoConta: 0, agencia: '0004', conta: '4444', documento: 22222222222, nome: 'JD VERMELHO PAGADOR', },
        recebedor: { ispb: 84701762, tipoPessoa: 0, documento: 22222222222, agencia: '0002', conta: '2222', tipoConta: 0, nome: 'AZUL RECEBEDOR', },
        valor: 123.45,
        customInformation: '123',
    }
)

api.post('api', data)
    .then(function (response) {
        console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
        console.error(error);
    });













//const request = require('request');
// request('https://jsonplaceholder.typicode.com/todos/1', function (error, response, body) {
//     if (error) console.error(error)
//     if (!error && response.statusCode === 200) console.log(body)
// })

// var options = {
//     uri: 'https://localhost:51235/api',
//     method: 'POST',
//     formData: {
//         "pagador": {
//             "ispb": 4358798,
//             "tipoPessoa": 0,
//             "tipoConta": 0,
//             "agencia": "0004",
//             "conta": "4444",
//             "documento": 22222222222,
//             "nome": "JD VERMELHO PAGADOR"
//         },
//         "recebedor": {
//             "ispb": 84701762,
//             "tipoPessoa": 0,
//             "documento": 22222222222,
//             "agencia": "0002",
//             "conta": "2222",
//             "tipoConta": 0,
//             "nome": "AZUL RECEBEDOR"
//         },
//         "valor": 15088.98,
//         "customInformation": "123"
//     },
// };

// request.post(options, function (error, response, body) {
//     if (error) console.log(error)
//     if (!error && response.statusCode === 200) console.log(body)
// })



// Content-Type: application/json

// const express = require('express')
// const axios = require('axios')
// const app = express()

// try{
//     console.log(getData());
// }catch(error){
//     console.error(error);
// }

// app.get('/teste', function (req, res) {
//     let url = 'https://jsonplaceholder.typicode.com/todos/1';

//     axios({ method: 'get', url })
//         .then(function (response) {
//             res.send(JSON.stringify(response.data));
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
// });

// const port = process.env.PORT || 5000
// var server = app.listen(port);


/*

npm init
npm install express --save 
npm install axios --save 
npm install https --save 
npm install request
node test.node.jd.call.api.js





axios({
  method: 'post',
  url: 'https://your.service.org/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});

----------------
var https = require('https');


// options for GET
var optionsget = {
    host : 'graph.facebook.com', // here only the domain name
    // (no http/https !)
    port : 443,
    path : '/youscada', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsget);
console.info('Do the GET call');

// do the GET request
var reqGet = https.request(optionsget, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
    // console.log("headers: ", res.headers);

    res.on('data', function(d) {
        console.info('GET result:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });

});

reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});


// do a POST request
// create the JSON object
jsonObject = JSON.stringify({
    "message" : "The web of things is approaching, let do some tests to be ready!",
    "name" : "Test message posted with node.js",
    "caption" : "Some tests with node.js",
    "link" : "http://www.youscada.com",
    "description" : "this is a description",
    "picture" : "http://youscada.com/wp-content/uploads/2012/05/logo2.png",
    "actions" : [ {
        "name" : "youSCADA",
        "link" : "http://www.youscada.com"
    } ]
});

// prepare the header
var postheaders = {
    'Content-Type' : 'application/json',
    'Content-Length' : Buffer.byteLength(jsonObject, 'utf8')
};

// the post options
var optionspost = {
    host : 'graph.facebook.com',
    port : 443,
    path : '/youscada/feed?access_token=your_api_key',
    method : 'POST',
    headers : postheaders
};

console.info('Options prepared:');
console.info(optionspost);
console.info('Do the POST call');

// do the POST call
var reqPost = https.request(optionspost, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);

    res.on('data', function(d) {
        console.info('POST result:\n');
        process.stdout.write(d);
        console.info('\n\nPOST completed');
    });
});

// write the json data
reqPost.write(jsonObject);
reqPost.end();
reqPost.on('error', function(e) {
    console.error(e);
});


// options for GET
var optionsgetmsg = {
    host : 'graph.facebook.com', // here only the domain name
    // (no http/https !)
    port : 443,
    path : '/youscada/feed?access_token=you_api_key', // the rest of the url with parameters if needed
    method : 'GET' // do GET
};

console.info('Options prepared:');
console.info(optionsgetmsg);
console.info('Do the GET call');

// do the GET request
var reqGet = https.request(optionsgetmsg, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);


    res.on('data', function(d) {
        console.info('GET result after POST:\n');
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });

});

reqGet.end();
reqGet.on('error', function(e) {
    console.error(e);
});

*/