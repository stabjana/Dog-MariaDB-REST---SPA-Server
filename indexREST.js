'use strict';

const express = require('express');
const app = express();

const { port, host } = require('./configDogs.json');
const Datastorage = require('./storageLayer/dataStorageLayer');
const storage = new Datastorage();

app.use(express.json());

// Get all dogs
app.get('/api/dogs', async (req, res) => {
    const dogs = await storage.getAll();
    res.json(dogs);
});

// Get a single dog by number
app.get('/api/dogs/:number', async (req, res) => {
    const dog = await storage.get(req.params.number);
    dog ? res.json(dog) : res.status(404).json({ error: "Dog not found" });
});

// Insert a new dog
app.post('/api/dogs', async (req, res) => {
    try {
        await storage.insert(req.body);
        res.status(201).json({ message: "Dog added successfully" });
    } catch (error) {
        res.status(400).json({ error: "Failed to add dog" });
    }
});

// Update a dog
app.put('/api/dogs', async (req, res) => {
    try {
        await storage.update(req.body);
        res.json({ message: "Dog updated successfully" });
    } catch (error) {
        res.status(400).json({ error: "Failed to update dog" });
    }
});

// Delete a dog
app.delete('/api/dogs/:number', async (req, res) => {
    try {
        await storage.remove(req.params.number);
        res.json({ message: "Dog deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: "Failed to delete dog" });
    }
});

// Start server
app.listen(port, host, () => console.log(`REST server running at ${host}:${port}`));
