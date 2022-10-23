'use strict';

/*
 * collection.pop()
 *
 * The pop method removes and returns the last item from the collection
 *
 */

const { isArray, isObject } = require( '../common' );

module.exports = function pop( count = 1 ) {

    if ( this.isEmpty() )
        return null;

    if ( isArray( this.items ) && count === 1 ) 
        return this.items.pop();

    if ( isArray( this.items ) ) 
        return this.items.splice( -count )


    const keys = Object.keys( this.items );

    if ( isObject( this.items ) && count === 1 ) {

        const lastKey = keys[keys.length - 1];

        const lastItem = this.items[lastKey];

        delete this.items[lastKey];

        return lastItem;
    }

    if ( isObject( this.items ) ) {

        const lastKeys = keys.slice( -count );

        let lastItems = {}

        lastKeys.forEach( key => {

            lastItems[key] = this.items[key]

            delete this.items[key] 

        } )         

        return lastItems;
    }

    return null;
};
