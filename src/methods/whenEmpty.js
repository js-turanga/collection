'use strict';

/*
 * collection.whenEmpty(cb, final)
 *
 * The whenEmpty method will execute the given callback when the collection is empty
 * A second closure may be passed to the whenEmpty method that will be executed when the collection is not empty
 */

const { isArray } = require( '../common' );

module.exports = function whenEmpty( cb, final ) {

    if ( isArray( this.items ) && this.isEmpty() )
        return cb( this );

    if ( ! Object.keys( this.items ).length )
        return cb( this );


    if ( final !== undefined ) {
    
        if ( isArray( this.items ) && this.isEmpty() )
            return final( this );

        if ( Object.keys( this.items ).length )
            return final( this );
    }

    return this;
};