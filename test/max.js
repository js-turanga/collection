/*
 * Test collection.max()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "max -", function() {

    it( 'should return the maximum value of a given key', function() {

        const collection = collect( [
            { value: 10, }, 
            { value: -13, }, 
            { value: 12, }, 
            { value: undefined, }, 
            { unicorn: false, }
        ] );

        const max = collection.max( 'value' );

        expect( max ).to.eql( 12 );

        expect( collection.all() ).to.eql( [
            { value: 10, }, 
            { value: -13, }, 
            { value: 12, }, 
            { value: undefined, }, 
            { unicorn: false, }
        ] );
    } );


    it( 'should return the maximum value in the collection', function() {

        const collection = collect( [ -1, -2345, 12, 11, 3 ] );

        const max = collection.max();

        expect( max ).to.eql( 12 );

        expect( collection.all() ).to.eql( [ -1, -2345, 12, 11, 3 ] );
    } );
} );
