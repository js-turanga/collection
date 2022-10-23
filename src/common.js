'use strict';

module.exports = {

    /**
    * @returns {boolean}
    */
    isString: ( item ) => typeof item === 'string',

    /**
    * @returns {boolean}
    */
    isNumber: ( item ) => !isNaN( item ),

    /**
    * @returns {boolean}
    */
    isArray: ( item ) => Array.isArray( item ),

    /**
    * @returns {boolean}
    */
    isObject: ( item ) => typeof item === 'object' && Array.isArray( item ) === false && item !== null,

    /**
    * @returns {boolean}
    */
    isFunction: ( item ) => typeof item === 'function',

    /**
    * @returns {boolean}
    */
    isCollection: ( item ) => item !== null && item !== undefined && item.constructor.name === 'Collection',

    /**
    * @returns {*}
    */
    clone: ( items ) => {

        if ( items.constructor.name === 'Collection' )
            return items;

        if ( items instanceof Map )
            return new Map( items );

        if ( Array.isArray( items ) )
            return Array.from( items );

        if ( !Array.isArray( items ) && typeof items === 'object' )
            return JSON.parse( JSON.stringify( items ) );

        return items;
    },

    /**
    * @returns {*}
    */
    nested: ( object, key ) => {

        try {
            return key.split( '.' ).reduce( ( obj, prop ) => obj[prop], object );

        } catch ( err ) {
            return object;

        }     
    },

    /**
    * @returns {array}
    */
    values: ( items ) => {

        if ( Array.isArray( items ) ) 
            return [ ...items ];

        if ( items.constructor.name === 'Collection' ) 
            return [].concat( items.all() )
        
        return Object.keys( items ).map( key => items[key] );
    },
};
