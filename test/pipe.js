/*
 * Test collection.pipe()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "pipe -", function() {

    it( 'should pass the collection to the given callback and return the result', function() {

        const collection = collect( [ 1, 2, 3 ] );

        const piped = collection.pipe( c => c.sum() );

        expect( piped ).to.eql( 6 );
    } );


    it( 'should not modify the original collection', function() {

        const collection = collect( [ 'name', 'number', 'club' ] );

        const piped = collection.pipe( player => player.combine( [ 'Roberto Firmino', 9, 'Liverpool FC' ] ) );

        expect( piped.all() ).to.eql( {
            name: 'Roberto Firmino',
            number: 9,
            club: 'Liverpool FC',
        } );

        expect( collection.all() ).to.eql( [ 'name', 'number', 'club' ] );
    } );
} );
