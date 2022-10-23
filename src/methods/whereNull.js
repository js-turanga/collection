'use strict';

/*
 * collection.whereNull(key)
 *
 * The whereNull method returns items from the collection where the given key is null
 */

module.exports = function whereNull( key = null ) {

    return this.where( key, '===', null );

};