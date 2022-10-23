/*
 * Test collection.unless()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "unless -", function() {

    it( 'should execute the given callback when the first argument given to the method evaluates to false', function() {

        const collection = collect( [ 1, 2, 3 ] );

        collection.unless( true, collection => {
            return collection.push( 4 );
        } );

        collection.unless( false, collection => {
            return collection.push( 5 );
        } );

        expect( collection.all() ).to.eql( [ 1, 2, 3, 5 ] );

    } );



    it( 'should execute the second callback when the first argument given to the unless method evaluates to true', function() {

        const collection = collect( [ 1, 2, 3 ] );

        collection.unless( false, c => {
            c.push( 4 );
        } );

        expect( collection.all() ).to.eql( [ 1, 2, 3, 4 ] );

        collection.unless( true, c => {
            c.push( 5 );
        }, c => {
            c.push( 6 );
        } );

        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 6 ] );
    } );

} );
