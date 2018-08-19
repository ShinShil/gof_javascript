var WallBuilder = function (material) {
    this.material = material;
    this.build = function () {
        return material + ' walls';
    }
}

var RoofBuilder = function (material) {
    this.build = function () {
        return material + ' roof';
    }
}

var Garden = function () {
    this.build = function () {
        return 'garden';
    }
}

var House = function (builders) {
    this.builders = builders;
    this.log = function () {
        this.builders.forEach(builder => console.log(builder.build()));
    }
}

var houseBuilder = {
    getWoodenHouse: function () {
        const material = 'wooden';
        return new House([new RoofBuilder(material), new WallBuilder(material)]);
    },
    getWoodenHouseWithGarden: function() {
        const material = 'wooden';
        return new House([new RoofBuilder(material), new WallBuilder(material), new Garden()]);
    }
}

var house = houseBuilder.getWoodenHouse();
house.log(); 
house = houseBuilder.getWoodenHouseWithGarden();
console.log('=============');
house.log();
