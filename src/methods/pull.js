'use strict';

/*
 * collection.pull(key, defaultValue)
 *
 * The pull method removes and returns an item from the collection by its key
 *
 */

const { isFunction } = require( '../common' );

module.exports = function pull( key, defaultValue ) {

    let value;

    if ( key === undefined )
        return null;

    if ( this.items[key] )
        value = this.items[key]

    if ( value === undefined && defaultValue !== undefined )
        value = isFunction( defaultValue ) ? defaultValue() : defaultValue;

    delete this.items[key];

    return value || null;
};
