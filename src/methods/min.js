'use strict';

/*
 * collection.min(key)
 *
 * The min method returns the minimum value of a given key:
 *
 */

const { isString } = require( '../common.js' );

module.exports = function min( key ) {

    const items = isString( key ) ?
        this.items.filter( item => item[key] !== undefined ).map( item => item[key] ) :
        this.items;

    return Math.min( ...items );  
};