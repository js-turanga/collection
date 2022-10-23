'use strict';

/*
 * collection.whereNotBetween()
 *
 *
 */

const { isArray, nested } = require( '../common' );

module.exports = function whereNotBetween( key, values ) {

    const min = Math.min( ...values );
  
    const max = Math.max( ...values );  

    const collection = isArray( this.items ) ? [] : {}

    Object.keys( this.items ).forEach( index => {

        const value = nested( this.items[index], key )

        if ( value < min || value > max )

        { isArray( this.items ) ? 
            collection.push( this.items[index] ) :
            collection[key] = this.items[index]; }

    } )

    return new this.constructor( collection );

};
