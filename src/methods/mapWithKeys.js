'use strict';

/*
 * collection.mapWithKeys(cb)
 *
 * The mapWithKeys method iterates through the collection and passes each value to the given callback. 
 * The callback should return an associative array containing a single key / value pair
 *
 */

module.exports = function mapWithKeys( cb ) {

    const collection = {};

    Object.keys( this.items ).forEach( ( key ) => {
        const [ keyed, value ] = cb( this.items[key] );

        collection[keyed] = value;
    } );

    return new this.constructor( collection );   
};
