/*
 * Test collection.last()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "last -", function() {

    it( 'should return the last item from the collection', function() {

        const collection = collect( [ 1, 2, 3, 4 ] );

        const last = collection.last();

        expect( last ).to.eql( 4 );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4 ] );
    } );


    it( 'should work with array of objects', function() {

        const collection = collect( [ { a: 'a' }, { b: 'b' } ] );

        const last = collection.last();

        expect( last ).to.eql( { b: 'b' } );
        expect( collection.all() ).to.eql( [ { a: 'a' }, { b: 'b' } ] );
    } );

 
    it( 'should when the collection is an object', function() {

        const collection = collect( {
            name: 'Sadio Mané',
            club: 'Liverpool FC',
        } );

        expect( collection.last() ).to.eql( 'Liverpool FC' );
    } );


    it( 'should when the collection is an object with a custom callback', function() {

        const collection = collect( {
            name: 'Sadio Mané',
            club: 'Liverpool FC',
        } );

        expect( collection.last( item => item === 'Liverpool FC' ) ).to.eql( 'Liverpool FC' );
    } );


    it( 'should accept custom callback', function() {

        const collection = collect( [ 1, 2, 3 ] );

        const last = collection.last( item => item > 1 );

        expect( last ).to.eql( 3 );
        expect( collection.all() ).to.eql( [ 1, 2, 3 ] );
    } );


    it( 'should accept a default value', function() {

        const collection = collect( [ 4, 3, 2, 1 ] );

        const lastA = collection.last( item => item >= 6, 5 );

        expect( lastA ).to.eql( 5 );
        expect( collection.all() ).to.eql( [ 4, 3, 2, 1 ] );
    } );

} );
