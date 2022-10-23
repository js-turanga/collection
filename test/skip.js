/*
 * Test collection.skip()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "skip -", function() {

    it( 'should skip n number of items', function() {

        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        expect( collection.skip( 4 ).all() ).to.eql( [ 5 ] );
    } );


    it( 'should skip n number of items when object', function() {

        const collection = collect( {
            first: 'first',
            second: 'second',
            third: 'third',
            fourth: 'fourth',
            fifth: 'fifth',
        } );

        expect( collection.skip( 4 ).all() ).to.eql( {
            fifth: 'fifth',
        } );
    } );


    it( 'should skip nothing when number is 0', function() {

        const collection = collect( {
            first: 'first',
            second: 'second',
            third: 'third',
            fourth: 'fourth',
            fifth: 'fifth',
        } );

        expect( collection.skip( 0 ).all() ).to.eql( {
            first: 'first',
            second: 'second',
            third: 'third',
            fourth: 'fourth',
            fifth: 'fifth',
        } );
    } );
} );
