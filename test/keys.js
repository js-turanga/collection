/*
 * Test collection.keys()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "keys -", function() {

    it( 'should return the collection keys', function() {

        const player = {
            name: 'Sadio Mané',
            number: 19,
            club: 'Liverpool FC',
        };

        const collection = collect( player );

        const keys = collection.keys();

        expect( keys.all() ).to.eql( [ 'name', 'number', 'club' ] );
        expect( collection.all() ).to.eql( player );
    } );


    it( 'should work when the collection is an array', function() {

        const collection = collect( [ 'a', 'b', 'c' ] );

        const keys = collection.keys();

        expect( keys.all() ).to.eql( [ 0, 1, 2 ] );
        expect( collection.all() ).to.eql( [ 'a', 'b', 'c' ] );
    } );


    it( 'should return indexes as keys when array with objects', function() {

        const players = [
            { name: 'Sadio Mané' }, 
            { name: 'Roberto Firmino' }
        ];

        const collection = collect( players );

        const keys = collection.keys();

        expect( keys.all() ).to.eql( [ 0, 1 ] );
        expect( collection.all() ).to.eql( players );
    } );
} );
