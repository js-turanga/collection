'use strict';

/*
 * collection.countBy(cb)
 *
 * The countBy method counts the occurrences of values in the collection.
 * By default, the method counts the occurrences of every element, allowing
 * you to count certain "types" of elements in the collection
 *
 */

module.exports = function countBy( cb = value => value ) {

    return new this.constructor( this.items )
        .groupBy( cb )
        .map( value => value.count() );
        
};
