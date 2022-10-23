'use strict';

/*
 * collection.splice(index, limit, replace)
 *
 * The splice method removes and returns a slice of items starting at the specified index
 *
 */

const { isArray } = require( '../common' );

module.exports = function splice( index, limit, replace ) {

    const sliced = this.slice( index, limit );

    this.items = this.diff( sliced.all() ).all();

    if ( isArray( replace ) ) {

        for ( let iterator = 0, { length } = replace; iterator < length; iterator += 1 ) 
            this.items.splice( index + iterator, 0, replace[iterator] );
        
    }

    return sliced;

};