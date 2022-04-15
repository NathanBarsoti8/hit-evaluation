const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/index.js']
const doc = {
    info: {
        version: "1.0.0",
        title: "API for registering soccer players and clubs"
    },
    host: "localhost:4444",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [],
    definitions: {}
}

swaggerAutogen(outputFile, endpointsFiles, doc)