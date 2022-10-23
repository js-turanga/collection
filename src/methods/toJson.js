'use strict';

/*
 * collection.toJson()
 *
 * Converts collection to json representation
 *
 */

const { isArray } = require( '../common.js' );

module.exports = function toJson() {

    if ( !isArray( this.items ) ) 
        return this.items;

    return deepConvert( this.items );
    
};

function deepConvert( arr ) {
    return arr.reduce( ( acc, item ) => {
        acc[item[0]] = isArray( item[1] ) ? deepConvert( item[1] ) : item[1];

        return acc;
    }, {} );
}
