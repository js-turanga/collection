'use strict';

/*
 * collection.push()
 *
 * The push method appends an item to the end of the collection
 *
 */

const { isArray } = require( '../common' );

module.exports = function push( ...items ) {

    if ( isArray( this.items ) ) 
        this.items.push( ...items );

    else {
        Object.values( items ).forEach( ( item ) => {
            Object.assign( this.items, item );
        } );
    }

    return this;
};
