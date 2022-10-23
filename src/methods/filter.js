'use strict';

/*
 * collection.filter(cb)
 *
 * The filter method filters the collection using the given callback, keeping only those items that pass a given truth test
 *
 */

const { isArray, isObject } = require( '../common.js' );

module.exports = function filter( cb ) {

    let filtered = isArray( this.items ) ? [] : {};

    Object.keys( this.items ).forEach( key => {

        const value = this.items[key]

        if ( cb === undefined && !isFalsyValue( value ) )
            isArray( filtered ) ? filtered.push( value ) : filtered[key] = value;
           
        if ( cb !== undefined && cb( value, key, this.items ) )
            isArray( filtered ) ? filtered.push( value ) : filtered[key] = value;
    } )

    return new this.constructor( filtered );

};


/*
 * Detect falsy values
 *
 */
function isFalsyValue( item ) {

    if ( isArray( item ) && !item.length )
        return true;

    if ( isObject( item ) && !Object.keys( item ).length )
        return true;

    if ( !item )
        return true;

    return false;
}