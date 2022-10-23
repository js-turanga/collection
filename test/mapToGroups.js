/*
 * Test collection.mapToGroups()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "mapToGroups -", function() {

    it( 'should map a collection to groups', function() {

        const data = collect( [
            { id: 1, name: 'A' },
            { id: 2, name: 'B' },
            { id: 3, name: 'C' },
            { id: 4, name: 'B' },
        ] );

        const groups = data.mapToGroups( item => [ item.name, item.id ] );

        expect( groups.all() ).to.eql( {
            A: [ 1 ],
            B: [ 2, 4 ],
            C: [ 3 ],
        } );
    } );
} );
