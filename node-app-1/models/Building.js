const Model = require('./Model');

module.exports = class Building extends Model {
    constructor(data) {
        super();
        this.id = data?.id;
        this.title = data?.title;
        this.tenant_id = data?.tenant_id;
        this.owner_id = data?.bank_code;
        this.address = data?.address;

        this.tableName = 'buildings';
    }

    attributes() {
        return ['id', 'title', 'tenant_id', 'owner_id', 'address'];
    }
}
