'use strict';

/*
 * collection.merge(args)
 *
 * The merge method merges the given array or collection with the original collection. 
 * If a string key in the given items matches a string key in the original collection, 
 * the given items's value will overwrite the value in the original collection
 *
 */

const { isArray, isString, clone } = require( '../common' );

module.exports = function merge( args ) {

    if ( isString( args ) )
        args = [ args ];

    if ( isArray( this.items ) && isArray( args ) )
        return new this.constructor( this.items.concat( args ) );

    let items = clone( this.items );

    Object.keys( args ).forEach( key => {
        items[key] = args[key];
    } );

    return new this.constructor( items );
};
