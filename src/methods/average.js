'use strict';

/*
 * collection.average()
 * collection.average(key)
 *
 * The average method returns the average of all items in the collection, eventually identified by key
 *
 */

const { isFunction } = require( '../common.js' );

module.exports = function average( key ) {

    if ( key === undefined ) 
        return this.sum() / this.items.length;

    if ( isFunction( key ) ) 
        return new this.constructor( this.items ).sum( key ) / this.items.length;

    return new this.constructor( this.items ).pluck( key ).sum() / this.items.length;
    
};
