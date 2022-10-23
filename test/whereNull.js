/*
 * Test collection.whereNull()
 *
 */

let expect = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "whereNull -", function() {

    it( 'should remove all object where name is not null', function() {

        const collection = collect( [
            { name: 'Mohamed Salah' }, 
            { name: null }, 
            { name: 'Sadio Mané' }
        ] );

        expect( collection.whereNull( 'name' ).all() ).to.eql( [ { name: null } ] );
    } );


    it( 'should remove all values that are not null', function() {
        
        const collection = collect( [ 1, 2, null, 3, 4 ] );

        expect( collection.whereNull().all() ).to.eql( [ null ] );
    } );
} );
