/*
 * Test collection.pull()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "pull -", function() {

    const player = { firstname: 'Sadio', lastname: 'Mané' };

    it( 'should return the item at a given key and remove it from the collection', function() {

        const a = collect( player );

        const b = collect( player );

        expect( a.pull( 'firstname' ) ).to.eql( 'Sadio' );
        expect( a.all() ).to.eql( { lastname: 'Mané' } );
        expect( b.all() ).to.eql( player );
    } );


    it( 'should return null if the key does not exist', function() {

        const collection = collect( player );

        expect( collection.pull( 'non-existing-key' ) ).to.eql( null );
    } );

    it( 'should accept a default value', function() {

        const collection = collect( player );

        const pulled = collection.pull( 'key-does-not-exist', 'Joe' );

        expect( pulled ).to.eql( 'Joe' );
        expect( collection.all() ).to.eql( player );
    } );


    it( 'should accept a callback as the default value', function() {
            
        const collection = collect( player );

        const pulled = collection.pull( 'key-does-not-exist', () => 'Doe' );

        expect( pulled ).to.eql( 'Doe' );
        expect( collection.all() ).to.eql( player );
    } );
} );
