'use strict';

/*
 * collection.whenNotEmpty(cb, final)
 *
 * The whenNotEmpty method will execute the given callback when the collection is not empty
 */

const { isArray } = require( '../common' );

module.exports = function whenNotEmpty( cb, final ) {

    if ( isArray( this.items ) && this.isNotEmpty() )
        return cb( this );

    if ( Object.keys( this.items ).length )
        return cb( this );

    if ( final !== undefined ) {

        if ( isArray( this.items ) && this.isEmpty() )
            return final( this );

        if ( ! Object.keys( this.items ).length )
            return final( this );

    }

    return this;
};