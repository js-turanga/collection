'use strict';

/*
 * collection.crossJoin(args)
 *
 * The crossJoin method cross joins the collection's values among the given arrays
 * or collections, returning a Cartesian product with all possible permutations
 *
 */

const { values } = require( '../common.js' );

module.exports = function crossJoin( ...args ) {

    let joinVal = []

    args.forEach( arg => {
        arg.constructor.name === 'Collection' ?
            joinVal.push( arg.all() ) :
            joinVal.push( arg );
    } )

    const current = values( this.items );

    const collection = join( current, ...joinVal );

    return new this.constructor( collection );
    
};

const join = ( ...a ) => a.reduce( ( acc, curr ) => acc.flatMap( ( d ) => curr.map( ( e ) => [ d, e ].flat() ) ) );
