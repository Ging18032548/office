const express = require('express');
const router = express.Router();
const dbConnect = require('../db');

router.post('/', async (req, res) => {
    const { name, category, status } = req.body;
    try {
        const conn = await dbConnect();
        const sql = "INSERT INTO equipment (name, category, status) VALUES (?, ?, ?)";
        const [result] = await conn.execute(sql, [name, category, status]);
        res.json({ message: "Equipment added!", id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: 'Error adding equipment: ' + err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const conn = await dbConnect();
        const [rows] = await conn.execute('SELECT * FROM equipment');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching equipment: ' + err.message });
    }
});

router.put('/:id', async (req, res) => {
    const { name, category, status } = req.body;
    try {
        const conn = await dbConnect();
        const sql = "UPDATE equipment SET name=?, category=?, status=? WHERE id=?";
        await conn.execute(sql, [name, category, status, req.params.id]);
        res.json({ message: "Equipment updated!" });
    } catch (err) {
        res.status(500).json({ error: 'Error updating equipment: ' + err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const conn = await dbConnect();
        const sql = "DELETE FROM equipment WHERE id=?";
        await conn.execute(sql, [req.params.id]);
        res.json({ message: "Equipment deleted!" });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting equipment: ' + err.message });
    }
});

module.exports = router;
