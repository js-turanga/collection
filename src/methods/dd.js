'use strict';

/*
 * collection.dd()
 *
 * The dd method dumps the collection's items and ends execution of the script
 *
 */

module.exports = function dd() {

    this.dump();

    if ( typeof process !== 'undefined' ) 
        process.exit( 1 );
    
};
