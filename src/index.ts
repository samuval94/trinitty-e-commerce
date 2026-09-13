import express, {type Express, type Request, type Response} from "express";

const app = express()

const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("¡Servidor Express con Typescript funcionando!")
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});