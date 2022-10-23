'use strict';

/*
 * collection.put(key, value)
 *
 * The put method sets the given key and value in the collection
 *
 */

module.exports = function put( key, value ) {

    this.items[key] = value;

    return this;
};
