/*
 * Test collection.sortDesc()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "sortDesc -", function() {

    it( 'should sort the collection', function() {

        const collection = collect( [ 5, 3, 1, 2, 10, 4 ] );

        const sorted = collection.sortDesc();

        expect( sorted.all() ).to.eql( [ 10, 5, 4, 3, 2, 1 ] );
    } );


    it( 'should sort a collection of characters', function() {

        const collection = collect( [ 'c', 'a', 'b' ] );

        const sorted = collection.sortDesc();

        expect( sorted.all() ).to.eql( [ 'c', 'b', 'a' ] );
    } );


    it( 'should not modify the collection', function() {
        
        const collection = collect( [ 5, 3, 1, 2, 10, 4 ] );

        const sorted = collection.sortDesc();

        expect( sorted.all() ).to.eql( [ 10, 5, 4, 3, 2, 1 ] );
        expect( collection.all() ).to.eql( [ 5, 3, 1, 2, 10, 4 ] );
    } );
} );
