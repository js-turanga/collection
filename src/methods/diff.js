'use strict';

/*
 * collection.diff(args)
 *
 * The diff method compares the collection against another collection or a plain PHP
 * array based on its values. This method will return the values in the original
 * collection that are not present in the given collection
 *
 */

const { isCollection } = require( '../common.js' );

module.exports = function diff( args ) {

    args = isCollection( args ) ? args.all() : args;

    const diffed = this.items.filter( ( item ) => args.indexOf( item ) === -1 );

    return new this.constructor( diffed );
    
};
