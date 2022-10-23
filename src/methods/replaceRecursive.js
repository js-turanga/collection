'use strict';

/*
 * collection.replaceRecursive(args)
 *
 * This method works like replace, but it will recur into arrays 
 * and apply the same replacement process to the inner values
 *
 */

const { isArray, isObject, isCollection } = require( '../common.js' );

module.exports = function replaceRecursive( args ) {

    if ( ! args )
        return this;

    if ( ! isArray( args ) && !isObject( args ) )
        return new this.constructor( replaceDeep( this.items, [ args ] ) );

    if ( isCollection( args ) )
        return new this.constructor( replaceDeep( this.items, args.all() ) );

    return new this.constructor( replaceDeep( this.items, args ) );
};



/**
 * Performs a deep replace of `source` into `target`.
 * Mutates `target` only but not its objects and arrays.
 *
 */
function replaceDeep( target, source ) {

    const mergedKeys = Object.keys( Object.assign( {}, target, source ) );

    const replaced = {}

    mergedKeys.forEach( key => {

        const targetValue = target[key];

        const sourceValue = source[key];

        if ( isObject( sourceValue ) || isArray( sourceValue ) ) 
            replaced[key] = replaceDeep( targetValue, sourceValue );

        // } else if ( isObject(targetValue) && sourceValue !== undefined ) {
        //     replaced[key] = Object.assign({}, sourceValue);
        
        // } else if ( isArray(targetValue) && sourceValue !== undefined ) {
        //     replaced[key] = sourceValue;

        else if ( ( isObject( targetValue ) || isArray( targetValue ) ) && sourceValue === undefined ) 
            replaced[key] = Object.assign( {}, targetValue );

        else if ( targetValue !== undefined && sourceValue === undefined ) 
            replaced[key] = targetValue;

        else 
            replaced[key] = sourceValue;
        
    } );

    return replaced;
}