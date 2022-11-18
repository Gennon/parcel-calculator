# parcel-calculator

Over-engineer a problem.

## Problem

Given a list of parcels, calculate the total cost of shipping them.

- Each parcel has a weight in kg.
- There is a base cost of 10 NOK.
- Each parcel has a base cost of 50 NOK.
- Each parcel has a weight surcharge of 5 NOK per kg.

## Solution

- Frontend: React
- Backend: Node.js
- Database: MongoDB

### How to run

Dependencies:

- [Docker](https://www.docker.com/products/docker-desktop/)

```bash
cd infra
docker-compose up
```

Now you can access the frontend at [http://localhost:3000](http://localhost:3000).

The database is available at [http://localhost:8081](http://localhost:8081)

- username: dev
- password: devPassword
