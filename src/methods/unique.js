'use strict';

/*
 * collection.unique(arg)
 *
 * The unique method returns all of the unique items in the collection. 
 * The returned collection keeps the original array keys, so in the 
 * following example we will use the values method to reset the 
 * keys to consecutively numbered indexes
 */

const { isArray, isFunction } = require( '../common' );

module.exports = function unique( arg ) {

    const collection = isArray( this.items ) ? [] : {}

    const existingKeys = [];

    Object.keys( this.items ).forEach( key => {

        const compare = arg === undefined ?
            this.items[key] : 
            ( isFunction( arg ) ? arg( this.items[key], key, this.items ) : this.items[key][arg] );

        if ( existingKeys.indexOf( compare ) === -1 ) {

            existingKeys.push( compare );

            isArray( this.items ) ? 
                collection.push( this.items[key] ) :
                collection[key] = this.items[key];

        }

    } )

    return new this.constructor( collection );
    
};