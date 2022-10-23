'use strict';

/*
 * collection.reduce(cb, accumulator)
 *
 * The reduce method reduces the collection to a single value, passing 
 * the result of each iteration into the subsequent iteration
 *
 */

module.exports = function reduce( cb, accumulator ) {

    let reduced = accumulator !== undefined ? accumulator : null;

    Object.keys( this.items ).forEach( key => {

        const value = this.items[key]

        reduced = cb( reduced, value, key )

    } )

    return reduced;
};
