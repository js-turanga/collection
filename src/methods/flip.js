'use strict';

/*
 * collection.flip()
 *
 * The flip method swaps the collection's keys with their corresponding values
 *
 */

const { isArray } = require( '../common' );

module.exports = function flip() {

    const collection = {};

    Object.keys( this.items ).forEach( key => {
        collection[this.items[key]] = isArray( this.items ) ? Number( key ) : key
    } );

    return new this.constructor( collection );
};
