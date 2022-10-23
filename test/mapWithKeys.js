/*
 * Test collection.mapWithKeys()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "mapWithKeys -", function() {

    it( 'should return an object containing a single key / value pair:', function() {

        const employees = [
            { name: 'John', department: 'Sales', email: 'john@example.com', },
            { name: 'Jane', department: 'Marketing', email: 'jane@example.com', },
        ];

        const collection = collect( employees );

        const keyed = collection.mapWithKeys( item => [ item.email, item.name ] );

        expect( keyed.all() ).to.eql( {
            'john@example.com': 'John',
            'jane@example.com': 'Jane',
        } );

        expect( collection.all() ).to.eql( employees );
    } );


    it( 'should also work with nested objects', function() {

        const players = {
            player1: { name: 'John', department: 'Sales', email: 'john@example.com', },
            player2: { name: 'Jane', department: 'Marketing', email: 'jane@example.com', },
        };

        const nestedObject = collect( players );

        const keyed = nestedObject.mapWithKeys( item => [ item.email, item.name ] );

        expect( keyed.all() ).to.eql( {
            'john@example.com': 'John',
            'jane@example.com': 'Jane',
        } );

        expect( nestedObject.all() ).to.eql( {
            player1: { name: 'John', department: 'Sales', email: 'john@example.com', },
            player2: { name: 'Jane', department: 'Marketing', email: 'jane@example.com', },
        } );
    } );
} );
