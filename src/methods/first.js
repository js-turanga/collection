'use strict';

/*
 * collection.first(cb, defaultValue)
 *
 * The first method returns the first element in the collection that passes a given truth test
 *
 */

const { isArray, isObject, isFunction, isCollection, values } = require( '../common' );

module.exports = function first( cb, defaultValue ) {

    let items = this.items

    if ( !isFunction( cb ) && isCollection( items ) && items.length )
        return items.first();

    if ( !isFunction( cb ) && isArray( items ) && items.length )
        return items[0];

    if ( !isFunction( cb ) && isObject( items ) && Object.keys( items ).length )
        return items[Object.keys( items )[0]];

    let result = defaultValue

    values( items ).some( item => {
        
        if ( cb( item ) ) 
            return result = item;
    } )

    return result;

};
