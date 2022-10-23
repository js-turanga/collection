/*
 * Test collection.zip()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "zip -", function() {

    it( 'should merge together the values of two arrays', function() {

        const collection = collect( [ 'Chair', 'Desk' ] );

        const zipped = collection.zip( [ 100, 200 ] );

        expect( zipped.all() ).to.eql( [
            collect( [ 'Chair', 100 ] ),
            collect( [ 'Desk', 200 ] ),
        ] );

        expect( collection.all() ).to.eql( [ 'Chair', 'Desk' ] );
    } );


    it( 'should be able to zip with a collection', function() {
        
        const collection = collect( [ 'Chair', 'Desk' ] );

        const zipped = collection.zip( collect( [ 100, 200 ] ) );

        expect( zipped.all() ).to.eql( [
            collect( [ 'Chair', 100 ] ),
            collect( [ 'Desk', 200 ] ),
        ] );

        expect( collection.all() ).to.eql( [ 'Chair', 'Desk' ] );
    } );
} );
