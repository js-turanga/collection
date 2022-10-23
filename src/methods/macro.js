'use strict';

/*
 * collection.macro(name, cb)
 *
 * The static macro method allows you to add methods to the Collection class at run time. 
 * Refer to the documentation on extending collections for more information.
 */

module.exports = function macro( name, cb ) {

    this.constructor.prototype[name] = cb;
    
};
