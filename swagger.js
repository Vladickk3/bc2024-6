const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

function swaggerDocs(app, port) {
    const swaggerOptions = {
        swaggerDefinition: {
            openapi: '3.0.0',
            info: {
                title: 'Notes API',
                version: '1.0.0',
                description: 'API for managing notes',
            },
            servers: [
                {
                    url: `http://localhost:${port}`,
                },
            ],
        },
        apis: ['./index.js'], // Файли, в яких описані Swagger-коментарі
    };

    const swaggerSpec = swaggerJsDoc(swaggerOptions);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    console.log(`Swagger documentation available at http://localhost:${port}/docs`);
}

module.exports = swaggerDocs; 
