'use strict';

/*
 * collection.every(cb)
 *
 * The every method may be used to verify that all elements of a collection pass a given truth test
 *
 */

const { values } = require( '../common.js' );

module.exports = function every( cb ) {

    const items = values( this.items );

    return items.every( cb );
    
};
