'use strict';

/*
 * collection.contains(key)
 * collection.contains(key, value)
 * collection.contains(function(value, key) { return value > 0 })
 *
 * The contains method determines whether the collection contains a given item
 *
 */

const { isArray, isObject, isFunction, isCollection } = require( '../common.js' );

module.exports = function contains( key, value ) {

    if ( isFunction( key ) ) 
        return ( this.items.filter( ( item, index ) => key( item, index ) ).length > 0 );

    if ( value !== undefined ) {
        return isArray( this.items )
            ? this.items.filter( item => item[key] !== undefined && item[key] === value ).length > 0
            : this.items[key] !== undefined && this.items[key] === value;
    }

    if ( isArray( this.items ) ) 
        return this.items.indexOf( key ) !== -1;

    if ( isObject( this.items ) ) 
        return key in this.items;

    if ( isCollection( this.items ) ) 
        return this.has( key );

    return false;
    
};
