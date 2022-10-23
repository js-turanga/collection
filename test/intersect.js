/*
 * Test collection.intersect()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "intersect -", function() {

    it( 'should return the matching values from collection', function() {

        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        const intersect = collection.intersect( [ 1, 2, 3, 9 ] );

        expect( intersect.all() ).to.eql( [ 1, 2, 3 ] );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 5 ] );
    } );


    it( 'should accept a collection as an argument', function() {
        
        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        const intersect = collection.intersect( collect( [ 1, 2, 3, 9 ] ) );

        expect( intersect.all() ).to.eql( [ 1, 2, 3 ] );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 5 ] );
    } );
} );
