'use strict';

/*
 * collection.sort(cb)
 *
 * The sort method sorts the collection. The sorted collection keeps the original array keys, 
 * so in the following example we will use the values method to reset the keys to consecutively numbered indexes
 *
 */

const { isFunction } = require( '../common' );

module.exports = function sort( cb ) {

    const items = this.values().all();

    if ( isFunction( cb ) )
        return new this.constructor( items.sort( cb ) );

    if ( this.every( item => typeof item === 'number' ) )
        return new this.constructor( items.sort( ( a, b ) => a - b ) );

    return new this.constructor( items.sort() );

};
