'use strict';

/*
 * collection.combine()
 *
 * The combine method combines the values of the collection, as keys, with the values of another array or collection
 *
 */

const { isString, isArray, isObject } = require( '../common.js' );

module.exports = function combine( args ) {

    const values = args instanceof this.constructor ? args.all() : args;

    const collection = {};

    // collection and arguments of type array
    if ( isArray( this.items ) && isArray( values ) ) {
        this.items.forEach( ( key, index ) => {
            collection[key] = values[index];
        } );
    }

    // collection of type array, arguments of type object
    if ( isArray( this.items ) && isObject( values ) ) {
        this.items.forEach( ( key, index ) => {
            collection[key] = values[Object.keys( values )[index]];
        } );
    }

    // collection and arguments of type object
    if ( isObject( this.items ) && isObject( values ) ) {
        Object.keys( this.items ).forEach( ( key, index ) => {
            collection[this.items[key]] = values[Object.keys( values )[index]];
        } );
    }

    // collection of type array, argument mixed
    if ( isArray( this.items ) && !isArray( values ) && !isObject( values ) ) 
        collection[this.items[0]] = values;

    // collection is of type string, argument of type array
    if ( isString( this.items ) && isArray( values ) ) 
        [ collection[this.items] ] = values;

    // collection is of type string, argument mixed
    if ( isString( this.items ) && !isArray( values ) && !isObject( values ) ) 
        collection[this.items] = values;

    return new this.constructor( collection );
    
};
