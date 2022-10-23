'use strict';

/*
 * collection.pluck(value)
 * collection.pluck(value, key)
 *
 * The pluck method retrieves all of the values for a given key
 * You may also specify how you wish the resulting collection to be keyed
 * You can use "dot notation" to access nested values which also supports "wildcard"
 *
 */

const { isArray, isObject, clone } = require( '../common.js' );

module.exports = function pluck( value, key ) {

    let keyValueMap, valuesMap, keysMap, sourceKeys, destKey;
 
    let collection = value !== undefined && key !== undefined ? {} : [];

    // build keyValueMap
    keyValueMap = keyMap( this.items );

    // build value map
    if ( value !== undefined ) 
        valuesMap = filterKeyPath( keyValueMap, value );

    // build value map
    if ( key !== undefined ) 
        keysMap = filterKeyPath( keyValueMap, key );

    // source keys
    sourceKeys = Object.keys( this.items );

    if ( key === undefined )
        sourceKeys.forEach( key => { collection[key] = null } )

    // build collection based on values
    valuesMap.forEach( ( item, index ) => {

        let vIndex = index.split( '.' )[0]

        if ( key === undefined && collection[vIndex] !== null )
            collection.push( item );

        if ( key === undefined && collection[vIndex] === null )
            collection[vIndex] = item;

        if ( key !== undefined ) {

            destKey = ''
            keysMap.forEach( ( value, k ) => { if ( k.split( '.' )[0] == vIndex ) 
                destKey = value } )

            collection[destKey] = item;
        }
    } );

    // append keys if values for key doesn't exist
    if ( key !== undefined )
    { keysMap.forEach( item => { if ( collection[item] === undefined ) 
        collection[item] = null } ); }

    return new this.constructor( collection );
};
 

/*
 * Build nested key/value map
 */
function keyMap( items, key, collector = new Map() ) {

    if ( !isArray( items ) && !isObject( items ) )
        collector.set( key, items )

    if ( isArray( items ) || isObject( items ) ) {

        Object.entries( items ).forEach( item => {

            let label = key == undefined ? item[0] : `${key}.${item[0]}`;

            collector.set( label, item[1] );

            if ( isArray( item[1] ) || isObject( item[1] ) )
                keyMap( item[1], label, collector );

        } );
    }

    return collector;

}


/*
 * Filter keyMap by filter
 */
function filterKeyPath( keyMap, filter ) {

    const kMap = clone( keyMap );

    // filter depth
    const depth = `0.${filter}`.split( '.' ).length;

    // if filter includes wildcard character, replace with regex pattern
    if ( filter.includes( '*' ) ) 
        filter = filter.replace( /[*]{1}/, '.*' );

    // build regex instance
    const re = new RegExp( `[0-9]{1,}.${filter}` + '$' );

    kMap.forEach( ( item, key ) => {

        if ( ! ( re.exec( key ) !== null && key.split( '.' ).length === depth ) )
            kMap.delete( key )

    } )

    return kMap;
}