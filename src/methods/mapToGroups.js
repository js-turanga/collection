'use strict';

/*
 * collection.mapToGroups(cb)
 *
 * The mapToGroups method groups the collection's items by the given closure. 
 * The closure should return an associative array containing a single 
 * key / value pair, thus forming a new collection of grouped values
 *
 */

module.exports = function mapToGroups( cb ) {

    const collection = {};

    this.items.forEach( ( item, key ) => {

        const [ keyed, value ] = cb( item, key );

        collection[keyed] === undefined ?
            collection[keyed] = [ value ] :
            collection[keyed].push( value );

    } );

    return new this.constructor( collection );    
};
