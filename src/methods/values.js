'use strict';

/*
 * collection.values()
 *
 * The values method appends an item to the end of the collection
 *
 */

const { values: retrieveValues } = require( '../common' );

module.exports = function values() {

    return new this.constructor( retrieveValues( this.items ) );
    
};
