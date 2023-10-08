# Stock Market Data Visualization

An application made using Node, Express, and React.

## Getting Started

- Clone the repository

```bash
  git clone https://github.com/manakupadhyay/ stock-market-data-visualization.git
```
- Install dependencies

```bash
    cd backend
    npm Install

    cd ../frontend
    npm install
```

- Configure domain and ports: 
Go to  ```backend/src/server.ts``` and replace ```origin: "https://stock-market-data-visualization-frontend.vercel.app" ``` with ```origin: "http://localhost:3000/"```

Go to ```frontend/src/utils/apis.ts``` and change the value of ```DOMAIN``` to ```"http://localhost:3001/"```



## Tech Stack

**Client:** React, Typescript, HTML, CSS

**Server:** Node, Express, Typescript

