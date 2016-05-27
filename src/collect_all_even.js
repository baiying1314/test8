'use strict';

function collect_all_even(collection) {

    return buildEvenCollection(collection);
}

function buildEvenCollection(collection) {
    var arrayEven = [];

    collection.forEach(function (collectionItem) {
        if (collectionItem % 2 === 0) {
            arrayEven.push(collectionItem)
        }
    });

    return arrayEven;
}
module.exports = collect_all_even;
