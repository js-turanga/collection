/*
 * Test collection.random()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "random -", function() {

    it( 'should return a random item from the collection', function() {

        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        const random = collection.random();

        expect( random ).to.be.within( 1, 5 );
        expect( collection.all().length ).to.eql( 5 );
    } );


    it( 'should return n random items from the collection', function() {

        const arrayOfRandomValues = collect( [ 1, 2, 3, 4, 5 ] ).random( 3 );

        expect( arrayOfRandomValues.all().length ).to.eql( 3 );
        expect( arrayOfRandomValues.all()[0] ).to.be.within( 1, 5 );
        expect( arrayOfRandomValues.all()[1] ).to.be.within( 1, 5 );
        expect( arrayOfRandomValues.all()[2] ).to.be.within( 1, 5 );
        expect( arrayOfRandomValues.all()[3] ).to.eql( undefined );
    } );


    it( 'should return n random items from the collection, also when 1 is passed', function() {

        const arrayOfRandomValues = collect( [ 1, 2, 3, 4, 5 ] ).random( 1 );

        expect( arrayOfRandomValues.all().length ).to.eql( 1 );
        expect( arrayOfRandomValues.all()[0] ).to.be.within( 1, 5 );
    } );


    it( 'should not modify the collection', function() {

        const collection = collect( [ 1, 2, 3, 4, 5, 8, 6 ] );

        collection.random();
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4, 5, 8, 6 ] );
    } );


    it( 'should work when collection is based on an object', function() {

        const collection = collect( { first: 1, second: 2, third: 3, fourth: 4, } );

        expect( collection.random() ).to.be.within( 1, 4 );
        expect( collection.all() ).to.eql( { first: 1, second: 2, third: 3, fourth: 4, } );
    } );
} );
