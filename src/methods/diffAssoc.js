'use strict';

/*
 * collection.diffAssoc(args)
 *
 * The diffAssoc method compares the collection against another collection or am array
 * based on its keys and values. This method will return the key / value pairs in the
 * original collection that are not present in the given collection
 *
 */

const { isCollection } = require( '../common.js' );

module.exports = function diffAssoc( args ) {

    args = isCollection( args ) ? args.all() : args;

    const obj = {};

    Object.keys( this.items ).forEach( ( key ) => {
        if ( args[key] === undefined || args[key] !== this.items[key] ) 
            obj[key] = this.items[key];
    } );

    return new this.constructor( obj );
    
};
