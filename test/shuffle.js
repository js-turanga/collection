/*
 * Test collection.shuffle()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "shuffle -", function() {

    it( 'should shuffle the items in the collection', function() {

        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        const shuffled = collection.shuffle();

        expect( shuffled.all().length ).to.eql( 5 );
        expect( shuffled.all()[0] ).to.be.within( 1, 5 );
        expect( shuffled.all()[1] ).to.be.within( 1, 5 );
        expect( shuffled.all()[2] ).to.be.within( 1, 5 );
        expect( shuffled.all()[3] ).to.be.within( 1, 5 );
        expect( shuffled.all()[4] ).to.be.within( 1, 5 );

        expect( collection.all().length ).to.eql( 5 );
        expect( collection.count() ).to.eql( 5 );
    } );


    it( 'should shuffle values when collection is based on an object', function() {

        const collection = collect( {
            qwe: 1, xkx: 2, 681: 3, '--': 4, xoxo: 5,
        } );

        const shuffled = collection.shuffle();

        expect( shuffled.all().length ).to.eql( 5 );
        expect( shuffled.all()[0] ).to.be.within( 1, 5 );
        expect( shuffled.all()[1] ).to.be.within( 1, 5 );
        expect( shuffled.all()[2] ).to.be.within( 1, 5 );
        expect( shuffled.all()[3] ).to.be.within( 1, 5 );
        expect( shuffled.all()[4] ).to.be.within( 1, 5 );

        expect( collection.all().length ).to.eql( 5 );
        expect( collection.count() ).to.eql( 5 );
    } );
} );
