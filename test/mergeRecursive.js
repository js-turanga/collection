/*
 * Test collection.mergeRecursive()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "mergeRecursive -", function() {

    it( 'can merge two objects', function() {

        const data = { name: 'Bob', id: 1, };

        const collection = collect( data );

        const merged = collection.mergeRecursive( {
            name: 'Bob', id: 2,
        } );

        expect( merged.all() ).to.eql( {
            name: 'Bob',
            id: [ 1, 2 ],
        } );

        expect( collection.all() ).to.eql( data );
    } );


    it( 'can merge recursively', function() {

        const data = { name: 'Bob', id: 1, meta: { tags: [ 'a', 'b' ], roles: 'admin' } };

        const collection = collect( data );

        const merged = collection.mergeRecursive( {
            meta: { tags: [ 'c' ], roles: 'editor' },
        } );

        expect( merged.all() ).to.eql( {
            name: 'Bob', id: 1, meta: { tags: [ 'a', 'b', 'c' ], roles: [ 'admin', 'editor' ], },
        } );

        expect( collection.all() ).to.eql( data );
    } );


    it( 'can merge with another collection', function() {

        const data = { name: 'Bob', id: 1, meta: { tags: [ 'a', 'b' ], roles: 'admin' } };

        const collection = collect( data );

        const merged = collection.mergeRecursive( collect( {
            meta: { tags: [ 'c' ], roles: 'editor' },
        } ) );

        expect( merged.all() ).to.eql( {
            name: 'Bob', id: 1, meta: { tags: [ 'a', 'b', 'c' ], roles: [ 'admin', 'editor' ], },
        } );

        expect( collection.all() ).to.eql( data );
    } );


    it( 'can merge an array with an object', function() {

        const collection = collect( [ 1, 2, 3 ] );

        const merged = collection.mergeRecursive( {
            name: 'Bob',id: 1,
        } );

        expect( merged.all() ).to.eql( {
            0: 1,
            1: 2,
            2: 3,
            name: 'Bob',
            id: 1,
        } );
    } );


    it( 'can merge an object with an array', function() {

        const collection = collect( {
            name: 'Bob',
            id: 1,
        } );

        const merged = collection.mergeRecursive( [ 1, 2, 3 ] );

        expect( merged.all() ).to.eql( {
            0: 1,
            1: 2,
            2: 3,
            name: 'Bob',
            id: 1,
        } );
    } );


    it( 'should not be modified when merging with null', function() {

        const collection = collect( { name: 'Bob',id: 1 } );

        const merged = collection.mergeRecursive( null );

        expect( merged.all() ).to.eql( { name: 'Bob', id: 1 } );
    } );
} );
