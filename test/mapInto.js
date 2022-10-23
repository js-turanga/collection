/*
 * Test collection.mapInto()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "mapInto -", function() {

    it( 'should map into a class', function() {

        const Person = function p( name ) {
            this.name = name;
        };

        const collection = collect( [ 'Firmino', 'Mané' ] );

        const data = collection.mapInto( Person );

        expect( data.all() ).to.be.an( 'array' );
        expect( data.first() ).to.eql( new Person( 'Firmino' ) );
        expect( data.last() ).to.eql( new Person( 'Mané' ) );
    } );
} );
