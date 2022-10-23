/*
 * Test collection.merge()
 *
 */

let expect    = require( "chai" ).expect;

let collect = require( "../src" );


/** Test Specification */

describe( "merge -", function() {

    it( 'should return the merged collection', function() {

        const collection = collect( { name: 'Steven Gerrard', number: 8 } );

        const merge = collection.merge( { spouse: 'Alex Curran' } );

        expect( merge.all() ).to.eql( {
            name: 'Steven Gerrard', number: 8, spouse: 'Alex Curran' 
        } );

        expect( collection.all() ).to.eql( {
            name: 'Steven Gerrard', number: 8,
        } );
    } );


    it( 'should concat when merging two arrays', function() {

        const collection = collect( [ 'Unicorn', 'Rainbow' ] );

        const merged = collection.merge( [ 'Sunshine', 'Rainbow' ] );

        expect( merged.all() ).to.eql( [ 'Unicorn', 'Rainbow', 'Sunshine', 'Rainbow' ] );
        expect( collection.all() ).to.eql( [ 'Unicorn', 'Rainbow' ] );
    } );


    it( 'should overwrite the value if the key is already defined', function() {

        const collection = collect( { name: 'Steven Gerrard' } );

        const merge = collection.merge( { name: 'Alex Curran' } );

        expect( merge.all() ).to.eql( { name: 'Alex Curran' } );
        expect( collection.all() ).to.eql( { name: 'Steven Gerrard' } );
    } );


    it( 'should be able to merge with an array', function() {

        const collection = collect( { name: 'Steven Gerrard' } );

        const merge = collection.merge( [ 1, 2, 3 ] );

        expect( merge.all() ).to.eql( {
            0: 1,
            1: 2,
            2: 3,
            name: 'Steven Gerrard',
        } );

        expect( collection.all() ).to.eql( { name: 'Steven Gerrard' } );
    } );


    it( 'should be able to merge with a string', function() {

        const collection = collect( { name: 'Steven Gerrard' } );

        const merge = collection.merge( 'xoxo' );

        expect( merge.all() ).to.eql( {
            0: 'xoxo',
            name: 'Steven Gerrard',
        } );

        expect( collection.all() ).to.eql( { name: 'Steven Gerrard' } );
    } );
} );
