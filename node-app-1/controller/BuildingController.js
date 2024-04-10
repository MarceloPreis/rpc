const Controller = require(`./Controller`);
const Building = require(`../models/Building`);

module.exports = class BuildingController extends Controller {
    constructor() {
        super();
        this.model = new Building();
    }
} 