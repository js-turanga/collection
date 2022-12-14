/*
 * Test collection.isNotEmpty()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "isNotEmpty -", function() {

    it( 'should return true if the collection is not empty; otherwise, false is returned', function() {

        expect( collect().isNotEmpty() ).to.eql( false );
        expect( collect( [] ).isNotEmpty() ).to.eql( false );
        expect( collect( [ 1 ] ).isNotEmpty() ).to.eql( true );
    } );


    it( 'should return false if collection is empty', function() {

        expect( collect().isNotEmpty() ).to.eql( false );
        expect( collect( [] ).isNotEmpty() ).to.eql( false );
        expect( collect( {} ).isNotEmpty() ).to.eql( false );
        expect( collect( [ '' ] ).isNotEmpty() ).to.eql( true );
        expect( collect( [ 1, 2, 3 ] ).isNotEmpty() ).to.eql( true );
    } );


    it( 'should return true if collection is not empty', function() {

        expect( collect( 'value' ).isNotEmpty() ).to.eql( true );
        expect( collect( [ 'value' ] ).isNotEmpty() ).to.eql( true );
        expect( collect( { key: 'value' } ).isNotEmpty() ).to.eql( true );
    } );


    it( 'should also work if the collection is an empty string', function() {
        
        expect( collect( '' ).isNotEmpty() ).to.eql( true );
        expect( collect( 'xo' ).isNotEmpty() ).to.eql( true );
    } );
} );
