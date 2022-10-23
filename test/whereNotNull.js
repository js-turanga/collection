/*
 * Test collection.whereNotNull()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "whereNotNull -", function() {

    it( 'should remove all object where name is null', function() {

        const collection = collect( [
            { name: 'Mohamed Salah' }, 
            { name: null }, 
            { name: 'Sadio Mané' }
        ] );

        expect( collection.whereNotNull( 'name' ).all() ).to.eql( [
            { name: 'Mohamed Salah' }, 
            { name: 'Sadio Mané' }
        ] );
    } );


    it( 'should remove all values that are null', function() {
        
        const collection = collect( [ 1, 2, null, 3, 4 ] );

        expect( collection.whereNotNull().all() ).to.eql( [ 1, 2, 3, 4 ] );
    } );
} );
