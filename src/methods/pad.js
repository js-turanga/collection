'use strict';

/*
 * collection.pad(size, value)
 *
 * The pad method will fill the array with the given value until the array reaches the specified size. 
 * This method behaves like the array_pad PHP function. To pad to the left, you should specify a 
 * negative size. No padding will take place if the absolute value of the given size is less 
 * than or equal to the length of the array:
 *
 */

const { isArray, isObject, clone } = require( '../common.js' );

module.exports = function pad( size, value ) {

    let padSize

    let shift = 0

    const abs = Math.abs( size );

    const count = this.count();

    const items = clone( this.items );

    if ( ( padSize = abs - count ) <= 0 )
        return this;

    const padKeys = Array.from( { length: padSize }, ( v, i ) => i )

    if ( isArray( items ) && size < 0 )
        padKeys.forEach( () => { items.unshift( value ); } );

    if ( isArray( items ) && size > 0 )
        padKeys.forEach( () => { items.push( value ); } );

    if ( isObject( items ) ) {
        Object.keys( padKeys ).forEach( key => { 

            if ( items[+key+shift] !== undefined )  
                shift += 1; 

            items[+key+shift] = value;   
        } )
    }

    return new this.constructor( items );

};
