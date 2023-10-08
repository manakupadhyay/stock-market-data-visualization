import express, { Express } from "express";
import cors from "cors";
import routes from "./router/index";

const app: Express = express();
const PORT = process.env.PORT || 3001;

var corsOptions = {
  origin: "https://stock-market-data-visualization-frontend.vercel.app",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
