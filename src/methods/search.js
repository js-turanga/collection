'use strict';

/*
 * collection.search(arg, strict)
 *
 * The search method searches the collection for the given value and returns its key if found. 
 * If the item is not found, false is returned:
 *
 */

const { isFunction, isNumber } = require( '../common.js' );

module.exports = function search( arg, strict ) {

    let result;

    result = Object.keys( this.items ).find( key => {

        if ( isFunction( arg ) )
            return arg( this.items[key], key );

        if ( strict )
            return this.items[key] === arg;

        return this.items[key] == arg;
    } )

    if ( result === undefined || result < 0 )
        return false;

    if ( isNumber( result ) )
        return parseInt( result )

    return result;
};
