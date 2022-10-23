/*
 * Test collection.unwrap()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "unwrap -", function() {

    it( 'should unwrap from collection to array', function() {

        expect( collect().unwrap( collect( [ 'foo' ] ) ) ).to.eql( [ 'foo' ] );
        expect( collect().unwrap( collect( { name: 'Sadio Mané' } ) ) ).to.eql( { name: 'Sadio Mané' } );
    } );


    it( 'should unwrap to array', function() {

        expect( collect().unwrap( [ 'foo' ] ) ).to.eql( [ 'foo' ] );
    } );


    it( 'should unwrap to string', function() {

        expect( collect().unwrap( 'foo' ) ).to.eql( 'foo' );
    } );


    it( 'should unwrap to an object', function() {
    
        expect( collect().unwrap( { name: 'Sadio Mané' } ) ).to.eql( { name: 'Sadio Mané' } );
    } );
} );
