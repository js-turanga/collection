'use strict';

/*
 * Collection
 *
 * Wrapper to work with arrays and objects
 *
 * (c) Mark Fluehmann js.turanga@gmail.com
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const Collection = require( './collection.js' );

/**
 * Symbol.iterator
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator
 */
Collection.prototype[Symbol.iterator] = require( './methods/symbol.iterator' );

/**
 * Collection converterts
 */
Collection.prototype.toJson = require( './methods/toJson' );
Collection.prototype.toArray = require( './methods/toArray' );

/**
 * Collection converterts
 */
Collection.prototype.all = require( './methods/all' );
Collection.prototype.average = require( './methods/average' );
Collection.prototype.chunk = require( './methods/chunk' );
Collection.prototype.collapse = require( './methods/collapse' );
Collection.prototype.combine = require( './methods/combine' );
Collection.prototype.concat = require( './methods/concat' );
Collection.prototype.contains = require( './methods/contains' );
Collection.prototype.count = require( './methods/count' );
Collection.prototype.countBy = require( './methods/countBy' );
Collection.prototype.crossJoin = require( './methods/crossJoin' );
Collection.prototype.groupBy = require( './methods/groupBy' );
Collection.prototype.dd = require( './methods/dd' );
Collection.prototype.diff = require( './methods/diff' );
Collection.prototype.diffAssoc = require( './methods/diffAssoc' );
Collection.prototype.diffKeys = require( './methods/diffKeys' );
Collection.prototype.dump = require( './methods/dump' );
Collection.prototype.duplicates = require( './methods/duplicates' );
Collection.prototype.each = require( './methods/each' );
Collection.prototype.every = require( './methods/every' );
Collection.prototype.except = require( './methods/except' );
Collection.prototype.filter = require( './methods/filter' );
Collection.prototype.eachSpread = require( './methods/eachSpread' );
Collection.prototype.first = require( './methods/first' );
Collection.prototype.firstWhere = require( './methods/firstWhere' );
Collection.prototype.flatMap = require( './methods/flatMap' );
Collection.prototype.flatten = require( './methods/flatten' );
Collection.prototype.flip = require( './methods/flip' );
Collection.prototype.forget = require( './methods/forget' );
Collection.prototype.forPage = require( './methods/forPage' );
Collection.prototype.get = require( './methods/get' );
Collection.prototype.has = require( './methods/has' );
Collection.prototype.implode = require( './methods/implode' );
Collection.prototype.intersect = require( './methods/intersect' );
Collection.prototype.intersectByKeys = require( './methods/intersectByKeys' );
Collection.prototype.isEmpty = require( './methods/isEmpty' );
Collection.prototype.isNotEmpty = require( './methods/isNotEmpty' );
Collection.prototype.keys = require( './methods/keys' );
Collection.prototype.join = require( './methods/join' );
Collection.prototype.last = require( './methods/last' );
Collection.prototype.macro = require( './methods/macro' );
Collection.prototype.make = require( './methods/make' );
Collection.prototype.map = require( './methods/map' );
Collection.prototype.mapInto = require( './methods/mapInto' );
Collection.prototype.mapSpread = require( './methods/mapSpread' );
Collection.prototype.mapToGroups = require( './methods/mapToGroups' );
Collection.prototype.mapWithKeys = require( './methods/mapWithKeys' );
Collection.prototype.max = require( './methods/max' );
Collection.prototype.median = require( './methods/median' );
Collection.prototype.merge = require( './methods/merge' );
Collection.prototype.mergeRecursive = require( './methods/mergeRecursive' );
Collection.prototype.min = require( './methods/min' );
Collection.prototype.mode = require( './methods/mode' );
Collection.prototype.nth = require( './methods/nth' );
Collection.prototype.keyBy = require( './methods/keyBy' );
Collection.prototype.only = require( './methods/only' );
Collection.prototype.pad = require( './methods/pad' );
Collection.prototype.partition = require( './methods/partition' );
Collection.prototype.pipe = require( './methods/pipe' );
Collection.prototype.pluck = require( './methods/pluck' );
Collection.prototype.pop = require( './methods/pop' );
Collection.prototype.prepend = require( './methods/prepend' );
Collection.prototype.push = require( './methods/push' );
Collection.prototype.put = require( './methods/put' );
Collection.prototype.pull = require( './methods/pull' );
Collection.prototype.random = require( './methods/random' );
Collection.prototype.reduce = require( './methods/reduce' );
Collection.prototype.reject = require( './methods/reject' );
Collection.prototype.replace = require( './methods/replace' );
Collection.prototype.replaceRecursive = require( './methods/replaceRecursive' );
Collection.prototype.reverse = require( './methods/reverse' );
Collection.prototype.search = require( './methods/search' );
Collection.prototype.shuffle = require( './methods/shuffle' );
Collection.prototype.shift = require( './methods/shift' );
Collection.prototype.skip = require( './methods/skip' );
Collection.prototype.skipUntil = require( './methods/skipUntil' );
Collection.prototype.skipWhile = require( './methods/skipWhile' );
Collection.prototype.slice = require( './methods/slice' );
Collection.prototype.some = require( './methods/some' );
Collection.prototype.sort = require( './methods/sort' );
Collection.prototype.sortBy = require( './methods/sortBy' );
Collection.prototype.sortByDesc = require( './methods/sortByDesc' );
Collection.prototype.sortDesc = require( './methods/sortDesc' );
Collection.prototype.sortKeys = require( './methods/sortKeys' );
Collection.prototype.sortKeysDesc = require( './methods/sortKeysDesc' );
Collection.prototype.splice = require( './methods/splice' );
Collection.prototype.split = require( './methods/split' );
Collection.prototype.sum = require( './methods/sum' );
Collection.prototype.take = require( './methods/take' );
Collection.prototype.takeUntil = require( './methods/takeUntil' );
Collection.prototype.takeWhile = require( './methods/takeWhile' );
Collection.prototype.tap = require( './methods/tap' );
Collection.prototype.times = require( './methods/times' );
Collection.prototype.transform = require( './methods/transform' );
Collection.prototype.union = require( './methods/union' );
Collection.prototype.unique = require( './methods/unique' );
Collection.prototype.unless = require( './methods/unless' );
Collection.prototype.unlessEmpty = require( './methods/unlessEmpty' );
Collection.prototype.unlessNotEmpty = require( './methods/unlessNotEmpty' );
Collection.prototype.unwrap = require( './methods/unwrap' );
Collection.prototype.values = require( './methods/values' );
Collection.prototype.when = require( './methods/when' );
Collection.prototype.whenEmpty = require( './methods/whenEmpty' );
Collection.prototype.whenNotEmpty = require( './methods/whenNotEmpty' );
Collection.prototype.where = require( './methods/where' );
Collection.prototype.whereBetween = require( './methods/whereBetween' );
Collection.prototype.whereNotBetween = require( './methods/whereNotBetween' );
Collection.prototype.whereInstanceOf = require( './methods/whereInstanceOf' );
Collection.prototype.whereIn = require( './methods/whereIn' );
Collection.prototype.whereNotIn = require( './methods/whereNotIn' );
Collection.prototype.whereNull = require( './methods/whereNull' );
Collection.prototype.whereNotNull = require( './methods/whereNotNull' );
Collection.prototype.wrap = require( './methods/wrap' );
Collection.prototype.zip = require( './methods/zip' );

const collect = ( collection ) => new Collection( collection );

module.exports = collect;
