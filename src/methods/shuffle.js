'use strict';

/*
 * collection.shuffle()
 *
 * The shuffle method randomly shuffles the items in the collection
 *
 */

const { values } = require( '../common' );

module.exports = function shuffle() {

    const items = values( this.items );

    let j, x, i;

    for ( i = items.length; i; i -= 1 ) {

        j = Math.floor( Math.random() * i );
        x = items[i - 1];
        items[i - 1] = items[j];
        items[j] = x;
    }

    this.items = items;

    return this;
};
