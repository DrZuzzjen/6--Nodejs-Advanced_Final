
# Práctica de BackEnd

[Demo](/anuncios)  <- Click here for Demo

## Deploy

### Install dependencies
    
    npm install

### Configure  

Review lib/connectMongoose.js to set database configuration

### Init database

    npm run installDB

## Configure environment variables

Copy .env.example to .env and review the settings.

```sh
cp .env.example .env
```

## Start

To start a single instance:
    
    npm start

To start in development mode:

    npm run dev (including nodemon & debug log)


## API v1 info


#### Base Path

The API can be used with the path:
[API V1](/apiv1/anuncios)

## Json Web Token Security for API
### POST  /apiv1/loginJWT

  **Obtain a JWToken**

  use POSTMAN to send user and password. The default dummy example is 
  **user:** user@example.com
  **password:** 1234

    {
    "tokenJWT": "eyJhbGciOiJIUzI1NiIsInR
    5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmE3ZWNjMTBjY2RlZjM2NzgwY
    jBlYWYiLCJpYXQiOjE2MDQ4NDM2MDEsImV
    4cCI6MTYwNTAxNjQwMX0.fqiSKqvUftdRgjFY9H
    C6PYLCFvqUrKCb_ApdYjV-Mqg"
}

### GET  /apiv1/anuncios

**API access trough POSTMAN using the key='Authorization' value=JWToken**

{
  "_id": "5fa83cddc8c7d8430c664eca",
  "nombre": "Bicicleta",
  "venta": true,
  "precio": 23015,
  "foto": "\\images\\anuncios\\bici.jpg",
  "__v": 0,
  "tags": [
      "lifestyle",
      "motor"
}


### Languages EN/ES:

i18n Selector to change language. To add to .ejs use "__" 

**<%= __('Example') %>**

### Error example

    {
      "ok": false,
      "error": {
        "code": 401,
        "message": "This is the error message."
      }
    }

### GET /anuncios

**Input Query**:

start: {int} skip records
limit: {int} limit to records
sort: {string} field name to sort by
includeTotal: {bool} whether to include the count of total records without filters
tag: {string} tag name to filter
venta: {bool} filter by venta or not
precio: {range} filter by price range, examples 10-90, -90, 10-
nombre: {string} filter names beginning with the string

Input query example: ?start=0&limit=2&sort=precio&includeTotal=true&tag=mobile&venta=true&precio=-90&nombre=bi

**Result:** 

    {
      "ok": true,
      "result": {
        "rows": [
          {
            "_id": "55fd9abda8cd1d9a240c8230",
            "nombre": "iPhone 3GS",
            "venta": false,
            "precio": 50,
            "foto": "/images/anuncios/iphone.png",
            "__v": 0,
            "tags": [
              "lifestyle",
              "mobile"
            ]
          }
        ],
        "total": 1
      }
    }


### GET /anuncios/tags

Return the list of available tags for the resource anuncios.

**Result:** 

    {
      "ok": true,
      "allowed_tags": [
        "work",
        "lifestyle",
        "motor",
        "mobile"
      ]
    }

