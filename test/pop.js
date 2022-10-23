/*
 * Test collection.pop()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "pop -", function() {

    it( 'should remove and returns the last item from the collection', function() {

        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        expect( collection.pop() ).to.eql( 5 );
        expect( collection.all() ).to.eql( [ 1, 2, 3, 4 ] );
    } );


    it( 'should remove and returns the last n items from the collection', function() {

        const collection = collect( [ 1, 2, 3, 4, 5 ] );

        expect( collection.pop( 2 ) ).to.eql( [ 4, 5 ] );
        expect( collection.all() ).to.eql( [ 1, 2, 3 ] );
    } );


    it( 'should work when collection is an array of objects', function() {

        const collection = collect( [
            { name: 'Sadio Mané', club: 'Liverpool FC' },
            { name: 'Roberto Firmino', club: 'Liverpool FC' },
            { name: 'Mohamed Salah', club: 'Liverpool FC' },
        ] );

        expect( collection.pop() ).to.eql( { name: 'Mohamed Salah', club: 'Liverpool FC' } );

        expect( collection.all() ).to.eql( [
            { name: 'Sadio Mané', club: 'Liverpool FC' },
            { name: 'Roberto Firmino', club: 'Liverpool FC' },
        ] );
    } );


    it( 'should return the last value when collection is based on an object', function() {

        const collection = collect( { 
            name: 'Mohamed Salah', club: 'Liverpool FC',
        } );

        expect( collection.pop() ).to.eql( 'Liverpool FC' );

        expect( collection.all() ).to.eql( { 
            name: 'Mohamed Salah' 
        } );
    } );


    it( 'should return the last n values when collection is based on an object', function() {

        const collection = collect( {
            name: 'Mohamed Salah', club: 'Liverpool FC', country: 'Egypt',
        } );

        expect( collection.pop( 2 ) ).to.eql( {
            club: 'Liverpool FC', country: 'Egypt',
        } );

        expect( collection.all() ).to.eql( {
            name: 'Mohamed Salah',
        } );
    } );


    it( 'should work with strings', function() {

        expect( collect( 'xoxo' ).pop() ).to.eql( 'xoxo' );
        expect( collect( 'xoxo' ).pop( 20 ) ).to.eql( [ 'xoxo' ] );
    } );


    it( 'should return null when popping an empty collection', function() {

        expect( collect().pop() ).to.eql( null );
        expect( collect( [] ).pop() ).to.eql( null );
        expect( collect( {} ).pop() ).to.eql( null );
    } );
} );
