/*
 * Test collection.push()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "push -", function() {

    it( 'should append an item to the end of the collection', function() {

        const collection = collect( [ 1, 2, 3, 4 ] );

        expect( collection.push( 5 ).all() ).to.eql( [ 1, 2, 3, 4, 5 ] );
    } );


    it( 'should modify the collection', function() {

        const collection = collect( [ 1, 2, 3, 4 ] );

        expect( collection.all() ).to.eql( [ 1, 2, 3, 4 ] );

        collection.push( 5 );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 5 ] );
    } );


    it( 'should work with spread operator', function() {
            
        const collection = collect( [ 1, 2, 3, 4 ] );

        expect( collection.all() ).to.eql( [ 1, 2, 3, 4 ] );

        const values = [ 1, 2, 3, 4, 5 ];

        collection.push( ...values );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 1, 2, 3, 4, 5 ] );
    } );
} );
