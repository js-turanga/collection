/*
 * Test collection.replace()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "replace -", function() {

    it( 'doesnt replace anything when passing null', function() {

        const data = [ 1, 2, 3 ];

        const collection = collect( data );

        expect( collection.replace( null ).all() ).to.eql( [ 1, 2, 3 ] );
        expect( collection.all() ).to.eql( data );
    } );


    it( 'can replace values', function() {

        const data = [ 'a', 'b', 'c' ];

        const collection = collect( data );

        const replaced = collection.replace( { 1: 'd', 2: 'e', } );

        expect( replaced.all() ).to.eql( {
            0: 'a', 1: 'd', 2: 'e', 
        } );

        expect( collection.all() ).to.eql( data );
    } );


    it( 'can replace with an array', function() {

        const data = [ 'a', 'b', 'c' ];

        const collection = collect( data );

        const replaced = collection.replace( [ 1, 2 ] );

        expect( replaced.all() ).to.eql( [ 1, 2, 'c' ] );
        expect( collection.all() ).to.eql( data );
    } );


    it( 'can replace with an object', function() {

        const data = { name: 'Bob' };

        const collection = collect( data );

        const replaced = collection.replace( { 0: 9, name: 'John' } );

        expect( replaced.all() ).to.eql( { 0: 9, name: 'John' } );

        expect( collection.all() ).to.eql( data );
    } );


    it( 'can replace with a collection', function() {

        const data = { name: 'Bob' };

        const collection = collect( data );

        const replaced = collection.replace( collect( { 0: 9, name: 'John' } ) );

        expect( replaced.all() ).to.eql( { 0: 9, name: 'John' } );

        expect( collection.all() ).to.eql( data );
    } );
} );
