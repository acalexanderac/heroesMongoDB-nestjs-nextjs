# API REST NestJS MongoDB SuperHeroes 🦸‍♂️

## API Endpoints ⭐

#### hero-informations

- `POST /hero-informations`: Create a new hero
- `GET /hero-informations`: Get all heroes
- `GET /hero-informations/search`: Search for heroes
- `GET /hero-informations/{id}`: Get a specific hero by ID
- `PATCH /hero-informations/{id}`: Update a specific hero by ID
- `DELETE /hero-informations/{id}`: Delete a specific hero by ID

#### alignments

- `GET /alignments`: Get all alignments
- `GET /alignments/search`: Search for alignments
- `GET /alignments/{id}`: Get a specific alignment by ID

#### genders

- `GET /genders`: Get all genders
- `GET /genders/search`: Search for genders
- `GET /genders/{id}`: Get a specific gender by ID

#### publishers

- `GET /publishers`: Get all publishers
- `GET /publishers/search`: Search for publishers
- `GET /publishers/{id}`: Get a specific publisher by ID

## Installation 🛸

```bash
$ npm install
```

### Running the App

#### development

```bash
$ npm run start
```

### watch mode

```bash
$ npm run start:dev
```

## Documentation 📖

The API documentation is generated using Swagger, a tool for designing, building, and documenting RESTful APIs. You can access the documentation at the following URL when your server is running:

http://localhost:3000/documentacion

## How to Use the Documentation 🚀

Swagger provides an interactive interface for exploring the API. Each endpoint is listed along with its HTTP method, expected parameters, and response format. You can even try out the API directly from the Swagger interface.

#### To use Swagger:

    1. Start your server.
    2. Open a web browser and navigate to `http://localhost:3000/documentacion`.
    3. Click on an endpoint to expand it and see more details.
    4. To try out an endpoint, click the "Try it out" button, fill in any required parameters, and click "Execute".

Remember to replace `localhost:3000` with your actual server address if you're not running the server locally.
