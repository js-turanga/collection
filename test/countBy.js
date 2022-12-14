/*
 * Test collection.countBy()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "countBy -", function() {

    it( 'should count string occurrences', function() {

        const collection = collect( [ 'foo', 'foo', 'foo', 'bar', 'bar', 'foobar' ] );

        expect( collection.countBy().all() ).to.eql( {
            foo: 3,
            bar: 2,
            foobar: 1,
        } );
    } );


    it( 'should count boolean occurrences', function() {

        const collection = collect( [ true, true, false, false, false ] );

        expect( collection.countBy().all() ).to.eql( {
            true: 2,
            false: 3,
        } );
    } );


    it( 'should count integer occurrences', function() {
    
        const collection = collect( [ 1, 5, 1, 5, 5, 1 ] );

        expect( collection.countBy().all() ).to.eql( {
            1: 3,
            5: 3,
        } );
    } );


    it( 'should count occurrences based on the closure', function() {

        const collection = collect( [ 'alice', 'aaron', 'bob', 'carla' ] );

        expect( collection.countBy( value => value[0] ).all() )
            .to.eql( {
                a: 2,
                b: 1,
                c: 1,
            } );

        const collection2 = collect( [
            'alice@gmail.com',
            'bob@yahoo.com',
            'carlos@gmail.com',
        ] );

        const counted = collection2.countBy( email => email.split( '@' )[1] );

        expect( counted.all() ).to.eql( {
            'gmail.com': 2,
            'yahoo.com': 1,
        } );
    } );
} );
