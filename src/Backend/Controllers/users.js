import db from "../db.js";

export const getUsers = (req, res) => {
    const sql = "SELECT * FROM usuarios";
    db.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(result);
    });
};

export const createUser = (req, res) => {
    const { nome, data_nascimento, email, fone } = req.body;
    const sql = "INSERT INTO usuarios (nome, data_nascimento, email, fone) VALUES (?, ?, ?, ?)";
    db.query(sql, [nome, data_nascimento, email, fone], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ id: result.insertId, nome, data_nascimento, email, fone });
    });
};

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const sql = "DELETE FROM usuarios WHERE id = ?";
    db.query(sql, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Usuário deletado com sucesso" });
    });
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { nome, data_nascimento, email, fone } = req.body;
    const sql = "UPDATE usuarios SET nome = ?, data_nascimento = ?, email = ?, fone = ? WHERE id = ?";
    db.query(sql, [nome, data_nascimento, email, fone, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Usuário editado com sucesso" });
    });
};