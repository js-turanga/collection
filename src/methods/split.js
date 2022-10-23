'use strict';

/*
 * collection.split(groups)
 *
 * The split method breaks a collection into the given number of groups
 *
 */

const { clone } = require( '../common' );

module.exports = function split( groups ) {

    const itemsPerGroup = Math.round( this.items.length / groups );

    const items = clone( this.items );

    const collection = [];

    for ( let iterator = 0; iterator < groups; iterator += 1 ) 
        collection.push( new this.constructor( items.splice( 0, itemsPerGroup ) ) );
    

    return new this.constructor( collection );
};