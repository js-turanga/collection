'use strict';

/*
 * collection.nth(n, offset)
 *
 * The nth method creates a new collection consisting of every n-th element
 *
 */

const { values } = require( '../common.js' );

module.exports = function nth( n, offset = 0 ) {

    const items = values( this.items );

    const collection = items
        .slice( offset )
        .filter( ( item, index ) => index % n === 0 );

    return new this.constructor( collection );

};
