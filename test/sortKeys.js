/*
 * Test collection.sortKeys()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "sortKeys -", function() {

    it( 'should sort the keys in the collection', function() {

        const collection = collect( {
            c: 3, b: 2, a: 1, 
        } );

        expect( collection.sortKeys().all() ).to.eql( {
            a: 1, b: 2, c: 3, 
        } );
    } );


    it( 'should return the same collection if not an object', function() {
        
        expect( collect( 'foo' ).all() ).to.eql( [ 'foo' ] );
        expect( collect( [ 1, 2, 3 ] ).all() ).to.eql( [ 1, 2, 3 ] );
        expect( collect( null ).all() ).to.eql( [] );
    } );
} );
