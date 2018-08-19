var furnitureService = {
    log: function (furniture) { console.log(furniture.name + ' - ' + furniture.legs); }
}

var WoodFurnitureFactory = {
    createChair: function () {
        return {
            legs: 4,
            name: 'Wooden chair'
        }
    },
    createTable: function () {
        return {
            legs: 8,
            name: 'Wooden table'
        }
    },
    createArmChair: function () {
        return {
            legs: 3,
            name: 'Wooden armchair'
        }
    }
}

var IronFurnitureFactory = {
    createChair: function () {
        return {
            legs: 4,
            name: 'Iron chair'
        }
    },
    createTable: function () {
        return {
            legs: 8,
            name: 'Iron table'
        }
    },
    createArmChair: function () {
        return {
            legs: 3,
            name: 'Iron armchair'
        }
    }
}

var FurnitureService = function(furnitureFactory) {
    this.furnitureFactory = furnitureFactory;
    this.logItems = function () {
        furnitureService.log(this.furnitureFactory.createArmChair());
        furnitureService.log(this.furnitureFactory.createChair());
        furnitureService.log(this.furnitureFactory.createTable());
    }
}

var WoodenService = function() {
    this.logItems = function() {
        console.log('===Wooden Service===');
        this.__proto__.logItems();
    }
}

WoodenService.prototype = new FurnitureService(WoodFurnitureFactory);

const woodenService = new WoodenService();
const ironService = new FurnitureService(IronFurnitureFactory);

woodenService.logItems();
console.log('===================');
ironService.logItems();