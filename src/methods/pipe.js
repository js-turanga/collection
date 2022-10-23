'use strict';

/*
 * collection.pipe(cb)
 *
 * The pipe method passes the collection to the given closure and returns the result of the executed closure
 *
 */

module.exports = function pipe( cb ) {

    return cb( this );

}