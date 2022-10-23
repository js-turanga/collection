'use strict';

/*
 * collection.collapse()
 *
 * The collapse method collapses a collection of arrays into a single, flat collection
 *
 */

module.exports = function collapse() {

    return new this.constructor( [].concat( ...this.items ) );
    
};
