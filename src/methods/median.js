'use strict';

/*
 * collection.median(key)
 *
 * The median method returns the median value of a given key
 *
 */

module.exports = function median( key ) {

    const source = key !== undefined ? this.pluck( key ).all() : this.items;

    const items = source.filter( item => item !== undefined && item !== null ).sort();

    const length = this.count();

    if ( length === 0 )
        return null;

    if ( length % 2 === 0 )
        return ( items[( length / 2 ) - 1] + items[length / 2] ) / 2;

    return items[Math.floor( length / 2 )];
};
