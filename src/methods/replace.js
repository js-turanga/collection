'use strict';

/*
 * collection.replace(items)
 *
 * The replace method behaves similarly to merge; however, in addition to overwriting
 * matching items that have string keys, the replace method will also overwrite 
 * items in the collection that have matching numeric keys
 *
 */

const { isArray, isCollection } = require( '../common.js' );

module.exports = function replace( items ) {

    if ( ! items )
        return this;

    if ( isArray( items ) ) {
        const replaced = this.items.map( ( value, index ) => items[index] || value );

        return new this.constructor( replaced );
    }

    if ( isCollection( items ) ) {
        const replaced = Object.assign( {}, this.items, items.all() );

        return new this.constructor( replaced );
    }

    const replaced = Object.assign( {}, this.items, items );

    return new this.constructor( replaced );
};
