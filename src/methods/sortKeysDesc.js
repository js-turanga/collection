'use strict';

/*
 * collection.sortKeysDesc()
 *
 * This method has the same signature as the sortKeys method, 
 * but will sort the collection in the opposite order
 *
 */

module.exports = function sortKeysDesc() {

    const collection = {};

    Object.keys( this.items ).sort().reverse().forEach( ( key ) => {
        collection[key] = this.items[key];
    } );

    return new this.constructor( collection );

};