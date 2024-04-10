const Controller = require(`./Controller`);
const Deal = require(`../models/Deal`);

module.exports = class DealController extends Controller {
    constructor() {
        super();
        this.model = new Deal();
    }

    save(data) {
        if (this.find({ key: 'person_id', value: data.person_id }))
            return { error: true, message: "Essa pessoa já tem uma negociação!" }

        return super.save(data);
    }
} 