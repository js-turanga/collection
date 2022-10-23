'use strict';

/*
 * collection.make(items)
 *
 * The static make method creates a new collection instance. See the Creating Collections section.
 *
 */

const { isCollection } = require( '../common' );

module.exports = function make( items ) {

    if ( isCollection( items ) )
        items = items.all()

    return new this.constructor( items );

};
