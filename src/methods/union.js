'use strict';

/*
 * collection.union(arg)
 *
 * The union method adds the given array to the collection. If the given array contains keys that 
 * are already in the original collection, the original collection's values will be preferred
 */

const { isArray } = require( '../common' );

module.exports = function union( arg ) {

    const collection = isArray( this.items ) ? [] : {}

    Object.keys( arg ).forEach( key => {

        collection[key] = this.items[key] === undefined ? arg[key] : this.items[key];

    } );

    return new this.constructor( collection );
};