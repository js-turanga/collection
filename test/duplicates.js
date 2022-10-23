/*
 * Test collection.duplicates()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "duplicates -", function() {

    it( 'should find duplicates in array', function() {

        const collection = collect( [ 1, 2, 1, 'laravel', null, 'laravel', 'php', null ] );

        expect( collection.duplicates().all() ).to.eql( {
            2: 1,
            5: 'laravel',
            7: null,
        } );
    } );
 

    it( 'should find duplicates in objects', function() {

        const collection = collect( {
            name: 'Fabinho',
            nickname: 'Fabinho',
        } );

        expect( collection.duplicates().all() ).to.eql( {
            nickname: 'Fabinho',
        } );
    } );


    it( 'should find duplicates in array with mixed primitives', function() {

        const collection = collect( [
            2,
            2,
            [ 'collect.js' ],
            [ 'collect.js' ],
            collect( [ 1, 2, 3 ] ),
            collect( [ 1, 2, 3 ] ),
        ] );

        expect( collection.duplicates().all() ).to.eql( {
            1: 2,
            3: [ 'collect.js' ],
            5: collect( [ 1, 2, 3 ] ),
        } );
    } );


    it( 'should not find duplicates when passing nothing', function() {

        const collection = collect();

        expect( collection.duplicates().all() ).to.eql( {} );
    } );


    it( 'should not find duplicates when passing an empty array', function() {

        const collection = collect( [] );

        expect( collection.duplicates().all() ).to.eql( {} );
    } );


    it( 'should not find duplicates when passing null', function() {

        const collection = collect( null );

        expect( collection.duplicates().all() ).to.eql( {} );
    } );


    it( 'should not find duplicates when passing a string', function() {

        const collection = collect( 'this is my string' );

        expect( collection.duplicates().all() ).to.eql( {} );
    } );


    it( 'should find duplicates based on given object key', function() {

        const collection = collect( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
            { product: 'Door', price: '100' },
        ] );

        expect( collection.duplicates( 'manufacturer' ).all() ).to.eql( { 2: 'IKEA' } );
    } );


    it( 'should find duplicates based on given array key', function() {

        const collection = collect( [ [ 'name', 'Anna' ], [ 'name', 'Bob' ], [ 'name', 'Clair' ], [ 'name', 'Bob' ] ] );

        expect( collection.duplicates( 'name' ).all() ).to.eql( { 3: 'Bob' } );
    } );
} );
