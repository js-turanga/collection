'use strict';

const { isArray, isObject } = require( './common' );

module.exports = function Collection( items = [] ) {

    if ( items !== undefined && items instanceof this.constructor ) 
        this.items = items.all();

    if ( items !== undefined && !isArray( items ) && !isObject( items ) ) 
        this.items = [ items ];

    if ( items !== undefined && ( isArray( items ) || isObject( items ) ) )
        this.items = items

    if ( items === undefined || items === null )
        this.items = []

};
