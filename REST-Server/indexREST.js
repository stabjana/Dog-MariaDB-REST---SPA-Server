'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const { port, host } = require('./configDogs.json');
const Datastorage = require('./storageLayer/dataStorageLayer');
const storage = new Datastorage();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Dog API! Visit /api for available endpoints.');
});

//Show available endpoints
app.get('/api', (req, res) => {
    res.json({
        message: "Welcome to the Dog API!",
        endpoints: {
            getAllDogs: "/api/dogs",
            getOneDog: "/api/dogs/{number}"
        }
    });
});

// Get all dogs
app.get('/api/dogs', async (req, res) => {
    const dogs = await storage.getAll();
    res.json(dogs);
});

// Get a single dog by number
app.get('/api/dogs/:number', async (req, res) => {
    const dog = await storage.get(req.params.number);
    if (dog) {
        res.json(dog);
    } else {
        res.status(404).json({ error: "Dog not found" });
    }
});

//  Insert a new dog
app.post('/api/dogs', async (req, res) => {
    try {
        await storage.insert(req.body);
        res.status(201).json({ message: "Dog added successfully" });
    } catch (error) {
        res.status(400).json({ error: "Failed to add dog" });
    }
});

// Update a dog (or create if not exists)
app.put('/api/dogs', async (req, res) => {
    try {
        await storage.update(req.body);
        res.json({ message: "Dog updated successfully" });
    } catch (error) {
        res.status(400).json({ error: "Failed to update dog" });
    }
});

// Delete a dog by number
app.delete('/api/dogs/:number', async (req, res) => {
    try {
        await storage.remove(req.params.number);
        res.json({ message: "Dog deleted successfully" });
    } catch (error) {
        res.status(400).json({ error: "Failed to delete dog" });
    }
});

app.listen(port, host, () => console.log(`REST server running at http://${host}:${port}`));
