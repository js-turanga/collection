'use strict';

/*
 * collection.reverse()
 *
 * The reverse method reverses the order of the collection's items, preserving the original keys
 *
 */

module.exports = function reverse() {

    const collection = [].concat( this.items ).reverse();

    return new this.constructor( collection );

};
