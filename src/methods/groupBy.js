'use strict';

/*
 * collection.groupBy(key)
 * collection.groupBy(item => { return item == xyz })
 *
 * The groupBy method groups the collection's items by a given key
 * Multiple group criterias are not supported right now
 */

const { isString, isFunction, isNumber, nested } = require( '../common.js' );

module.exports = function groupBy( arg ) {

    const collection = {};

    if ( arg === undefined )
        return new this.constructor( this.items );

    this.items.forEach( ( item, index ) => {
        
        let key = '';

        if ( isFunction( arg ) ) 
            key = arg( item, index );

        if ( ( isNumber( arg ) || isString( arg ) ) && ( nested( item, arg ) || nested( item, arg ) === 0 ) ) 
            key = nested( item, arg );

        if ( collection[key] === undefined ) 
            collection[key] = new this.constructor( [] );

        collection[key].push( item );
    } );

    return new this.constructor( collection );
    
};