'use strict';

/*
 * collection.firstWhere( ...args )
 *
 * The firstWhere method returns the first element in the collection with the given key / value pair
 *
 */

module.exports = function firstWhere( ...args ) {

    return this.where( ...args ).first() || null;
};
