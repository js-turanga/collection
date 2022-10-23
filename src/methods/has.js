'use strict';

/*
 * collection.has(key)
 * collection.has([key, key])
 *
 * The has method determines if a given key exists in the collection
 *
 */

const { isArray } = require( '../common.js' );

module.exports = function has( ...args ) {

    args = isArray( args[0] ) ? args[0] : args;

    if ( isArray( this.items ) ) 
        return args.filter( ( key ) => this.items.includes( key ) ).length == args.length;

    return args.filter( ( key ) => key in this.items ).length == args.length;
    
};
