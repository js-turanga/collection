'use strict';

/*
 * collection.implode(key, glue)
 *
 * The implode method joins items in a collection. Its arguments depend on the
 * type of items in the collection. If the collection contains arrays or 
 * objects, you should pass the key of the attributes you wish to join, 
 * and the "glue" string you wish to place between the values:
 *
 */

module.exports = function implode( key, glue ) {

    if ( glue === undefined )
        return this.items.join( key );

    return new this.constructor( this.items ).pluck( key ).all().join( glue );    
};
