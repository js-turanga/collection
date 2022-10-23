/*
 * Test collection.firstWhere()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "firstWhere -", function() {
    
    const products = [
        { product: 'Desk', price: 200, manufacturer: 'IKEA' },
        { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
        { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
        { product: 'Door', price: '100' },
    ];

    it( 'should return the first item where it matches', function() {

        const collection = collect( products );

        expect( collection.firstWhere( 'manufacturer', 'IKEA' ).product ).to.eql( 'Desk' );
    } );


    it( 'should return null when no matches', function() {
    
        const collection = collect( products );

        expect( collection.firstWhere( 'manufacturer', 'xoxo' ) ).to.eql( null );
    } );


    it( 'should be possible to pass an operator', function() {

        const collection = collect( products );

        expect( collection.firstWhere( 'manufacturer', '!==', 'IKEA' ).product ).to.eql( 'Chair' );
    } );
} );
