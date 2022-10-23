'use strict';

/*
 * collection.max(key)
 *
 * The max method returns the maximum value of a given key
 *
 */

const { isString } = require( '../common' );

module.exports = function max( key ) {

    const items = isString( key ) ?
        this.items.filter( item => item[key] !== undefined ).map( item => item[key] ) :
        this.items;

    return Math.max( ...items );
};
