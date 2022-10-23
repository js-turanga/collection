'use strict';

/*
 * collection.chunk(size)
 *
 * The chunk method breaks the collection into multiple, smaller collections of a given size
 *
 */

const { isArray, isObject } = require( '../common.js' );

module.exports = function chunk( size ) {

    const chunks = [];

    // collection items are neither of type array nor object
    if ( !isArray( this.items ) && !isObject( this.items ) ) 
        return new this.constructor( [ this.items ] );

    // collection length
    const collLen = isArray( this.items ) ? 
        this.items.length : 
        Object.keys( this.items ).length;

    // collection items are of type array
    if ( isArray( this.items ) ) {

        for ( let i = 0; i < collLen; i += size ) {

            const items = this.items.slice( i, i + size );

            const coll = new this.constructor( items );

            chunks.push( coll );
        }
    }

    // collection items are of type object
    if ( isObject( this.items ) ) {

        for ( const cols = Object.entries( this.items ); cols.length; ) {

            const items = cols.splice( 0, size ).reduce( ( o, [ k, v ] ) => ( o[k] = v, o ), {} );

            const coll = new this.constructor( items );

            chunks.push( coll );
        }
    }

    return new this.constructor( chunks );
    
};
