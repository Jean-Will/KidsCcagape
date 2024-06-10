import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1910",
    database: "db_kids2"
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
        return;
    }
    console.log("Conectado ao MySQL");
});

export default db;
