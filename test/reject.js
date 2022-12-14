/*
 * Test collection.reject()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "reject -", function() {

    it( 'should filter the collection using the given callback. removing items that returns true in the callback', function() {

        const collection = collect( [ 1, 2, 3, 4 ] );

        const filtered = collection.reject( value => value > 2 );

        expect( filtered.all() ).to.eql( [ 1, 2 ] );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4 ] );
    } );


    it( 'should not modify the collection', function() {

        const collection = collect( [ 1, 2, 3, 4, 5, 6 ] );

        const filtered = collection.reject( value => value > 2 );

        expect( filtered.all() ).to.eql( [ 1, 2 ] );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 5, 6 ] );
    } );


    it( 'should do the exact opposite of filter', function() {

        const collection = collect( [ 1, 2, 3, 4 ] );

        const filter = collection.filter( value => value > 2 );

        const reject = collection.reject( value => value > 2 );

        expect( filter.all() ).to.eql( [ 3, 4 ] );
        expect( reject.all() ).to.eql( [ 1, 2 ] );
    } );


    it( 'should work on objects', function() {

        const collection = collect( { player1: 'Sadio Mané', player2: 'Philippe Coutinho', } );

        const reject = collection.reject( value => value === 'Philippe Coutinho' );

        expect( reject.all() ).to.eql( { player1: 'Sadio Mané', } );
    } );
} );
