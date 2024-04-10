const Controller = require(`./Controller`);
const Person = require(`../models/Person`);

module.exports = class PersonController extends Controller {
    constructor() {
        super();
        this.model = new Person();
    }

    save(data) {
        // if (this.find({ key: 'cpf', value: data.cpf }))
        //     return { error: true, message: "Essa pessoa já foi cadastrada!" }

        return super.save(data);
    }
} 