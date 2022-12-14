/*
 * Test collection.prepend()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "prepend -", function() {

    it( 'should prepend an item to the beginning of the collection', function() {

        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        expect( collection.prepend( 0 ).all() ).to.eql( [ 0, 1, 2, 3, 4, 5 ] );
        expect( collection.all() ).to.eql( [ 0, 1, 2, 3, 4, 5 ] );
    } );


    it( 'should work when collection is based on an object', function() {
        
        const collection2 = collect( {
            firstname: 'Daniel',
        } );

        expect( collection2.prepend( 'Eckermann', 'lastname' ).all() ).to.eql( {
            firstname: 'Daniel',
            lastname: 'Eckermann',
        } );

        expect( collection2.all() ).to.eql( {
            lastname: 'Eckermann',
            firstname: 'Daniel',
        } );
    } );
} );
