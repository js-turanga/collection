/*
 * Test collection.diff()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "diff -", function() {

    it( 'should return the missing values from collection', function() {
        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        const diff = collection.diff( [ 1, 2, 3, 9 ] );

        expect( diff.all() ).to.eql( [ 4, 5 ] );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 5 ] );
    } );


    it( 'should accept a collection as an argument', function() {
        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        const diffCollection = collect( [ 1, 2, 3, 9 ] );

        const diff = collection.diff( diffCollection );

        expect( diff.all() ).to.eql( [ 4, 5 ] );
    } );
} );
