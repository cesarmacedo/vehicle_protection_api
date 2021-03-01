# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

REST API 
The REST API to the example app is described below.

# Get list of Customers
Request
<b>GET /api/v1/customer</b>

path: http://localhost:3000/api/v1/customer
</br>
Status: 200 OK
</br>
Response
</br>
Content-Type: application/json
<pre>
[
    {
          "id": 1,
          "name": "César Augusto Macedo",
          "cpf": "777.777.777.88",
          "crlv": "7777777",
          "vehicle": "fORD Fiesta 2000",
          "city": "Belo Horizonte",
          "state": "MG",
          "created_date": "2021-03-01T02:20:05.917Z",
          "updated_at": "2021-03-01T02:20:05.917Z"
    }
]
</pre>
# Create a new customers
Request
<b>POST /api/v1/customer</b>

path: http://localhost:3000/api/v1/customer
Response </br>
Status: 200 OK </br>
Content-Type: application/json </br>
<pre>
{
    "name":"César Augusto Macedo",
    "cpf":"777.777.777.77",
    "crlv":"7777777",
    "vehicle":"fORD Fiesta",
    "city":"Belo Horizonte",
    "state":"MG"
}
</pre>
# Get a specific customer
Request
<b>GET /api/v1/customer/:id</b>

path: http://localhost:3000/api/v1/customer/1</br>
Response</br>
Status: 200 OK</br>
Content-Type: application/json</br>
<pre>
{
    "id": 1,
    "name": "César Augusto Macedo",
    "cpf": "777.777.777.88",
    "crlv": "7777777",
    "vehicle": "fORD Fiesta 2000",
    "city": "Belo Horizonte",
    "state": "MG",
    "created_date": "2021-03-01T02:20:05.917Z",
    "updated_at": "2021-03-01T02:20:05.917Z"
}
</pre>
# Get a non-existent customer
Request
<b>GET /api/v1/customer/:id</b></br>
path: http://localhost:3000/api/v1/customer/99999999 </br>
Response </br>
Status: 404 Not Found </br>
Content-Type: application/json </br>

{"message":"Customer not found"}

# Change a customer
Request</br>
<b>PUT /api/v1/customer/:id</b></br>
path: localhost:3000/api/v1/customer/1
Response</br>
Status: 200 OK</br>
Content-Type: application/json</br>
<pre>
{
    "name":"César Augusto Macedo",
    "cpf":"111.111.111.11",
    "crlv":"7777777",
    "vehicle":"fORD Fiesta",
    "city":"Belo Horizonte",
    "state":"MG"
}
</pre>
# Create a new event
Request
<b>POST /api/v1/event</b></br>

path:  http://localhost:3000/api/v1/event </br>
Status: 200 OK </br>
Content-Type: application/json </br>
<pre>
{
    "client_id":1,
    "vehicle":"Uno fiat",
    "third_party" :[
        { 
            "name": "terceiro", 
            "cpf": "999.999.999.99",
            "crlv": "222.222.222.22",    
            "vehicle": "palio",
            "city": "Venda Nova",
            "state": "MG"
        },
    ]
}
</pre>

# Get list of events
Request
<b>GET /api/v1/event</b></br>

path: http://localhost:3000/api/v1/event </br>
Status: 200 OK </br>
Content-Type: application/json </br>
<pre>
[
     {
        "id": 1,
        "client_id": 1,
        "vehicle": "Uno fiat",
        "third_party": [
            {
                "id": 1,
                "cpf": "999.999.999.99",
                "city": "Venda Nova",
                "crlv": "222.222.222.22",
                "name": "terceiro2",
                "state": "MG",
                "vehicle": "palio",
                "updated_at": "2021-03-01T02:20:54.545Z",
                "created_date": "2021-03-01T02:20:54.545Z"
            },
            {
                "cpf": "888.888.888.88",
                "city": "Venda Nova",
                "crlv": "111.111.111.11",
                "name": "terceiro",
                "state": "MG",
                "vehicle": "corsa sedan"
            }
        ],
        "created_date": "2021-03-01T02:20:54.559Z",
        "updated_at": "2021-03-01T02:20:54.559Z"
    }
]
</pre>
# Get list of Third Parties
Request
<b>GET /api/v1/third</b> </br>

path: http://localhost:3000/api/v1/third </br>
Status: 200 OK </br>
Content-Type: application/json </br>
<pre>
[
     {
        "id": 1,
        "name": "terceiro2",
        "cpf": "999.999.999.99",
        "crlv": "222.222.222.22",
        "vehicle": "palio",
        "city": "Venda Nova",
        "state": "MG",
        "created_date": "2021-03-01T02:20:54.545Z",
        "updated_at": "2021-03-01T02:20:54.545Z"
    },
    {
        "id": 2,
        "name": "terceiro",
        "cpf": "888.888.888.88",
        "crlv": "111.111.111.11",
        "vehicle": "corsa sedan",
        "city": "Venda Nova",
        "state": "MG",
        "created_date": "2021-03-01T02:20:54.566Z",
        "updated_at": "2021-03-01T02:20:54.566Z"
    }
]
</pre>
