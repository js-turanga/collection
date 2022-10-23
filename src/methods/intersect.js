'use strict';

/*
 * collection.intersect(values)
 *
 * TThe intersect method removes any values from the original collection 
 * that are not present in the given array or collection. The resulting 
 * collection will preserve the original collection's keys
 *
 */

const { isCollection } = require( '../common.js' );

module.exports = function intersect( values ) {

    if ( isCollection( values ) )
        values = values.all();

    const collection = this.items.filter( item => values.indexOf( item ) !== -1 );

    return new this.constructor( collection );
};
