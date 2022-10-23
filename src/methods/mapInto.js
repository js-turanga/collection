'use strict';

/*
 * collection.mapInto(className)
 *
 * The mapInto() method iterates over the collection, creating a new instance
 * of the given class by passing the value into the constructor
 *
 */

module.exports = function mapInto( className ) {

    return this.map( ( value, key ) => new className( value, key ) );
    
};
