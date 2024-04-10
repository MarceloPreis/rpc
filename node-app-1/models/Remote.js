const fs = require("fs");
const request = require("request");
const { fetch } = import('node-fetch');

module.exports = class Remote {

    remote = 'localhost'
    port = 3001

    constructor() {
    }

    async create(tableName, data) {

        const payload = {
            table: tableName,
            values: data,
        }

        const result = new Promise((resolve, reject) => {
            request.get(`http://${this.remote}:${this.port}`, payload, function (err, res, body) {
                if (err) {
                    reject(err); // Em caso de erro, rejeita a Promise
                } else {
                    resolve(body); // Em caso de sucesso, resolve a Promise com o corpo da resposta
                }
            });
        });
        
        const response = await result
        return response;
    }

    async update(tableName, data) {
        const payload = {
            table: tableName,
            values: data,
        }

        const response = await fetch(`${this.remote}:${this.port}/update`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload
        })

        return response;
    }

    async findOne(tableName, filters) {
        const payload = {
            table: tableName,
            filters: filters,
            limit: 1
        }

        const response = await fetch(`${this.remote}:${this.port}/list`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload
        })

        return response;    
    }

    async list(tableName, filters) {
        const payload = {
            table: tableName,
            filters: filters,
        }

        const response = await fetch(`${this.remote}:${this.port}/list`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload
        })

        return response;    
    }

}