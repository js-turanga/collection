'use strict';

/*
 * collection.whereNotNull()
 *
 * The whereNotNull method returns items from the collection where the given key is not null
 */

module.exports = function whereNotNull( key = null ) {

    return this.where( key, '!==', null );

};