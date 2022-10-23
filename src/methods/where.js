'use strict';

/*
 * collection.where(...args)
 *
 * The where method filters the collection by a given key / value pair:
 *
 */

const { values, nested } = require( '../common' );

module.exports = function where( ...args ) {

    let key, operator, value, collection

    if ( args.length === 1 ) {
        key = args[0]
        operator = undefined
    }

    if ( args.length === 2 ) {
        key = args[0]
        operator = args[1] === true || args[1] === false ? args[1] : '==='
        value = args[1] === true || args[1] === false ? undefined : args[1]
    }

    if ( args.length === 3 ) {
        key = args[0]
        operator = args[1]
        value = args[2]
    }

    const items = values( this.items );

    if ( operator === undefined || operator === true )
    { collection = items.filter( item => { 
        return nested( item, key )
    } ) }

    if ( operator === false )
    { collection = items.filter( item => { 
        return !nested( item, key )
    } ) }

    if ( operator === '==' )
    { collection = items.filter( item => { 
        return nested( item, key ) === Number( value ) || nested( item, key ) === value.toString();
    } ) }

    if ( operator === '===' )
    { collection = items.filter( item => { 
        return nested( item, key ) === value;
    } ) }

    if ( operator === '!=' || operator === '<>' )
    { collection = items.filter( item => { 
        return nested( item, key ) !== Number( value ) && nested( item, key ) !== value.toString();
    } ) }

    if ( operator === '!==' )
    { collection = items.filter( item => { 
        return nested( item, key ) !== value;
    } ) }

    if ( operator === '<' || operator === 'lt' )
    { collection = items.filter( item => { 
        return nested( item, key ) < value;
    } ) }

    if ( operator === '<=' || operator === 'lte' )
    { collection = items.filter( item => { 
        return nested( item, key ) <= value;
    } ) }

    if ( operator === '>' || operator === 'gt' )
    { collection = items.filter( item => { 
        return nested( item, key ) > value;
    } ) }

    if ( operator === '>=' || operator === 'gte' )
    { collection = items.filter( item => { 
        return nested( item, key ) >= value;
    } ) }

    return new this.constructor( collection );
};
