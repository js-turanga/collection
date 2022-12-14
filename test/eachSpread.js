/*
 * Test collection.eachSpread()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "eachSpread -", function() {

    it( 'should iterate over the collection', function() {

        const collection = collect( [ [ 1, 'a' ], [ 2, 'b' ] ] );
  
        const result = [];

        collection.eachSpread( ( number, character ) => {
            result.push( [ number, character ] );
        } );

        expect( result ).to.eql( collection.all() );
    } );


    it( 'should pass key as the last parameter', function() {

        const collection = collect( [ [ 1, 'a' ], [ 2, 'b' ] ] );

        const results = [];

        collection.eachSpread( ( number, character, key ) => {
            results.push( [ number, character, key ] );
        } );

        expect( results ).to.eql( [ [ 1, 'a', 0 ], [ 2, 'b', 1 ] ] );
    } );


    it( 'should not modify the collection', function() {

        const collection = collect( [ [ 1, 'a' ], [ 2, 'b' ] ] );

        const results = [];

        const mapped = collection.eachSpread( ( number, character, key ) => {
            results.push( [ number, character, key ] );
        } );

        expect( results ).to.eql( [ [ 1, 'a', 0 ], [ 2, 'b', 1 ] ] );
        expect( collection.all() ).to.eql( [ [ 1, 'a' ], [ 2, 'b' ] ] );
        expect( mapped.all() ).to.eql( collection.all() );
    } );


    it( 'should stop looping when returning false', function() {

        const collection = collect( [ [ 1, 'a' ], [ 2, 'b' ] ] );

        const results = [];

        const mapped = collection.eachSpread( ( number, character, key ) => {
            if ( number === 2 ) 
                return false;
            

            results.push( [ number, character, key ] );

            return true;
        } );

        expect( results ).to.eql( [ [ 1, 'a', 0 ] ] );
        expect( collection.all() ).to.eql( [ [ 1, 'a' ], [ 2, 'b' ] ] );
        expect( mapped.all() ).to.eql( collection.all() );
    } );
} );
