'use strict';

/*
 * collection.last(cb, defaultValue)
 *
 * The first method returns the first element in the collection that passes a given truth test
 *
 */

const { isArray, isFunction, clone } = require( '../common' );

module.exports = function last( cb, defaultValue ) {

    let items = clone( this.items )

    if ( isFunction( cb ) )
        items = this.filter( cb ).all();
 
    if ( ( isArray( items ) && !items.length ) || ( !Object.keys( items ).length ) )
        return defaultValue;

    if ( isArray( items ) )
        return items[items.length - 1];

    const keys = Object.keys( items );

    return items[keys[keys.length - 1]];

};
