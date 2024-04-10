const DB = require('../models/Remote')

module.exports = class Controller {
    
    Database = new DB();
    
    constructor() { }

    async save(data) {
        data = this.model.serialize(data);
        if (data.id)
            return await this.update(data);

        return await this.create(data);
    }

    async create(data) {
        return await this.Database.create(this.model.tableName, data);
    }

    async find(data) {
        return await this.Database.findOne(this.model.tableName, data)
    }

    async update(data) {
    }

    async delete(data) {
    }

    async list() {
        return await this.Database.list(this.model.tableName);
    }
}