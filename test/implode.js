/*
 * Test collection.implode()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "implode -", function() {

    it( 'should glue together the collection', function() {

        const collection = collect( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
            { product: 'Door', price: '100' },
        ] );

        const implodeProduct = collection.implode( 'product', '-' );

        const implodePrice = collection.implode( 'price', '-' );

        const implodeManufacturer = collection.implode( 'manufacturer', '-' );

        expect( implodeProduct ).to.eql( 'Desk-Chair-Bookcase-Door' );
        expect( implodePrice ).to.eql( '200-100-150-100' );
        expect( implodeManufacturer ).to.eql( 'IKEA-Herman Miller-IKEA-' );
    } );


    it( 'should work with collection based on an array', function() {

        const collection = collect( [ 1, 2, 3 ] );

        const imploded = collection.implode( '#' );

        expect( imploded ).to.eql( '1#2#3' );
    } );


    it( 'should replace null with a blank value', function() {
        const collection = collect( [ 1, 2, null, 3 ] );

        const imploded = collection.implode( '#' );

        expect( imploded ).to.eql( '1#2##3' );
    } );
} );
