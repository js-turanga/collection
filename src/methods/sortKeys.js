'use strict';

/*
 * collection.sortKeys()
 *
 * The sortKeys method sorts the collection by the keys of the underlying associative array
 *
 */

module.exports = function sortKeys() {

    const collection = {};

    Object.keys( this.items ).sort().forEach( ( key ) => {
        collection[key] = this.items[key];
    } );

    return new this.constructor( collection );

};