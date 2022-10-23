/*
 * Test collection.whereInstanceOf()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "whereInstanceOf -", function() {

    it( 'should filter collection to items that are an instance of x', function() {

        const Player = function p( name ) {
            this.name = name;
        };

        const Manager = function p( name ) {
            this.name = name;
        };

        const Firmino = new Player( 'Firmino' );

        const Salah = new Player( 'Salah' );

        const Klopp = new Manager( 'Klopp' );

        const collection = collect( [ Firmino, Salah, Klopp ] );

        const filtered = collection.whereInstanceOf( Player );

        expect( filtered.all() ).to.eql( [ Firmino, Salah ] );
        expect( collection.all() ).to.eql( [ Firmino, Salah, Klopp ] );
    } );
} );
