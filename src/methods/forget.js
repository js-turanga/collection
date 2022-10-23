'use strict';

/*
 * collection.forget(key)
 *
 * The forget method removes an item from the collection by its key
 * Unlike most other collection methods, forget does not return a new
 * modified collection; it modifies the collection it is called on.
 *
 */

const { isArray } = require( '../common' );

module.exports = function forget( key ) {

    if ( isArray( this.items ) ) 
        this.items.splice( key, 1 );

    else 

        delete this.items[key];
    

    return this;
};
