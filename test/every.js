/*
 * Test collection.every()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "every -", function() {

    it( 'should verify that all elements of a collection pass a given truth test', function() {

        const collection = collect( [ 1, 2, 3, 4 ] );

        const shouldBeFalse = collection.every( value => value > 2 );

        const shouldBeFalse2 = collection.every( value => value < 2 );

        expect( shouldBeFalse ).to.eql( false );
        expect( shouldBeFalse2 ).to.eql( false );

        const shouldBeTrue = collection.every( value => value <= 4 );

        expect( shouldBeTrue ).to.eql( true );
    } );


    it( 'should also work when collection is an object', function() {

        const collection = collect( {
            p1: 'Sadio Mané',
            p2: 'Roberto Firmino',
        } );

        const nameIsNeverSalah = collection.every( name => name !== 'Mohamed Salah' );

        expect( nameIsNeverSalah ).to.eql( true );

        const alwaysMane = collection.every( name => name === 'Sadio Mané' );

        expect( alwaysMane ).to.eql( false );
    } );


    it( 'should also pass the object key to the callback', function() {
        
        const collection = collect( {
            a: 'a',
            b: 'b',
            c: 'c',
        } );

        const neverF = collection.every( ( value, key ) => key !== 'f' );

        expect( neverF ).to.eql( true );
    } );
} );
