const Model = require('./Model');

module.exports = class Deal extends Model {
    constructor(data) {
        super();
        this.id = data?.id;
        this.title = data?.title;
        this.person_id = data?.person_id;
        this.building_id = data?.building_id;

        this.tableName = 'deals';
    }

    attributes() {
        return ['id', 'name', 'birthDate', 'cpf']
    }
}