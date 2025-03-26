'use strict';

const path = require('path');
const { doQuery } = require('./database');
const sqlStatements = require('./sqlStatements.json');

module.exports = class Datastorage {
    async getAll() {
        const result = await doQuery(sqlStatements.getAll.join(' '));
        return result.queryResult;
    }

    async get(number) {
        const result = await doQuery(sqlStatements.getOne.join(' '), [number]);
        return result.queryResult[0] || null;
    }

    async insert(dog) {
        const { number, name, weightKg, breed, birth } = dog;
        return await doQuery(sqlStatements.insert.join(' '), [number, name, weightKg, breed, birth]);
    }

    async update(dog) {
        const { number, name, weightKg, breed, birth } = dog;
        return await doQuery(sqlStatements.update.join(' '), [name, weightKg, breed, birth, number]);
    }

    async remove(number) {
        return await doQuery(sqlStatements.remove.join(' '), [number]);
    }
};
