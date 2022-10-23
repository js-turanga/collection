'use strict';

/*
 * collection.toArray()
 *
 * Converts collection to array
 *
 */

const { isArray } = require( '../common.js' );

module.exports = function toArray() {

    return convertToArray( this.items );

};


/*
 * Convert To Array
 */
function convertToArray( items ) {

    return Object
        .entries( items )
        .map( ( [ key, value ] ) => {

            return isArray( value ) ?
                [ key, convertToArray( value ) ] :
                [ key, value ];
        } );

}