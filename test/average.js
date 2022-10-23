/*
 * Test collection.average()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Base Dataset */

const arr = [ 1, 2, 3, 4 ];

const multi = [
    { name: 'Desk', dimension: { name: 'd1', height: 100, width: 1000 } },
    { name: 'Desk', dimension: { name: 'd11', height: 1100, width: 11000 } },
    { name: 'Chair', dimension: { name: 'd2', height: 200, width: 2000 } },
    { name: 'Table', dimension: { name: 'd3', height: 300, width: 3000 } },
    { name: 'Car', dimension: { name: 'd4', height: 400, width: 3000 } },
    { name: 'Mobile', dimension: { name: 'd5', height: 500, width: 4000 } },
    { name: 'Street', dimension: { name: 'd6', height: 600, width: 5000 } },
    { name: 'House', dimension: { name: 'd7', height: 700, width: 6000 } },
    { name: 'Garden', dimension: { name: 'd8', height: 800, width: 7000 } },
    { name: 'Mountain', dimension: { name: 'd9', height: 900, width: 8000 } },
];


/** Test Specification */

describe( "average -", function() {

    it( "should return the average value of collection values", function() {

        const coll = collect( arr );

        expect( coll.average() ).to.equal( 2.5 );

    } );


    it( "should accept a callback function", function() {

        const coll = collect( multi );

        expect( coll.average( ( obj ) => obj.dimension.width ) ).to.equal( 5000 );

    } );


    it( "should return the average value of a given key", function() {

        const coll = collect( multi );

        expect( coll.average( 'dimension.width' ) ).to.equal( 5000 );

    } );

} );
