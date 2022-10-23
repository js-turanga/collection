'use strict';

/*
 * collection.whereInstanceOf(type)
 *
 * The whereInstanceOf method filters the collection by a given class type
 */

module.exports = function whereInstanceOf( type ) {

    return this.filter( item => item instanceof type );

};