'use strict';

/*
 * collection.partition(cb)
 *
 * The partition method may be combined with PHP array destructuring to separate
 *  elements that pass a given truth test from those that do not:
 *
 */

const { isArray, isObject } = require( '../common.js' );

module.exports = function partition( cb ) {

    let arrays = isArray( this.items ) ?
        [ new this.constructor( [] ), new this.constructor( [] ) ]:
        [ new this.constructor( {} ), new this.constructor( {} ) ];

    Object.keys( this.items ).forEach( key => {

        const value = this.items[key];

        const evaluated = cb( value )

        if ( isArray( this.items ) )
            evaluated ? arrays[0].push( value ) : arrays[1].push( value );
            
        if ( isObject( this.items ) )
            evaluated ? arrays[0].put( key, value ) : arrays[1].put( key, value );

    } )

    return new this.constructor( arrays );

}