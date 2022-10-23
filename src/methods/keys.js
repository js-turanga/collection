'use strict';

/*
 * collection.keys()
 *
 * The keys method returns all of the collection's keys:
 *
 */

const { isArray } = require( '../common' );

module.exports = function keys() {

    let collection = Object.keys( this.items );

    if ( isArray( this.items ) )
        collection = collection.map( Number );

    return new this.constructor( collection );

};
