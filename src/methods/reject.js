'use strict';

/*
 * collection.reject(cb)
 *
 * The reject method filters the collection using the given closure. 
 * The closure should return true if the item should be removed from the resulting collection
 *
 */

module.exports = function reject( cb ) {

    return new this.constructor( this.items ).filter( item => !cb( item ) );

};
