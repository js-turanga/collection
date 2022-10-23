/*
 * Test collection.collapse()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "collapse -", function() {

    it( 'should collapse a collection of arrays into a flat collection', function() {
            
        const collection = collect( [ [ 1 ], [ { name: 'Daniel' }, 5 ], [ 'xoxo' ] ] );

        const collapsed = collection.collapse();

        expect( collapsed.all() ).to.eql( [ 1, { name: 'Daniel' }, 5, 'xoxo' ] );
    } );

} );
