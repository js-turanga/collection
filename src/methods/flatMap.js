'use strict';

/*
 * collection.flatMap(cb)
 *
 * The flatMap method iterates through the collection and passes each value to the given closure. 
 * The closure is free to modify the item and return it, thus forming a new collection of modified items. 
 * Then, the array is flattened by one level
 *
 */

module.exports = function flatMap( cb ) {

    return this.map( cb ).collapse();
};
