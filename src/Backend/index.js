import express from "express";
import userRoutes from "./Routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

app.listen(3000, () => {
    console.log("SERVIDOR RODANDO NA PORTA 3000");
});
