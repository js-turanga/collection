'use strict';

/*
 * collection.mergeRecursive(args)
 *
 * The mergeRecursive method merges the given array or collection recursively 
 * with the original collection. If a string key in the given items matches
 * a string key in the original collection, then the values for these keys
 * are merged together into an array, and this is done recursively
 *
 */

const { isArray, isObject, isCollection } = require( '../common' );

module.exports = function mergeRecursive( args ) {

    if ( ! args )
        return this;

    if ( isCollection( args ) )
        return new this.constructor( mergeDeep( this.items, args.all() ) );

    return new this.constructor( mergeDeep( this.items, args ) );
};


/**
 * Performs a deep merge of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).
 */
function mergeDeep( target, source ) {

    const mergedKeys = Object.keys( Object.assign( {}, target, source ) );

    const merged = {}

    mergedKeys.forEach( key => {

        const targetValue = target[key];

        const sourceValue = source[key];

        if ( isArray( targetValue ) && isArray( sourceValue ) ) 
            merged[key] = targetValue.concat( sourceValue );
        
        else if ( isObject( targetValue ) && isObject( sourceValue ) ) 
            merged[key] = mergeDeep( Object.assign( {}, targetValue ), sourceValue );

        else if ( targetValue === undefined && sourceValue !== undefined ) 
            merged[key] = sourceValue;

        else if ( targetValue !== undefined && sourceValue === undefined ) 
            merged[key] = target[key];

        else if ( targetValue !== sourceValue ) 
            merged[key] = [].concat( target[key], source[key] );

        else 
            merged[key] = sourceValue;
        
    } );

    return merged;
}