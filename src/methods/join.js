'use strict';

/*
 * collection.join(glue, final)
 *
 * The join method joins the collection's values with a string. 
 * Using this method's second argument, you may also specify 
 * how the final element should be appended to the string
 *
 */

module.exports = function join( glue, lastGlue ) {

    const items = this.values(); 

    const count = items.count();

    if ( count === 0 )
        return '';

    if ( count === 1 )
        return items.first();

    if ( lastGlue === undefined )
        return items.implode( glue );

    const lastItem = items.pop();

    return items.implode( glue ) + lastGlue + lastItem;

};
