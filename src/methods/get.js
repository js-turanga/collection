'use strict';

/*
 * collection.get()
 *
 * The get method returns the item at a given key. If the key does not exist, null is returned
 *
 */

module.exports = function get( key, defaultValue ) {

    if ( this.items[key] !== undefined )
        return this.items[key];

    return defaultValue;
};
