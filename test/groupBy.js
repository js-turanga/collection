/*
 * Test collection.groupBy()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


const products = [
    { product: 'Catalog', manufacturer: 'IKEA', price: 0 },
    { product: 'Desk', manufacturer: 'IKEA', price: 60 },
    { product: 'Chair', manufacturer: 'IKEA', price: 60 },
    { product: 'Lamp', manufacturer: 'IKEA', price: 15 },
    { product: 'Chair', manufacturer: 'Herman Miller' },
];  


/** Test Specification */

describe( "groupBy -", function() {

    it( 'should group the collections items by the given key', function() {

        const collection = collect( products );

        const grouped = collection.groupBy( 'manufacturer' );

        expect( Object.keys( grouped.all() ) ).to.eql( [ 'IKEA', 'Herman Miller' ] );
        expect( collection.all() ).to.eql( products );
    } );


    it( 'should accept a custom callback to group by', function() {

        const collection = collect( products );

        const grouped = collection.groupBy( item => item.manufacturer.substring( 0, 3 ) );

        expect( grouped.all() ).to.eql( {
            IKE: collect( [
                { product: 'Catalog', manufacturer: 'IKEA', price: 0 },
                { product: 'Desk', manufacturer: 'IKEA', price: 60 },
                { product: 'Chair', manufacturer: 'IKEA', price: 60 },
                { product: 'Lamp', manufacturer: 'IKEA', price: 15 },
            ] ),
            Her: collect( [
                { product: 'Chair', manufacturer: 'Herman Miller' },
            ] ),
        } );

        expect( collection.all() ).to.eql( products );
    } );


    it( 'should return a collection of collections when grouped', function() {

        const collection = collect( products );

        const grouped = collection.groupBy( 'manufacturer' );

        expect( grouped.first().all() ).to.eql( [
            { product: 'Catalog', manufacturer: 'IKEA', price: 0 },
            { product: 'Desk', manufacturer: 'IKEA', price: 60 },
            { product: 'Chair', manufacturer: 'IKEA', price: 60 },
            { product: 'Lamp', manufacturer: 'IKEA', price: 15 },
        ] );
 
        // expect(grouped.last().all()).to.eql([
        //     { product: 'Chair', manufacturer: 'Herman Miller' },
        // ]);

        // expect(collection.all()).to.eql(products);
    } );


    it( 'should return the original collection without key', function() {

        const collection = collect( products );

        const grouped = collection.groupBy();

        expect( grouped.all() ).to.eql( [
            { product: 'Catalog', manufacturer: 'IKEA', price: 0 },
            { product: 'Desk', manufacturer: 'IKEA', price: 60 },
            { product: 'Chair', manufacturer: 'IKEA', price: 60 },
            { product: 'Lamp', manufacturer: 'IKEA', price: 15 },
            { product: 'Chair', manufacturer: 'Herman Miller' },
        ] );
    } );


    it( 'should use an empty string as the key if objects are missing the key to group by', function() {

        const collection = collect( products );

        const grouped = collection.groupBy( 'price' );

        expect( grouped.all() ).to.eql( {
            0: collect( [
                { product: 'Catalog', manufacturer: 'IKEA', price: 0 },
            ] ),
            15: collect( [
                { product: 'Lamp', manufacturer: 'IKEA', price: 15 },
            ] ),
            60: collect( [
                { product: 'Desk', manufacturer: 'IKEA', price: 60 },
                { product: 'Chair', manufacturer: 'IKEA', price: 60 },
            ] ),
            '': collect( [
                { product: 'Chair', manufacturer: 'Herman Miller' },
            ] ),
        } );

        expect( collection.all() ).to.eql( products );
    } );


    it( 'should be able to use nested value as key', function() {

        const collection = collect( [
            {
                name: 'Virgil van Dijk',
                club: {
                    name: 'Liverpool FC',
                },
            },
            {
                name: 'Sadio Mané',
                club: {
                    name: 'Liverpool FC',
                },
            },
        ] );

        const grouped = collection.groupBy( 'club.name' );

        expect( grouped.first() ).to.eql( collection );
    } );

} );
