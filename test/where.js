/*
 * Test collection.where(...args)
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );

const products = [
    { product: 'Desk', price: 200, manufacturer: 'IKEA' },
    { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
    { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
    { product: 'Door', price: '100' },
];

const collection = collect( products );


/** Test Specification */

describe( "where -", function() {

    it( 'should filter the collection by a given key/value pair', function() {

        const filtered = collection.where( 'price', 100 );

        expect( filtered.all() ).to.eql( [
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
        ] );

        expect( collection.all() ).to.eql( products );
    } );


    it( 'should return everything that matches', function() {
    
        const filtered = collection.where( 'manufacturer', 'IKEA' );

        expect( filtered.all() ).to.eql( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
        ] );
    
        expect( collection.all() ).to.eql( products );
    } );


    it( 'should accept a custom operator: less than', function() {
    
        const under200 = collection.where( 'price', '<', 150 );

        expect( under200.all() ).to.eql( [
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Door', price: '100' },
        ] );
    } );


    it( 'should accept a custom operator: less than or equal to', function() {

        const overOrExactly150 = collection.where( 'price', '<=', 150 );

        expect( overOrExactly150.all() ).to.eql( [
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
            { product: 'Door', price: '100' },
        ] );
    } );


    it( 'should accept a custom operator: bigger than', function() {

        const over150 = collection.where( 'price', '>', 150 );

        expect( over150.all() ).to.eql( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
        ] );
    } );


    it( 'should accept a custom operator: bigger than or equal to', function() {

        const overOrExactly150 = collection.where( 'price', '>=', 150 );

        expect( overOrExactly150.all() ).to.eql( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
        ] );
    } );


    it( 'should accept a custom operator: loosely equal', function() {
    
        const loosly100 = collection.where( 'price', '==', 100 );

        expect( loosly100.all() ).to.eql( [
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Door', price: '100' },
        ] );
    } );


    it( 'should accept a custom operator: strictly not equal', function() {

        const not100 = collection.where( 'price', '!==', 100 );

        expect( not100.all() ).to.eql( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
            { product: 'Door', price: '100' },
        ] );
    } );


    it( 'should accept a custom operator: loosely not equal', function() {
    
        const not200 = collection.where( 'price', '!=', 200 );

        expect( not200.all() ).to.eql( [
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
            { product: 'Door', price: '100' },
        ] );

        const not100 = collection.where( 'price', '<>', 100 );

        expect( not100.all() ).to.eql( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
        ] );
    } );
    

    it( 'should work with nested objects', function() {
    
        const collection2 = collect( [
            { product: 'Desk', price: 200, foo: { bar: 1 } },
            { product: 'Chair', price: 100, foo: { bar: 2 } },
            { product: 'Bookcase', price: 150, foo: { bar: 2 } },
            { product: 'Door', price: 100, foo: { bar: 1 } },
        ] );

        const filtered = collection2.where( 'foo.bar', 1 );

        expect( filtered.all() ).to.eql( [
            { product: 'Desk', price: 200, foo: { bar: 1 } }, 
            { product: 'Door', price: 100, foo: { bar: 1 } }
        ] );
    } );


    it( 'should work when only passing one argument', function() {
    
        const hasManufacturer = collection.where( 'manufacturer' );

        expect( hasManufacturer.all() ).to.eql( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
        ] );

        const hasProduct = collection.where( 'product' );

        expect( hasProduct.all() ).to.eql( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
            { product: 'Door', price: '100' },
        ] );
    } );


    it( 'should work when passing two arguments', function() {
    
        const hasManufacturer = collection.where( 'manufacturer', true );

        expect( hasManufacturer.all() ).to.eql( [
            { product: 'Desk', price: 200, manufacturer: 'IKEA' },
            { product: 'Chair', price: 100, manufacturer: 'Herman Miller' },
            { product: 'Bookcase', price: 150, manufacturer: 'IKEA' },
        ] );

        const dontHaveManufacturer = collection.where( 'manufacturer', false );

        expect( dontHaveManufacturer.all() ).to.eql( [
            { product: 'Door', price: '100' },
        ] );
    } );


    it( 'should work with nested properties', function() {

        const collection2 = collect( [
            { name: { firstname: 'Mohamed', lastname: 'Salah' } },
            { name: { firstname: 'Sadio', lastname: 'Man??' } },
            { name: { firstname: 'Roberto', lastname: 'Firmino' } },
        ] );

        expect( collection2.where( 'name.lastname', 'Man??' ).all() ).to.eql( [
            { name: { firstname: 'Sadio', lastname: 'Man??' } },
        ] );
    } );
} );
