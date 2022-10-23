/*
 * Test collection.put()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "put -", function() {

    it( 'should set the given key and value in the collection', function() {
        
        const collection = collect( { name: 'Roberto Firmino' } );

        const modified = collection.put( 'club', 'Liverpool FC' );

        expect( collection ).to.eql( modified );
        expect( collection.all() ).to.eql( {
            name: 'Roberto Firmino',
            club: 'Liverpool FC',
        } );
    } );
} );
