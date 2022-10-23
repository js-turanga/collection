'use strict';

/*
 * collection.keyBy(key)
 *
 * The keyBy method keys the collection by the given key. If multiple items 
 * have the same key, only the last one will appear in the new collection
 *
 */

const { isFunction, nested } = require( '../common.js' );

module.exports = function keyBy( key ) {

    const collection = {};

    this.items.forEach( item => {

        let index = isFunction( key ) ? key( item ) : nested( item, key ) || ''

        collection[index] = item;
    } );

    return new this.constructor( collection );

};
