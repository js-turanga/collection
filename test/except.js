/*
 * Test collection.except()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "except -", function() {

    const post = {
        id: 1,
        title: 'My first post!',
        author: 'ecrmnn',
    };

    it( 'should return everything except the specified properties of an object', function() {

        const collection = collect( post );

        const filtered = collection.except( [ 'title', 'author' ] );

        expect( filtered.all() ).to.eql( {
            id: 1,
        } );

        expect( collection.all() ).to.eql( post );
    } );


    it( 'should return everything except the specified items in an array', function() {

        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        const filtered = collection.except( [ 5, 1 ] );

        expect( filtered.all() ).to.eql( [ 2, 3, 4 ] );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 5 ] );
    } );


    it( 'should take an infinite number of arguments', function() {

        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        const filtered = collection.except( 5, 1, 3 );

        expect( filtered.all() ).to.eql( [ 2, 4 ] );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 5 ] );
    } );
} );
