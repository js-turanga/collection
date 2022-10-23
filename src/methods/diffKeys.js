'use strict';

/*
 * collection.diffKeys(args)
 *
 * The diffKeys method compares the collection against another collection or am array based on its keys.
 * This method will return the key / value pairs in the original collection that are not present in the given collection
 *
 */

const { isCollection } = require( '../common.js' );

module.exports = function diffKeys( args ) {

    args = isCollection( args ) ? args.all() : args;

    const remaining = Object.keys( this.items ).filter( item => Object.keys( args ).indexOf( item ) === -1 );

    return new this.constructor( this.items ).only( remaining );
    
};
