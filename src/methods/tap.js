'use strict';

/*
 * collection.tap(cb)
 *
 * The tap method passes the collection to the given callback, allowing you to "tap" into
 * the collection at a specific point and do something with the items while not affecting
 * the collection itself. The collection is then returned by the tap method:
 */

module.exports = function tap( cb ) {

    cb( this );

    return this; 
};