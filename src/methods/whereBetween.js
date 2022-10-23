'use strict';

/*
 * collection.whereBetween(key, values)
 *
 * The whereBetween method filters the collection by determining if a specified item value is within a given range
 */

const { isArray, nested } = require( '../common' );

module.exports = function whereBetween( key, values ) {

    const min = Math.min( ...values );
  
    const max = Math.max( ...values );  

    const collection = isArray( this.items ) ? [] : {}

    Object.keys( this.items ).forEach( index => {

        const value = nested( this.items[index], key )

        if ( value >= min && value <= max )

        { isArray( this.items ) ? 
            collection.push( this.items[index] ) :
            collection[key] = this.items[index]; }

    } )

    return new this.constructor( collection );

};