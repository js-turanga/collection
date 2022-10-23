'use strict';

/*
 * collection.forPage(page, chunk)
 *
 * The forPage method returns a new collection containing the items that would be present
 * on a given page number. The method accepts the page number as its first argument 
 * and the number of items to show per page as its second argument
 *
 */

const { isArray } = require( '../common' );

module.exports = function forPage( page, chunk ) {

    let collection = isArray( this.items ) ? [] : {};

    Object
        .keys( this.items )
        .slice( ( page * chunk ) - chunk, page * chunk )
        .forEach( key => { 
            isArray( this.items ) ? 
                collection.push( this.items[key] ) : 
                collection[key] = this.items[key]; 
        } );

    return new this.constructor( collection );

};
