/*
 * Test collection.union()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "union -", function() {

    it( 'should add the given object to the collection. '
    + 'If the given object contains keys that are already in the collection, '
    + 'the collections values will be preferred', function() {
        
        const collection = collect( {
            a: 'A',
            b: 'B',
        } );

        const union = collection.union( {
            a: 'AAA',
            c: 'CCC',
            b: 'BBB',
        } );

        expect( union.all() ).to.eql( {
            a: 'A',
            b: 'B',
            c: 'CCC',
        } );

        expect( collection.all() ).to.eql( {
            a: 'A',
            b: 'B',
        } );

        expect( union.all().b ).to.eql( 'B' );

        union.forget( 'b' );

        expect( union.all().b ).to.eql( undefined );
    } );
} );
