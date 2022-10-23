'use strict';

/*
 * collection.prepend(value, key)
 *
 * The prepend method adds an item to the beginning of the collection
 *
 */

module.exports = function prepend( value, key ) {

    if ( key !== undefined )
        return this.put( key, value );

    this.items.unshift( value );

    return this;
}