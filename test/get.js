/*
 * Test collection.get()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );

const data = {
    firstname: 'Sadio',
    lastname: 'Mané',
};

const collection = collect( data );

/** Test Specification */

describe( "get -", function() {

    it( 'should return the item at a given key', function() {

        expect( collection.get( 'firstname' ) ).to.eql( 'Sadio' );
        expect( collection.get( 'name' ) ).to.eql( undefined );
        expect( collection.all() ).to.eql( data );
    } );


    it( 'should accept a default value', function() {

        expect( collection.get( 'name', 'Daniel' ) ).to.eql( 'Daniel' );
        expect( collection.all() ).to.eql( data );
    } );


    it( 'should handle having 0 as a default value', function() {

        expect( collection.get( 'missingKey' ) ).to.eql( undefined );
        expect( collection.get( 'missingKey', 0 ) ).to.eql( 0 );
        expect( collection.all() ).to.eql( data );
    } );
} );
