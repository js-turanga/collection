'use strict';

/*
 * collection.times(times, cb)
 *
 * The static times method creates a new collection by invoking the given closure a specified number of times
 */

module.exports = function times( times, cb ) {

    for ( let iterator = 1; iterator <= times; iterator += 1 ) 
        this.items.push( cb( iterator ) );
    
 
    return this;
};