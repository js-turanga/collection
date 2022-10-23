/*
 * Test collection.chunk()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "chunk -", function() {

    it( 'should break the collection into multiple collections of a given size', function() {
    
        const collection = collect( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
            { product: 'Door', price: '100' },
        ] );

        const chunksOf1 = collection.chunk( 1 );

        expect( chunksOf1.all() ).to.eql( [
            collect( [
                { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            ] ),
            collect( [
                { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            ] ),
            collect( [
                { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
            ] ),
            collect( [
                { product: 'Door', price: '100' },
            ] ),
        ] );

        const chunksOf3 = collection.chunk( 3 );
    
        expect( chunksOf3.all() ).to.eql( [
            collect( [
                { product: 'Desk', price: 200, manufacturer: 'IKEA' },
                { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
                { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
            ] ),
            collect( [
                { product: 'Door', price: '100' },
            ] ),
        ] );

        const chunksOf4 = collection.chunk( 4 );

        expect( chunksOf4.all() ).to.eql( [
            collect( [
                { product: 'Desk', price: 200, manufacturer: 'IKEA' },
                { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
                { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
                { product: 'Door', price: '100' },
            ] ),
        ] );
    } );


    it( 'should return a new collection, not modify the original', function() {

        const collection = collect( [ 1, 2, 3, 4 ] );

        const chunks = collection.chunk( 1 );

        expect( chunks.all() ).to.eql( [
            collect( [ 1 ] ),
            collect( [ 2 ] ),
            collect( [ 3 ] ),
            collect( [ 4 ] ),
        ] );

        expect( collection.all() ).to.eql( [ 1, 2, 3, 4 ] );

        expect( chunks ).to.not.eql( collection );
    } );


    it( 'should also work when the collection is based on an object', function() {

        const collection = collect( {
            name: 'Jürgen Klopp',
            club: 'Liverpool FC',
        } );

        const chunks = collection.chunk( 1 );

        expect( chunks.all() ).to.eql( [
            collect( {
                name: 'Jürgen Klopp',
            } ),
            collect( {
                club: 'Liverpool FC',
            } ),
        ] );

        expect( collection.all() ).to.eql( {
            name: 'Jürgen Klopp',
            club: 'Liverpool FC',
        } );
    } );


    it( 'should work with strings', function() {
        expect( collect( 'LFC' ).chunk( 1 ).first().all() ).to.eql( [ 'LFC' ] );
    } );


    it( 'should work with numbers', function() {
        expect( collect( 1234 ).chunk( 1 ).first().all() ).to.eql( [ 1234 ] );
    } );


    it( 'should work with booleans', function() {
        expect( collect( true ).chunk( 1 ).first().all() ).to.eql( [ true ] );
    } );
} );
