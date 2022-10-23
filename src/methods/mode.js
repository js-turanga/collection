'use strict';

/*
 * collection.mode(key)
 *
 * The mode method returns the mode value of a given key
 *
 */

module.exports = function mode( key ) {

    const items = key !== undefined ? this.pluck( key ).all() : this.items;

    if ( Object.keys( items ).length === 0 )
        return null;

    let highestCount = 0

    let modeKey = []

    const keys = new this.constructor( [] )

    Object.keys( items ).forEach( key => { 
        keys.push( { key: items[key] } )
    } )
    
    keys.countBy( 'key' ).each( ( count, key ) => {

        let keyInt = parseInt( key ) || key;

        if ( !modeKey.includes( keyInt ) && count > highestCount ) {
            modeKey = [ keyInt ]
            highestCount = count
        }

        if ( !modeKey.includes( keyInt ) && count == highestCount )
            modeKey.push( keyInt )

    } )

    return modeKey;

};
