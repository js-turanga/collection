/*
 * Test collection.intersectByKeys()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "intersectByKeys -", function() {

    it( 'should remove any keys from the original collection that are not present in the given array or collection', function() {

        const collection = collect( {
            name: 'Sadio Mané',
            number: 19,
        } );

        const collection2 = collect( {
            name: 'Luis Suarez',
            number: 9,
            club: 'FC Barcelona',
        } );

        expect( collection.intersectByKeys( { name: 'Steven Gerrard' } ).all() ).to.eql( { name: 'Sadio Mané' } );

        expect( collection.intersectByKeys( collection2 ).all() ).to.eql( {
            name: 'Sadio Mané',
            number: 19,
        } );
    } );
} );
