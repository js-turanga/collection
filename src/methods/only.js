'use strict';

/*
 * collection.only(...args)
 *
 * The only method returns the items in the collection with the specified keys
 *
 */

const { isArray, isObject } = require( '../common.js' );

module.exports = function only( ...args ) {

    args = isArray( args[0] ) ? args[0] : args;

    const obj = isArray( this.items ) ? [] : {};

    Object.keys( this.items ).forEach( key => {

        let index = isArray( this.items ) ? this.items[key] : key

        if ( isArray( obj ) & args.includes( index ) ) 
            obj.push( this.items[key] ); 

        if ( isObject( obj ) & args.includes( index ) ) 
            obj[key] = this.items[key]; 
    } )

    return new this.constructor( obj );    
};