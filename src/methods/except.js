'use strict';

/*
 * collection.except(...args)
 *
 * The except method returns all items in the collection except for those with the specified keys
 *
 */

const { isArray } = require( '../common.js' );

module.exports = function except( ...args ) {

    args = isArray( ...args ) ? args[0] : args;

    if ( isArray( this.items ) ) {
        const collection = this.items.filter( item => args.indexOf( item ) === -1 );

        return new this.constructor( collection );
    }

    const collection = {};

    Object.keys( this.items ).forEach( property => {

        if ( args.indexOf( property ) === -1 )
            collection[property] = this.items[property];
    } );

    return new this.constructor( collection );
};
