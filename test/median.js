/*
 * Test collection.median()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "median -", function() {

    it( 'should return the median value of collection values', function() {

        const collection = collect( [ 10, 40, 20, 10 ] );

        expect( collection.median() ).to.eql( 15 );
        expect( collect( [ 1, 3, 3, 6, 7, 8, 9 ] ).median() ).to.eql( 6 );
    } );


    it( 'should return the median value of collection values by key', function() {
            
        const collectionOfObjects = collect( [
            { foo: 1 },
            { foo: 1 },
            { foo: 2 },
            { foo: 4 },
        ] );

        expect( collectionOfObjects.median( 'foo' ) ).to.eql( 1.5 );

        const collectionOfObjects2 = collect( [
            { foo: 1 },
            { foo: 3 },
            { foo: 9 },
            { foo: 7 },
            { foo: 6 },
            { foo: 8 },
            { foo: 3 },
        ] );

        expect( collectionOfObjects2.median( 'foo' ) ).to.eql( 6 );
    } );
} );
