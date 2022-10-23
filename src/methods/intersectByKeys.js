'use strict';

/*
 * collection.intersectByKeys(values)
 *
 * The intersectByKeys method removes any keys and their corresponding values 
 * from the original collection that are not present in the given array or collection
 *
 */

const { isCollection } = require( '../common.js' );

module.exports = function intersectByKeys( values ) {

    let keys = isCollection( values ) ? 
        Object.keys( values.all() )
        : Object.keys( values );

    const collection = {};

    Object.keys( this.items ).forEach( ( key ) => {

        if ( keys.indexOf( key ) !== -1 )
            collection[key] = this.items[key];
    } );

    return new this.constructor( collection );
};
