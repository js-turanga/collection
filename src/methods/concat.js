'use strict';

/*
 * collection.concat(args)
 *
 * The concat method appends the given array or collection's values onto the end of another collection:
 *
 */

const { isArray, isObject, isCollection, clone } = require( '../common.js' );

module.exports = function concat( args ) {

    let extension = args;

    // transform given arguments
    if ( isCollection( args ) )  
        extension = args.all(); 

    else if ( isObject( args ) ) {
        extension = [];

        Object.keys( args ).forEach( key => { extension.push( args[key] ) } );

    } else if ( isArray( args ) && isArray( args[1] ) ) {
        extension = [];

        args.forEach( key => { extension.push( key[1] ) } );
    }

    // clone current collection
    const collection = clone( this.items ); 

    // push extending items to collection
    extension.forEach( value => {

        isObject( value ) ?
            Object.keys( value ).forEach( key => collection.push( value[key] ) ) :
            collection.push( value );
    } );

    return new this.constructor( collection );
    
};