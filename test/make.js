/*
 * Test collection.make()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "make -", function() {

    it( 'should make a new collection', function() {

        const collection = collect().make( 'foo' );

        expect( collection.all() ).to.eql( [ 'foo' ] );
    } );


    it( 'should make a new collection from null', function() {
        
        const collection = collect().make( null );

        expect( collection.all() ).to.eql( [] );
    } );


    it( 'should make a new collection from nothing', function() {

        const collection = collect().make();

        expect( collection.all() ).to.eql( [] );
    } );


    it( 'should make a new collection from an array', function() {

        const collection = collect().make( [ 1, 2, 3 ] );

        expect( collection.all() ).to.eql( [ 1, 2, 3 ] );
    } );


    it( 'should make a new collection from an object', function() {

        const collection = collect().make( { foo: 'bar' } );

        expect( collection.all() ).to.eql( { foo: 'bar' } );
    } );


    it( 'should make a new collection from other collection', function() {

        const firstCollection = collect().make( { foo: 'bar' } );

        const secondCollection = collect().make( firstCollection );

        expect( secondCollection.all() ).to.eql( { foo: 'bar' } );
    } );
} );
