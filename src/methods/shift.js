'use strict';

/*
 * collection.shift(count)
 *
 * The shift method removes and returns the first item from the collection
 *
 */

const { isArray } = require( '../common.js' );

module.exports = function shift( count = 1 ) {

    if ( this.isEmpty() )
        return null;

    if ( count === 1 ) {

        const firstKey = Object.keys( this.items )[0];

        const firstValue = this.items[firstKey];

        isArray( this.items ) ? 
            this.items.splice( 0, 1 ) :
            delete this.items[firstKey];

        return firstValue;
    }

    const collection = isArray( this.items ) ? [] : {}

    const poppedKeys = Object.keys( this.items ).slice( 0, count )

    poppedKeys.forEach( key => {

        isArray( this.items ) ? 
            collection.push( this.items[key] ) : 
            collection[key] = this.items[key];

    } )

    poppedKeys.forEach( key => { isArray( this.items ) ? this.items.splice( 0, 1 ) : delete this.items[key]; } )

    return new this.constructor( collection );

};
