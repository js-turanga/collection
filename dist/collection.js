/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var $;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/collection.js":
/*!***************************!*\
  !*** ./src/collection.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nconst {\n  isArray,\n  isObject\n} = __webpack_require__(/*! ./common */ \"./src/common.js\");\n\nmodule.exports = function Collection(items = []) {\n  if (items !== undefined && items instanceof this.constructor) this.items = items.all();\n  if (items !== undefined && !isArray(items) && !isObject(items)) this.items = [items];\n  if (items !== undefined && (isArray(items) || isObject(items))) this.items = items;\n  if (items === undefined || items === null) this.items = [];\n};\n\n//# sourceURL=webpack://$/./src/collection.js?");

/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/***/ ((module) => {

eval("\n\nmodule.exports = {\n  /**\n  * @returns {boolean}\n  */\n  isString: item => typeof item === 'string',\n\n  /**\n  * @returns {boolean}\n  */\n  isNumber: item => !isNaN(item),\n\n  /**\n  * @returns {boolean}\n  */\n  isArray: item => Array.isArray(item),\n\n  /**\n  * @returns {boolean}\n  */\n  isObject: item => typeof item === 'object' && Array.isArray(item) === false && item !== null,\n\n  /**\n  * @returns {boolean}\n  */\n  isFunction: item => typeof item === 'function',\n\n  /**\n  * @returns {boolean}\n  */\n  isCollection: item => item !== null && item !== undefined && item.constructor.name === 'Collection',\n\n  /**\n  * @returns {*}\n  */\n  clone: items => {\n    if (items.constructor.name === 'Collection') return items;\n    if (items instanceof Map) return new Map(items);\n    if (Array.isArray(items)) return Array.from(items);\n    if (!Array.isArray(items) && typeof items === 'object') return JSON.parse(JSON.stringify(items));\n    return items;\n  },\n\n  /**\n  * @returns {*}\n  */\n  nested: (object, key) => {\n    try {\n      return key.split('.').reduce((obj, prop) => obj[prop], object);\n    } catch (err) {\n      return object;\n    }\n  },\n\n  /**\n  * @returns {array}\n  */\n  values: items => {\n    if (Array.isArray(items)) return [...items];\n    if (items.constructor.name === 'Collection') return [].concat(items.all());\n    return Object.keys(items).map(key => items[key]);\n  }\n};\n\n//# sourceURL=webpack://$/./src/common.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * Collection\n *\n * Wrapper to work with arrays and objects\n *\n * (c) Mark Fluehmann js.turanga@gmail.com\n *\n * For the full copyright and license information, please view the LICENSE\n * file that was distributed with this source code.\n */\n\nconst Collection = __webpack_require__(/*! ./collection.js */ \"./src/collection.js\");\n/**\n * Symbol.iterator\n * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator\n */\n\n\nCollection.prototype[Symbol.iterator] = __webpack_require__(/*! ./methods/symbol.iterator */ \"./src/methods/symbol.iterator.js\");\n/**\n * Collection converterts\n */\n\nCollection.prototype.toJson = __webpack_require__(/*! ./methods/toJson */ \"./src/methods/toJson.js\");\nCollection.prototype.toArray = __webpack_require__(/*! ./methods/toArray */ \"./src/methods/toArray.js\");\n/**\n * Collection converterts\n */\n\nCollection.prototype.all = __webpack_require__(/*! ./methods/all */ \"./src/methods/all.js\");\nCollection.prototype.average = __webpack_require__(/*! ./methods/average */ \"./src/methods/average.js\");\nCollection.prototype.chunk = __webpack_require__(/*! ./methods/chunk */ \"./src/methods/chunk.js\");\nCollection.prototype.collapse = __webpack_require__(/*! ./methods/collapse */ \"./src/methods/collapse.js\");\nCollection.prototype.combine = __webpack_require__(/*! ./methods/combine */ \"./src/methods/combine.js\");\nCollection.prototype.concat = __webpack_require__(/*! ./methods/concat */ \"./src/methods/concat.js\");\nCollection.prototype.contains = __webpack_require__(/*! ./methods/contains */ \"./src/methods/contains.js\");\nCollection.prototype.count = __webpack_require__(/*! ./methods/count */ \"./src/methods/count.js\");\nCollection.prototype.countBy = __webpack_require__(/*! ./methods/countBy */ \"./src/methods/countBy.js\");\nCollection.prototype.crossJoin = __webpack_require__(/*! ./methods/crossJoin */ \"./src/methods/crossJoin.js\");\nCollection.prototype.groupBy = __webpack_require__(/*! ./methods/groupBy */ \"./src/methods/groupBy.js\");\nCollection.prototype.dd = __webpack_require__(/*! ./methods/dd */ \"./src/methods/dd.js\");\nCollection.prototype.diff = __webpack_require__(/*! ./methods/diff */ \"./src/methods/diff.js\");\nCollection.prototype.diffAssoc = __webpack_require__(/*! ./methods/diffAssoc */ \"./src/methods/diffAssoc.js\");\nCollection.prototype.diffKeys = __webpack_require__(/*! ./methods/diffKeys */ \"./src/methods/diffKeys.js\");\nCollection.prototype.dump = __webpack_require__(/*! ./methods/dump */ \"./src/methods/dump.js\");\nCollection.prototype.duplicates = __webpack_require__(/*! ./methods/duplicates */ \"./src/methods/duplicates.js\");\nCollection.prototype.each = __webpack_require__(/*! ./methods/each */ \"./src/methods/each.js\");\nCollection.prototype.every = __webpack_require__(/*! ./methods/every */ \"./src/methods/every.js\");\nCollection.prototype.except = __webpack_require__(/*! ./methods/except */ \"./src/methods/except.js\");\nCollection.prototype.filter = __webpack_require__(/*! ./methods/filter */ \"./src/methods/filter.js\");\nCollection.prototype.eachSpread = __webpack_require__(/*! ./methods/eachSpread */ \"./src/methods/eachSpread.js\");\nCollection.prototype.first = __webpack_require__(/*! ./methods/first */ \"./src/methods/first.js\");\nCollection.prototype.firstWhere = __webpack_require__(/*! ./methods/firstWhere */ \"./src/methods/firstWhere.js\");\nCollection.prototype.flatMap = __webpack_require__(/*! ./methods/flatMap */ \"./src/methods/flatMap.js\");\nCollection.prototype.flatten = __webpack_require__(/*! ./methods/flatten */ \"./src/methods/flatten.js\");\nCollection.prototype.flip = __webpack_require__(/*! ./methods/flip */ \"./src/methods/flip.js\");\nCollection.prototype.forget = __webpack_require__(/*! ./methods/forget */ \"./src/methods/forget.js\");\nCollection.prototype.forPage = __webpack_require__(/*! ./methods/forPage */ \"./src/methods/forPage.js\");\nCollection.prototype.get = __webpack_require__(/*! ./methods/get */ \"./src/methods/get.js\");\nCollection.prototype.has = __webpack_require__(/*! ./methods/has */ \"./src/methods/has.js\");\nCollection.prototype.implode = __webpack_require__(/*! ./methods/implode */ \"./src/methods/implode.js\");\nCollection.prototype.intersect = __webpack_require__(/*! ./methods/intersect */ \"./src/methods/intersect.js\");\nCollection.prototype.intersectByKeys = __webpack_require__(/*! ./methods/intersectByKeys */ \"./src/methods/intersectByKeys.js\");\nCollection.prototype.isEmpty = __webpack_require__(/*! ./methods/isEmpty */ \"./src/methods/isEmpty.js\");\nCollection.prototype.isNotEmpty = __webpack_require__(/*! ./methods/isNotEmpty */ \"./src/methods/isNotEmpty.js\");\nCollection.prototype.keys = __webpack_require__(/*! ./methods/keys */ \"./src/methods/keys.js\");\nCollection.prototype.join = __webpack_require__(/*! ./methods/join */ \"./src/methods/join.js\");\nCollection.prototype.last = __webpack_require__(/*! ./methods/last */ \"./src/methods/last.js\");\nCollection.prototype.macro = __webpack_require__(/*! ./methods/macro */ \"./src/methods/macro.js\");\nCollection.prototype.make = __webpack_require__(/*! ./methods/make */ \"./src/methods/make.js\");\nCollection.prototype.map = __webpack_require__(/*! ./methods/map */ \"./src/methods/map.js\");\nCollection.prototype.mapInto = __webpack_require__(/*! ./methods/mapInto */ \"./src/methods/mapInto.js\");\nCollection.prototype.mapSpread = __webpack_require__(/*! ./methods/mapSpread */ \"./src/methods/mapSpread.js\");\nCollection.prototype.mapToGroups = __webpack_require__(/*! ./methods/mapToGroups */ \"./src/methods/mapToGroups.js\");\nCollection.prototype.mapWithKeys = __webpack_require__(/*! ./methods/mapWithKeys */ \"./src/methods/mapWithKeys.js\");\nCollection.prototype.max = __webpack_require__(/*! ./methods/max */ \"./src/methods/max.js\");\nCollection.prototype.median = __webpack_require__(/*! ./methods/median */ \"./src/methods/median.js\");\nCollection.prototype.merge = __webpack_require__(/*! ./methods/merge */ \"./src/methods/merge.js\");\nCollection.prototype.mergeRecursive = __webpack_require__(/*! ./methods/mergeRecursive */ \"./src/methods/mergeRecursive.js\");\nCollection.prototype.min = __webpack_require__(/*! ./methods/min */ \"./src/methods/min.js\");\nCollection.prototype.mode = __webpack_require__(/*! ./methods/mode */ \"./src/methods/mode.js\");\nCollection.prototype.nth = __webpack_require__(/*! ./methods/nth */ \"./src/methods/nth.js\");\nCollection.prototype.keyBy = __webpack_require__(/*! ./methods/keyBy */ \"./src/methods/keyBy.js\");\nCollection.prototype.only = __webpack_require__(/*! ./methods/only */ \"./src/methods/only.js\");\nCollection.prototype.pad = __webpack_require__(/*! ./methods/pad */ \"./src/methods/pad.js\");\nCollection.prototype.partition = __webpack_require__(/*! ./methods/partition */ \"./src/methods/partition.js\");\nCollection.prototype.pipe = __webpack_require__(/*! ./methods/pipe */ \"./src/methods/pipe.js\");\nCollection.prototype.pluck = __webpack_require__(/*! ./methods/pluck */ \"./src/methods/pluck.js\");\nCollection.prototype.pop = __webpack_require__(/*! ./methods/pop */ \"./src/methods/pop.js\");\nCollection.prototype.prepend = __webpack_require__(/*! ./methods/prepend */ \"./src/methods/prepend.js\");\nCollection.prototype.push = __webpack_require__(/*! ./methods/push */ \"./src/methods/push.js\");\nCollection.prototype.put = __webpack_require__(/*! ./methods/put */ \"./src/methods/put.js\");\nCollection.prototype.pull = __webpack_require__(/*! ./methods/pull */ \"./src/methods/pull.js\");\nCollection.prototype.random = __webpack_require__(/*! ./methods/random */ \"./src/methods/random.js\");\nCollection.prototype.reduce = __webpack_require__(/*! ./methods/reduce */ \"./src/methods/reduce.js\");\nCollection.prototype.reject = __webpack_require__(/*! ./methods/reject */ \"./src/methods/reject.js\");\nCollection.prototype.replace = __webpack_require__(/*! ./methods/replace */ \"./src/methods/replace.js\");\nCollection.prototype.replaceRecursive = __webpack_require__(/*! ./methods/replaceRecursive */ \"./src/methods/replaceRecursive.js\");\nCollection.prototype.reverse = __webpack_require__(/*! ./methods/reverse */ \"./src/methods/reverse.js\");\nCollection.prototype.search = __webpack_require__(/*! ./methods/search */ \"./src/methods/search.js\");\nCollection.prototype.shuffle = __webpack_require__(/*! ./methods/shuffle */ \"./src/methods/shuffle.js\");\nCollection.prototype.shift = __webpack_require__(/*! ./methods/shift */ \"./src/methods/shift.js\");\nCollection.prototype.skip = __webpack_require__(/*! ./methods/skip */ \"./src/methods/skip.js\");\nCollection.prototype.skipUntil = __webpack_require__(/*! ./methods/skipUntil */ \"./src/methods/skipUntil.js\");\nCollection.prototype.skipWhile = __webpack_require__(/*! ./methods/skipWhile */ \"./src/methods/skipWhile.js\");\nCollection.prototype.slice = __webpack_require__(/*! ./methods/slice */ \"./src/methods/slice.js\");\nCollection.prototype.some = __webpack_require__(/*! ./methods/some */ \"./src/methods/some.js\");\nCollection.prototype.sort = __webpack_require__(/*! ./methods/sort */ \"./src/methods/sort.js\");\nCollection.prototype.sortBy = __webpack_require__(/*! ./methods/sortBy */ \"./src/methods/sortBy.js\");\nCollection.prototype.sortByDesc = __webpack_require__(/*! ./methods/sortByDesc */ \"./src/methods/sortByDesc.js\");\nCollection.prototype.sortDesc = __webpack_require__(/*! ./methods/sortDesc */ \"./src/methods/sortDesc.js\");\nCollection.prototype.sortKeys = __webpack_require__(/*! ./methods/sortKeys */ \"./src/methods/sortKeys.js\");\nCollection.prototype.sortKeysDesc = __webpack_require__(/*! ./methods/sortKeysDesc */ \"./src/methods/sortKeysDesc.js\");\nCollection.prototype.splice = __webpack_require__(/*! ./methods/splice */ \"./src/methods/splice.js\");\nCollection.prototype.split = __webpack_require__(/*! ./methods/split */ \"./src/methods/split.js\");\nCollection.prototype.sum = __webpack_require__(/*! ./methods/sum */ \"./src/methods/sum.js\");\nCollection.prototype.take = __webpack_require__(/*! ./methods/take */ \"./src/methods/take.js\");\nCollection.prototype.takeUntil = __webpack_require__(/*! ./methods/takeUntil */ \"./src/methods/takeUntil.js\");\nCollection.prototype.takeWhile = __webpack_require__(/*! ./methods/takeWhile */ \"./src/methods/takeWhile.js\");\nCollection.prototype.tap = __webpack_require__(/*! ./methods/tap */ \"./src/methods/tap.js\");\nCollection.prototype.times = __webpack_require__(/*! ./methods/times */ \"./src/methods/times.js\");\nCollection.prototype.transform = __webpack_require__(/*! ./methods/transform */ \"./src/methods/transform.js\");\nCollection.prototype.union = __webpack_require__(/*! ./methods/union */ \"./src/methods/union.js\");\nCollection.prototype.unique = __webpack_require__(/*! ./methods/unique */ \"./src/methods/unique.js\");\nCollection.prototype.unless = __webpack_require__(/*! ./methods/unless */ \"./src/methods/unless.js\");\nCollection.prototype.unlessEmpty = __webpack_require__(/*! ./methods/unlessEmpty */ \"./src/methods/unlessEmpty.js\");\nCollection.prototype.unlessNotEmpty = __webpack_require__(/*! ./methods/unlessNotEmpty */ \"./src/methods/unlessNotEmpty.js\");\nCollection.prototype.unwrap = __webpack_require__(/*! ./methods/unwrap */ \"./src/methods/unwrap.js\");\nCollection.prototype.values = __webpack_require__(/*! ./methods/values */ \"./src/methods/values.js\");\nCollection.prototype.when = __webpack_require__(/*! ./methods/when */ \"./src/methods/when.js\");\nCollection.prototype.whenEmpty = __webpack_require__(/*! ./methods/whenEmpty */ \"./src/methods/whenEmpty.js\");\nCollection.prototype.whenNotEmpty = __webpack_require__(/*! ./methods/whenNotEmpty */ \"./src/methods/whenNotEmpty.js\");\nCollection.prototype.where = __webpack_require__(/*! ./methods/where */ \"./src/methods/where.js\");\nCollection.prototype.whereBetween = __webpack_require__(/*! ./methods/whereBetween */ \"./src/methods/whereBetween.js\");\nCollection.prototype.whereNotBetween = __webpack_require__(/*! ./methods/whereNotBetween */ \"./src/methods/whereNotBetween.js\");\nCollection.prototype.whereInstanceOf = __webpack_require__(/*! ./methods/whereInstanceOf */ \"./src/methods/whereInstanceOf.js\");\nCollection.prototype.whereIn = __webpack_require__(/*! ./methods/whereIn */ \"./src/methods/whereIn.js\");\nCollection.prototype.whereNotIn = __webpack_require__(/*! ./methods/whereNotIn */ \"./src/methods/whereNotIn.js\");\nCollection.prototype.whereNull = __webpack_require__(/*! ./methods/whereNull */ \"./src/methods/whereNull.js\");\nCollection.prototype.whereNotNull = __webpack_require__(/*! ./methods/whereNotNull */ \"./src/methods/whereNotNull.js\");\nCollection.prototype.wrap = __webpack_require__(/*! ./methods/wrap */ \"./src/methods/wrap.js\");\nCollection.prototype.zip = __webpack_require__(/*! ./methods/zip */ \"./src/methods/zip.js\");\n\nconst collect = collection => new Collection(collection);\n\nmodule.exports = collect;\n\n//# sourceURL=webpack://$/./src/index.js?");

/***/ }),

/***/ "./src/methods/all.js":
/*!****************************!*\
  !*** ./src/methods/all.js ***!
  \****************************/
/***/ ((module) => {

eval("\n/*\n * collection.all()\n *\n * The all method returns the underlying array or object represented by the collection\n *\n */\n\nmodule.exports = function all() {\n  return this.items;\n};\n\n//# sourceURL=webpack://$/./src/methods/all.js?");

/***/ }),

/***/ "./src/methods/average.js":
/*!********************************!*\
  !*** ./src/methods/average.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.average()\n * collection.average(key)\n *\n * The average method returns the average of all items in the collection, eventually identified by key\n *\n */\n\nconst {\n  isFunction\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function average(key) {\n  if (key === undefined) return this.sum() / this.items.length;\n  if (isFunction(key)) return new this.constructor(this.items).sum(key) / this.items.length;\n  return new this.constructor(this.items).pluck(key).sum() / this.items.length;\n};\n\n//# sourceURL=webpack://$/./src/methods/average.js?");

/***/ }),

/***/ "./src/methods/chunk.js":
/*!******************************!*\
  !*** ./src/methods/chunk.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.chunk(size)\n *\n * The chunk method breaks the collection into multiple, smaller collections of a given size\n *\n */\n\nconst {\n  isArray,\n  isObject\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function chunk(size) {\n  const chunks = []; // collection items are neither of type array nor object\n\n  if (!isArray(this.items) && !isObject(this.items)) return new this.constructor([this.items]); // collection length\n\n  const collLen = isArray(this.items) ? this.items.length : Object.keys(this.items).length; // collection items are of type array\n\n  if (isArray(this.items)) {\n    for (let i = 0; i < collLen; i += size) {\n      const items = this.items.slice(i, i + size);\n      const coll = new this.constructor(items);\n      chunks.push(coll);\n    }\n  } // collection items are of type object\n\n\n  if (isObject(this.items)) {\n    for (const cols = Object.entries(this.items); cols.length;) {\n      const items = cols.splice(0, size).reduce((o, [k, v]) => (o[k] = v, o), {});\n      const coll = new this.constructor(items);\n      chunks.push(coll);\n    }\n  }\n\n  return new this.constructor(chunks);\n};\n\n//# sourceURL=webpack://$/./src/methods/chunk.js?");

/***/ }),

/***/ "./src/methods/collapse.js":
/*!*********************************!*\
  !*** ./src/methods/collapse.js ***!
  \*********************************/
/***/ ((module) => {

eval("\n/*\n * collection.collapse()\n *\n * The collapse method collapses a collection of arrays into a single, flat collection\n *\n */\n\nmodule.exports = function collapse() {\n  return new this.constructor([].concat(...this.items));\n};\n\n//# sourceURL=webpack://$/./src/methods/collapse.js?");

/***/ }),

/***/ "./src/methods/combine.js":
/*!********************************!*\
  !*** ./src/methods/combine.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.combine()\n *\n * The combine method combines the values of the collection, as keys, with the values of another array or collection\n *\n */\n\nconst {\n  isString,\n  isArray,\n  isObject\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function combine(args) {\n  const values = args instanceof this.constructor ? args.all() : args;\n  const collection = {}; // collection and arguments of type array\n\n  if (isArray(this.items) && isArray(values)) {\n    this.items.forEach((key, index) => {\n      collection[key] = values[index];\n    });\n  } // collection of type array, arguments of type object\n\n\n  if (isArray(this.items) && isObject(values)) {\n    this.items.forEach((key, index) => {\n      collection[key] = values[Object.keys(values)[index]];\n    });\n  } // collection and arguments of type object\n\n\n  if (isObject(this.items) && isObject(values)) {\n    Object.keys(this.items).forEach((key, index) => {\n      collection[this.items[key]] = values[Object.keys(values)[index]];\n    });\n  } // collection of type array, argument mixed\n\n\n  if (isArray(this.items) && !isArray(values) && !isObject(values)) collection[this.items[0]] = values; // collection is of type string, argument of type array\n\n  if (isString(this.items) && isArray(values)) [collection[this.items]] = values; // collection is of type string, argument mixed\n\n  if (isString(this.items) && !isArray(values) && !isObject(values)) collection[this.items] = values;\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/combine.js?");

/***/ }),

/***/ "./src/methods/concat.js":
/*!*******************************!*\
  !*** ./src/methods/concat.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.concat(args)\n *\n * The concat method appends the given array or collection's values onto the end of another collection:\n *\n */\n\nconst {\n  isArray,\n  isObject,\n  isCollection,\n  clone\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function concat(args) {\n  let extension = args; // transform given arguments\n\n  if (isCollection(args)) extension = args.all();else if (isObject(args)) {\n    extension = [];\n    Object.keys(args).forEach(key => {\n      extension.push(args[key]);\n    });\n  } else if (isArray(args) && isArray(args[1])) {\n    extension = [];\n    args.forEach(key => {\n      extension.push(key[1]);\n    });\n  } // clone current collection\n\n  const collection = clone(this.items); // push extending items to collection\n\n  extension.forEach(value => {\n    isObject(value) ? Object.keys(value).forEach(key => collection.push(value[key])) : collection.push(value);\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/concat.js?");

/***/ }),

/***/ "./src/methods/contains.js":
/*!*********************************!*\
  !*** ./src/methods/contains.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.contains(key)\n * collection.contains(key, value)\n * collection.contains(function(value, key) { return value > 0 })\n *\n * The contains method determines whether the collection contains a given item\n *\n */\n\nconst {\n  isArray,\n  isObject,\n  isFunction,\n  isCollection\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function contains(key, value) {\n  if (isFunction(key)) return this.items.filter((item, index) => key(item, index)).length > 0;\n\n  if (value !== undefined) {\n    return isArray(this.items) ? this.items.filter(item => item[key] !== undefined && item[key] === value).length > 0 : this.items[key] !== undefined && this.items[key] === value;\n  }\n\n  if (isArray(this.items)) return this.items.indexOf(key) !== -1;\n  if (isObject(this.items)) return key in this.items;\n  if (isCollection(this.items)) return this.has(key);\n  return false;\n};\n\n//# sourceURL=webpack://$/./src/methods/contains.js?");

/***/ }),

/***/ "./src/methods/count.js":
/*!******************************!*\
  !*** ./src/methods/count.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.count()\n *\n * The count method returns the total number of items in the collection\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function count() {\n  if (isArray(this.items)) this.items.length;\n  return Object.keys(this.items).length;\n};\n\n//# sourceURL=webpack://$/./src/methods/count.js?");

/***/ }),

/***/ "./src/methods/countBy.js":
/*!********************************!*\
  !*** ./src/methods/countBy.js ***!
  \********************************/
/***/ ((module) => {

eval("\n/*\n * collection.countBy(cb)\n *\n * The countBy method counts the occurrences of values in the collection.\n * By default, the method counts the occurrences of every element, allowing\n * you to count certain \"types\" of elements in the collection\n *\n */\n\nmodule.exports = function countBy(cb = value => value) {\n  return new this.constructor(this.items).groupBy(cb).map(value => value.count());\n};\n\n//# sourceURL=webpack://$/./src/methods/countBy.js?");

/***/ }),

/***/ "./src/methods/crossJoin.js":
/*!**********************************!*\
  !*** ./src/methods/crossJoin.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.crossJoin(args)\n *\n * The crossJoin method cross joins the collection's values among the given arrays\n * or collections, returning a Cartesian product with all possible permutations\n *\n */\n\nconst {\n  values\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function crossJoin(...args) {\n  let joinVal = [];\n  args.forEach(arg => {\n    arg.constructor.name === 'Collection' ? joinVal.push(arg.all()) : joinVal.push(arg);\n  });\n  const current = values(this.items);\n  const collection = join(current, ...joinVal);\n  return new this.constructor(collection);\n};\n\nconst join = (...a) => a.reduce((acc, curr) => acc.flatMap(d => curr.map(e => [d, e].flat())));\n\n//# sourceURL=webpack://$/./src/methods/crossJoin.js?");

/***/ }),

/***/ "./src/methods/dd.js":
/*!***************************!*\
  !*** ./src/methods/dd.js ***!
  \***************************/
/***/ ((module) => {

eval("\n/*\n * collection.dd()\n *\n * The dd method dumps the collection's items and ends execution of the script\n *\n */\n\nmodule.exports = function dd() {\n  this.dump();\n  if (typeof process !== 'undefined') process.exit(1);\n};\n\n//# sourceURL=webpack://$/./src/methods/dd.js?");

/***/ }),

/***/ "./src/methods/diff.js":
/*!*****************************!*\
  !*** ./src/methods/diff.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.diff(args)\n *\n * The diff method compares the collection against another collection or a plain PHP\n * array based on its values. This method will return the values in the original\n * collection that are not present in the given collection\n *\n */\n\nconst {\n  isCollection\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function diff(args) {\n  args = isCollection(args) ? args.all() : args;\n  const diffed = this.items.filter(item => args.indexOf(item) === -1);\n  return new this.constructor(diffed);\n};\n\n//# sourceURL=webpack://$/./src/methods/diff.js?");

/***/ }),

/***/ "./src/methods/diffAssoc.js":
/*!**********************************!*\
  !*** ./src/methods/diffAssoc.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.diffAssoc(args)\n *\n * The diffAssoc method compares the collection against another collection or am array\n * based on its keys and values. This method will return the key / value pairs in the\n * original collection that are not present in the given collection\n *\n */\n\nconst {\n  isCollection\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function diffAssoc(args) {\n  args = isCollection(args) ? args.all() : args;\n  const obj = {};\n  Object.keys(this.items).forEach(key => {\n    if (args[key] === undefined || args[key] !== this.items[key]) obj[key] = this.items[key];\n  });\n  return new this.constructor(obj);\n};\n\n//# sourceURL=webpack://$/./src/methods/diffAssoc.js?");

/***/ }),

/***/ "./src/methods/diffKeys.js":
/*!*********************************!*\
  !*** ./src/methods/diffKeys.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.diffKeys(args)\n *\n * The diffKeys method compares the collection against another collection or am array based on its keys.\n * This method will return the key / value pairs in the original collection that are not present in the given collection\n *\n */\n\nconst {\n  isCollection\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function diffKeys(args) {\n  args = isCollection(args) ? args.all() : args;\n  const remaining = Object.keys(this.items).filter(item => Object.keys(args).indexOf(item) === -1);\n  return new this.constructor(this.items).only(remaining);\n};\n\n//# sourceURL=webpack://$/./src/methods/diffKeys.js?");

/***/ }),

/***/ "./src/methods/dump.js":
/*!*****************************!*\
  !*** ./src/methods/dump.js ***!
  \*****************************/
/***/ ((module) => {

eval("\n/*\n * collection.dump()\n *\n * The dump method dumps the collection's items\n *\n */\n\nmodule.exports = function dump() {\n  // eslint-disable-next-line\n  console.log(this);\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/dump.js?");

/***/ }),

/***/ "./src/methods/duplicates.js":
/*!***********************************!*\
  !*** ./src/methods/duplicates.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.duplicates(key)\n *\n * The duplicates method retrieves and returns duplicate values from the collection\n *\n */\n\nconst {\n  isArray,\n  isObject\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function duplicates(key) {\n  const existing = [];\n  const duplicate = {};\n  Object.keys(this.items).forEach(index => {\n    let value = this.items[index];\n\n    if (isArray(value) && value.length == 2) {\n      index = key !== undefined ? index : value[0];\n      value = value[1];\n    }\n\n    if (key !== undefined && value[key]) value = value[key];\n    const compareValue = stringified(value);\n    existing.indexOf(compareValue) === -1 ? existing.push(compareValue) : duplicate[index] = value;\n  });\n  return new this.constructor(duplicate);\n};\n/*\n * Stringify value for comparing reason\n */\n\n\nfunction stringified(value) {\n  if (isArray(value) || isObject(value)) return JSON.stringify(value);\n  return value;\n}\n\n//# sourceURL=webpack://$/./src/methods/duplicates.js?");

/***/ }),

/***/ "./src/methods/each.js":
/*!*****************************!*\
  !*** ./src/methods/each.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.each(cb)\n *\n * The each method iterates over the items in the collection and passes each item to a closure:\n *\n */\n\nconst {\n  isObject,\n  values\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function each(cb) {\n  const collection = values(this.items);\n\n  for (let [index] of collection.entries()) {\n    if (isObject(this.items)) index = Object.keys(this.items)[index];\n    if (cb(this.items[index], index, this.items) === false) break;\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/each.js?");

/***/ }),

/***/ "./src/methods/eachSpread.js":
/*!***********************************!*\
  !*** ./src/methods/eachSpread.js ***!
  \***********************************/
/***/ ((module) => {

eval("\n/*\n * collection.eachSpread(cb)\n *\n * The eachSpread method iterates over the collection's items, passing each nested item value into the given callback\n *\n */\n\nmodule.exports = function eachSpread(cb) {\n  this.each((values, key) => {\n    cb(...values, key);\n  });\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/eachSpread.js?");

/***/ }),

/***/ "./src/methods/every.js":
/*!******************************!*\
  !*** ./src/methods/every.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.every(cb)\n *\n * The every method may be used to verify that all elements of a collection pass a given truth test\n *\n */\n\nconst {\n  values\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function every(cb) {\n  const items = values(this.items);\n  return items.every(cb);\n};\n\n//# sourceURL=webpack://$/./src/methods/every.js?");

/***/ }),

/***/ "./src/methods/except.js":
/*!*******************************!*\
  !*** ./src/methods/except.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.except(...args)\n *\n * The except method returns all items in the collection except for those with the specified keys\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function except(...args) {\n  args = isArray(...args) ? args[0] : args;\n\n  if (isArray(this.items)) {\n    const collection = this.items.filter(item => args.indexOf(item) === -1);\n    return new this.constructor(collection);\n  }\n\n  const collection = {};\n  Object.keys(this.items).forEach(property => {\n    if (args.indexOf(property) === -1) collection[property] = this.items[property];\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/except.js?");

/***/ }),

/***/ "./src/methods/filter.js":
/*!*******************************!*\
  !*** ./src/methods/filter.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.filter(cb)\n *\n * The filter method filters the collection using the given callback, keeping only those items that pass a given truth test\n *\n */\n\nconst {\n  isArray,\n  isObject\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function filter(cb) {\n  let filtered = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach(key => {\n    const value = this.items[key];\n    if (cb === undefined && !isFalsyValue(value)) isArray(filtered) ? filtered.push(value) : filtered[key] = value;\n    if (cb !== undefined && cb(value, key, this.items)) isArray(filtered) ? filtered.push(value) : filtered[key] = value;\n  });\n  return new this.constructor(filtered);\n};\n/*\n * Detect falsy values\n *\n */\n\n\nfunction isFalsyValue(item) {\n  if (isArray(item) && !item.length) return true;\n  if (isObject(item) && !Object.keys(item).length) return true;\n  if (!item) return true;\n  return false;\n}\n\n//# sourceURL=webpack://$/./src/methods/filter.js?");

/***/ }),

/***/ "./src/methods/first.js":
/*!******************************!*\
  !*** ./src/methods/first.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.first(cb, defaultValue)\n *\n * The first method returns the first element in the collection that passes a given truth test\n *\n */\n\nconst {\n  isArray,\n  isObject,\n  isFunction,\n  isCollection,\n  values\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function first(cb, defaultValue) {\n  let items = this.items;\n  if (!isFunction(cb) && isCollection(items) && items.length) return items.first();\n  if (!isFunction(cb) && isArray(items) && items.length) return items[0];\n  if (!isFunction(cb) && isObject(items) && Object.keys(items).length) return items[Object.keys(items)[0]];\n  let result = defaultValue;\n  values(items).some(item => {\n    if (cb(item)) return result = item;\n  });\n  return result;\n};\n\n//# sourceURL=webpack://$/./src/methods/first.js?");

/***/ }),

/***/ "./src/methods/firstWhere.js":
/*!***********************************!*\
  !*** ./src/methods/firstWhere.js ***!
  \***********************************/
/***/ ((module) => {

eval("\n/*\n * collection.firstWhere( ...args )\n *\n * The firstWhere method returns the first element in the collection with the given key / value pair\n *\n */\n\nmodule.exports = function firstWhere(...args) {\n  return this.where(...args).first() || null;\n};\n\n//# sourceURL=webpack://$/./src/methods/firstWhere.js?");

/***/ }),

/***/ "./src/methods/flatMap.js":
/*!********************************!*\
  !*** ./src/methods/flatMap.js ***!
  \********************************/
/***/ ((module) => {

eval("\n/*\n * collection.flatMap(cb)\n *\n * The flatMap method iterates through the collection and passes each value to the given closure. \n * The closure is free to modify the item and return it, thus forming a new collection of modified items. \n * Then, the array is flattened by one level\n *\n */\n\nmodule.exports = function flatMap(cb) {\n  return this.map(cb).collapse();\n};\n\n//# sourceURL=webpack://$/./src/methods/flatMap.js?");

/***/ }),

/***/ "./src/methods/flatten.js":
/*!********************************!*\
  !*** ./src/methods/flatten.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.flatten(depth)\n *\n * The flatten method flattens a multi-dimensional collection into a single dimension\n *\n */\n\nconst {\n  isArray,\n  isObject,\n  values\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function flatten(depth) {\n  depth = depth || Infinity;\n  let items = values(this.items);\n  let isNested = items.filter(item => {\n    return isArray(item) || isObject(item);\n  }).length > 0;\n\n  while (isNested && depth > 0) {\n    items = isArray(items) ? flattenArray(items) : flattenObject(items);\n    isNested = values(items).filter(item => {\n      return isArray(item) || isObject(item);\n    }).length > 0;\n    depth -= 1;\n  }\n\n  return new this.constructor(items);\n};\n/*\n * Flatten Array\n */\n\n\nfunction flattenArray(arr) {\n  return arr.reduce((acc, val) => {\n    if (isObject(val)) val = flattenObject(val);\n    return acc.concat(val);\n  }, []);\n}\n/*\n * Flatten Object (without keys)\n */\n\n\nfunction flattenObject(obj) {\n  return Object.keys(obj).reduce((acc, key) => {\n    return acc.concat(obj[key]);\n  }, []);\n}\n\n//# sourceURL=webpack://$/./src/methods/flatten.js?");

/***/ }),

/***/ "./src/methods/flip.js":
/*!*****************************!*\
  !*** ./src/methods/flip.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.flip()\n *\n * The flip method swaps the collection's keys with their corresponding values\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function flip() {\n  const collection = {};\n  Object.keys(this.items).forEach(key => {\n    collection[this.items[key]] = isArray(this.items) ? Number(key) : key;\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/flip.js?");

/***/ }),

/***/ "./src/methods/forPage.js":
/*!********************************!*\
  !*** ./src/methods/forPage.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.forPage(page, chunk)\n *\n * The forPage method returns a new collection containing the items that would be present\n * on a given page number. The method accepts the page number as its first argument \n * and the number of items to show per page as its second argument\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function forPage(page, chunk) {\n  let collection = isArray(this.items) ? [] : {};\n  Object.keys(this.items).slice(page * chunk - chunk, page * chunk).forEach(key => {\n    isArray(this.items) ? collection.push(this.items[key]) : collection[key] = this.items[key];\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/forPage.js?");

/***/ }),

/***/ "./src/methods/forget.js":
/*!*******************************!*\
  !*** ./src/methods/forget.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.forget(key)\n *\n * The forget method removes an item from the collection by its key\n * Unlike most other collection methods, forget does not return a new\n * modified collection; it modifies the collection it is called on.\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function forget(key) {\n  if (isArray(this.items)) this.items.splice(key, 1);else delete this.items[key];\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/forget.js?");

/***/ }),

/***/ "./src/methods/get.js":
/*!****************************!*\
  !*** ./src/methods/get.js ***!
  \****************************/
/***/ ((module) => {

eval("\n/*\n * collection.get()\n *\n * The get method returns the item at a given key. If the key does not exist, null is returned\n *\n */\n\nmodule.exports = function get(key, defaultValue) {\n  if (this.items[key] !== undefined) return this.items[key];\n  return defaultValue;\n};\n\n//# sourceURL=webpack://$/./src/methods/get.js?");

/***/ }),

/***/ "./src/methods/groupBy.js":
/*!********************************!*\
  !*** ./src/methods/groupBy.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.groupBy(key)\n * collection.groupBy(item => { return item == xyz })\n *\n * The groupBy method groups the collection's items by a given key\n * Multiple group criterias are not supported right now\n */\n\nconst {\n  isString,\n  isFunction,\n  isNumber,\n  nested\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function groupBy(arg) {\n  const collection = {};\n  if (arg === undefined) return new this.constructor(this.items);\n  this.items.forEach((item, index) => {\n    let key = '';\n    if (isFunction(arg)) key = arg(item, index);\n    if ((isNumber(arg) || isString(arg)) && (nested(item, arg) || nested(item, arg) === 0)) key = nested(item, arg);\n    if (collection[key] === undefined) collection[key] = new this.constructor([]);\n    collection[key].push(item);\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/groupBy.js?");

/***/ }),

/***/ "./src/methods/has.js":
/*!****************************!*\
  !*** ./src/methods/has.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.has(key)\n * collection.has([key, key])\n *\n * The has method determines if a given key exists in the collection\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function has(...args) {\n  args = isArray(args[0]) ? args[0] : args;\n  if (isArray(this.items)) return args.filter(key => this.items.includes(key)).length == args.length;\n  return args.filter(key => key in this.items).length == args.length;\n};\n\n//# sourceURL=webpack://$/./src/methods/has.js?");

/***/ }),

/***/ "./src/methods/implode.js":
/*!********************************!*\
  !*** ./src/methods/implode.js ***!
  \********************************/
/***/ ((module) => {

eval("\n/*\n * collection.implode(key, glue)\n *\n * The implode method joins items in a collection. Its arguments depend on the\n * type of items in the collection. If the collection contains arrays or \n * objects, you should pass the key of the attributes you wish to join, \n * and the \"glue\" string you wish to place between the values:\n *\n */\n\nmodule.exports = function implode(key, glue) {\n  if (glue === undefined) return this.items.join(key);\n  return new this.constructor(this.items).pluck(key).all().join(glue);\n};\n\n//# sourceURL=webpack://$/./src/methods/implode.js?");

/***/ }),

/***/ "./src/methods/intersect.js":
/*!**********************************!*\
  !*** ./src/methods/intersect.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.intersect(values)\n *\n * TThe intersect method removes any values from the original collection \n * that are not present in the given array or collection. The resulting \n * collection will preserve the original collection's keys\n *\n */\n\nconst {\n  isCollection\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function intersect(values) {\n  if (isCollection(values)) values = values.all();\n  const collection = this.items.filter(item => values.indexOf(item) !== -1);\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/intersect.js?");

/***/ }),

/***/ "./src/methods/intersectByKeys.js":
/*!****************************************!*\
  !*** ./src/methods/intersectByKeys.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.intersectByKeys(values)\n *\n * The intersectByKeys method removes any keys and their corresponding values \n * from the original collection that are not present in the given array or collection\n *\n */\n\nconst {\n  isCollection\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function intersectByKeys(values) {\n  let keys = isCollection(values) ? Object.keys(values.all()) : Object.keys(values);\n  const collection = {};\n  Object.keys(this.items).forEach(key => {\n    if (keys.indexOf(key) !== -1) collection[key] = this.items[key];\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/intersectByKeys.js?");

/***/ }),

/***/ "./src/methods/isEmpty.js":
/*!********************************!*\
  !*** ./src/methods/isEmpty.js ***!
  \********************************/
/***/ ((module) => {

eval("\n/*\n * collection.isEmpty()\n *\n * The isEmpty method returns true if the collection is empty; otherwise, false is returned\n *\n */\n\nmodule.exports = function isEmpty() {\n  return !Object.keys(this.items).length;\n};\n\n//# sourceURL=webpack://$/./src/methods/isEmpty.js?");

/***/ }),

/***/ "./src/methods/isNotEmpty.js":
/*!***********************************!*\
  !*** ./src/methods/isNotEmpty.js ***!
  \***********************************/
/***/ ((module) => {

eval("\n/*\n * collection.isNotEmpty()\n *\n * The isNotEmpty method returns true if the collection is not empty; otherwise, false is returned\n *\n */\n\nmodule.exports = function isNotEmpty() {\n  return !this.isEmpty();\n};\n\n//# sourceURL=webpack://$/./src/methods/isNotEmpty.js?");

/***/ }),

/***/ "./src/methods/join.js":
/*!*****************************!*\
  !*** ./src/methods/join.js ***!
  \*****************************/
/***/ ((module) => {

eval("\n/*\n * collection.join(glue, final)\n *\n * The join method joins the collection's values with a string. \n * Using this method's second argument, you may also specify \n * how the final element should be appended to the string\n *\n */\n\nmodule.exports = function join(glue, lastGlue) {\n  const items = this.values();\n  const count = items.count();\n  if (count === 0) return '';\n  if (count === 1) return items.first();\n  if (lastGlue === undefined) return items.implode(glue);\n  const lastItem = items.pop();\n  return items.implode(glue) + lastGlue + lastItem;\n};\n\n//# sourceURL=webpack://$/./src/methods/join.js?");

/***/ }),

/***/ "./src/methods/keyBy.js":
/*!******************************!*\
  !*** ./src/methods/keyBy.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.keyBy(key)\n *\n * The keyBy method keys the collection by the given key. If multiple items \n * have the same key, only the last one will appear in the new collection\n *\n */\n\nconst {\n  isFunction,\n  nested\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function keyBy(key) {\n  const collection = {};\n  this.items.forEach(item => {\n    let index = isFunction(key) ? key(item) : nested(item, key) || '';\n    collection[index] = item;\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/keyBy.js?");

/***/ }),

/***/ "./src/methods/keys.js":
/*!*****************************!*\
  !*** ./src/methods/keys.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.keys()\n *\n * The keys method returns all of the collection's keys:\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function keys() {\n  let collection = Object.keys(this.items);\n  if (isArray(this.items)) collection = collection.map(Number);\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/keys.js?");

/***/ }),

/***/ "./src/methods/last.js":
/*!*****************************!*\
  !*** ./src/methods/last.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.last(cb, defaultValue)\n *\n * The first method returns the first element in the collection that passes a given truth test\n *\n */\n\nconst {\n  isArray,\n  isFunction,\n  clone\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function last(cb, defaultValue) {\n  let items = clone(this.items);\n  if (isFunction(cb)) items = this.filter(cb).all();\n  if (isArray(items) && !items.length || !Object.keys(items).length) return defaultValue;\n  if (isArray(items)) return items[items.length - 1];\n  const keys = Object.keys(items);\n  return items[keys[keys.length - 1]];\n};\n\n//# sourceURL=webpack://$/./src/methods/last.js?");

/***/ }),

/***/ "./src/methods/macro.js":
/*!******************************!*\
  !*** ./src/methods/macro.js ***!
  \******************************/
/***/ ((module) => {

eval("\n/*\n * collection.macro(name, cb)\n *\n * The static macro method allows you to add methods to the Collection class at run time. \n * Refer to the documentation on extending collections for more information.\n */\n\nmodule.exports = function macro(name, cb) {\n  this.constructor.prototype[name] = cb;\n};\n\n//# sourceURL=webpack://$/./src/methods/macro.js?");

/***/ }),

/***/ "./src/methods/make.js":
/*!*****************************!*\
  !*** ./src/methods/make.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.make(items)\n *\n * The static make method creates a new collection instance. See the Creating Collections section.\n *\n */\n\nconst {\n  isCollection\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function make(items) {\n  if (isCollection(items)) items = items.all();\n  return new this.constructor(items);\n};\n\n//# sourceURL=webpack://$/./src/methods/make.js?");

/***/ }),

/***/ "./src/methods/map.js":
/*!****************************!*\
  !*** ./src/methods/map.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.map(cb)\n *\n * The map method iterates through the collection and passes each value to the given callback.\n * The callback is free to modify the item and return it, thus forming a new collection of modified items\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function map(cb) {\n  if (isArray(this.items)) return new this.constructor(this.items.map(cb));\n  const obj = {};\n  Object.keys(this.items).forEach(key => {\n    obj[key] = cb(this.items[key], key);\n  });\n  return new this.constructor(obj);\n};\n\n//# sourceURL=webpack://$/./src/methods/map.js?");

/***/ }),

/***/ "./src/methods/mapInto.js":
/*!********************************!*\
  !*** ./src/methods/mapInto.js ***!
  \********************************/
/***/ ((module) => {

eval("\n/*\n * collection.mapInto(className)\n *\n * The mapInto() method iterates over the collection, creating a new instance\n * of the given class by passing the value into the constructor\n *\n */\n\nmodule.exports = function mapInto(className) {\n  return this.map((value, key) => new className(value, key));\n};\n\n//# sourceURL=webpack://$/./src/methods/mapInto.js?");

/***/ }),

/***/ "./src/methods/mapSpread.js":
/*!**********************************!*\
  !*** ./src/methods/mapSpread.js ***!
  \**********************************/
/***/ ((module) => {

eval("\n/*\n * collection.mapSpread(cb)\n *\n * The mapSpread method iterates over the collection's items, passing each nested\n * item value into the given closure. The closure is free to modify the item \n * and return it, thus forming a new collection of modified items\n *\n */\n\nmodule.exports = function mapInto(cb) {\n  return this.map((values, key) => cb(...values, key));\n};\n\n//# sourceURL=webpack://$/./src/methods/mapSpread.js?");

/***/ }),

/***/ "./src/methods/mapToGroups.js":
/*!************************************!*\
  !*** ./src/methods/mapToGroups.js ***!
  \************************************/
/***/ ((module) => {

eval("\n/*\n * collection.mapToGroups(cb)\n *\n * The mapToGroups method groups the collection's items by the given closure. \n * The closure should return an associative array containing a single \n * key / value pair, thus forming a new collection of grouped values\n *\n */\n\nmodule.exports = function mapToGroups(cb) {\n  const collection = {};\n  this.items.forEach((item, key) => {\n    const [keyed, value] = cb(item, key);\n    collection[keyed] === undefined ? collection[keyed] = [value] : collection[keyed].push(value);\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/mapToGroups.js?");

/***/ }),

/***/ "./src/methods/mapWithKeys.js":
/*!************************************!*\
  !*** ./src/methods/mapWithKeys.js ***!
  \************************************/
/***/ ((module) => {

eval("\n/*\n * collection.mapWithKeys(cb)\n *\n * The mapWithKeys method iterates through the collection and passes each value to the given callback. \n * The callback should return an associative array containing a single key / value pair\n *\n */\n\nmodule.exports = function mapWithKeys(cb) {\n  const collection = {};\n  Object.keys(this.items).forEach(key => {\n    const [keyed, value] = cb(this.items[key]);\n    collection[keyed] = value;\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/mapWithKeys.js?");

/***/ }),

/***/ "./src/methods/max.js":
/*!****************************!*\
  !*** ./src/methods/max.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.max(key)\n *\n * The max method returns the maximum value of a given key\n *\n */\n\nconst {\n  isString\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function max(key) {\n  const items = isString(key) ? this.items.filter(item => item[key] !== undefined).map(item => item[key]) : this.items;\n  return Math.max(...items);\n};\n\n//# sourceURL=webpack://$/./src/methods/max.js?");

/***/ }),

/***/ "./src/methods/median.js":
/*!*******************************!*\
  !*** ./src/methods/median.js ***!
  \*******************************/
/***/ ((module) => {

eval("\n/*\n * collection.median(key)\n *\n * The median method returns the median value of a given key\n *\n */\n\nmodule.exports = function median(key) {\n  const source = key !== undefined ? this.pluck(key).all() : this.items;\n  const items = source.filter(item => item !== undefined && item !== null).sort();\n  const length = this.count();\n  if (length === 0) return null;\n  if (length % 2 === 0) return (items[length / 2 - 1] + items[length / 2]) / 2;\n  return items[Math.floor(length / 2)];\n};\n\n//# sourceURL=webpack://$/./src/methods/median.js?");

/***/ }),

/***/ "./src/methods/merge.js":
/*!******************************!*\
  !*** ./src/methods/merge.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.merge(args)\n *\n * The merge method merges the given array or collection with the original collection. \n * If a string key in the given items matches a string key in the original collection, \n * the given items's value will overwrite the value in the original collection\n *\n */\n\nconst {\n  isArray,\n  isString,\n  clone\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function merge(args) {\n  if (isString(args)) args = [args];\n  if (isArray(this.items) && isArray(args)) return new this.constructor(this.items.concat(args));\n  let items = clone(this.items);\n  Object.keys(args).forEach(key => {\n    items[key] = args[key];\n  });\n  return new this.constructor(items);\n};\n\n//# sourceURL=webpack://$/./src/methods/merge.js?");

/***/ }),

/***/ "./src/methods/mergeRecursive.js":
/*!***************************************!*\
  !*** ./src/methods/mergeRecursive.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.mergeRecursive(args)\n *\n * The mergeRecursive method merges the given array or collection recursively \n * with the original collection. If a string key in the given items matches\n * a string key in the original collection, then the values for these keys\n * are merged together into an array, and this is done recursively\n *\n */\n\nconst {\n  isArray,\n  isObject,\n  isCollection\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function mergeRecursive(args) {\n  if (!args) return this;\n  if (isCollection(args)) return new this.constructor(mergeDeep(this.items, args.all()));\n  return new this.constructor(mergeDeep(this.items, args));\n};\n/**\n * Performs a deep merge of `source` into `target`.\n * Mutates `target` only but not its objects and arrays.\n *\n * @author inspired by [jhildenbiddle](https://stackoverflow.com/a/48218209).\n */\n\n\nfunction mergeDeep(target, source) {\n  const mergedKeys = Object.keys(Object.assign({}, target, source));\n  const merged = {};\n  mergedKeys.forEach(key => {\n    const targetValue = target[key];\n    const sourceValue = source[key];\n    if (isArray(targetValue) && isArray(sourceValue)) merged[key] = targetValue.concat(sourceValue);else if (isObject(targetValue) && isObject(sourceValue)) merged[key] = mergeDeep(Object.assign({}, targetValue), sourceValue);else if (targetValue === undefined && sourceValue !== undefined) merged[key] = sourceValue;else if (targetValue !== undefined && sourceValue === undefined) merged[key] = target[key];else if (targetValue !== sourceValue) merged[key] = [].concat(target[key], source[key]);else merged[key] = sourceValue;\n  });\n  return merged;\n}\n\n//# sourceURL=webpack://$/./src/methods/mergeRecursive.js?");

/***/ }),

/***/ "./src/methods/min.js":
/*!****************************!*\
  !*** ./src/methods/min.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.min(key)\n *\n * The min method returns the minimum value of a given key:\n *\n */\n\nconst {\n  isString\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function min(key) {\n  const items = isString(key) ? this.items.filter(item => item[key] !== undefined).map(item => item[key]) : this.items;\n  return Math.min(...items);\n};\n\n//# sourceURL=webpack://$/./src/methods/min.js?");

/***/ }),

/***/ "./src/methods/mode.js":
/*!*****************************!*\
  !*** ./src/methods/mode.js ***!
  \*****************************/
/***/ ((module) => {

eval("\n/*\n * collection.mode(key)\n *\n * The mode method returns the mode value of a given key\n *\n */\n\nmodule.exports = function mode(key) {\n  const items = key !== undefined ? this.pluck(key).all() : this.items;\n  if (Object.keys(items).length === 0) return null;\n  let highestCount = 0;\n  let modeKey = [];\n  const keys = new this.constructor([]);\n  Object.keys(items).forEach(key => {\n    keys.push({\n      key: items[key]\n    });\n  });\n  keys.countBy('key').each((count, key) => {\n    let keyInt = parseInt(key) || key;\n\n    if (!modeKey.includes(keyInt) && count > highestCount) {\n      modeKey = [keyInt];\n      highestCount = count;\n    }\n\n    if (!modeKey.includes(keyInt) && count == highestCount) modeKey.push(keyInt);\n  });\n  return modeKey;\n};\n\n//# sourceURL=webpack://$/./src/methods/mode.js?");

/***/ }),

/***/ "./src/methods/nth.js":
/*!****************************!*\
  !*** ./src/methods/nth.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.nth(n, offset)\n *\n * The nth method creates a new collection consisting of every n-th element\n *\n */\n\nconst {\n  values\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function nth(n, offset = 0) {\n  const items = values(this.items);\n  const collection = items.slice(offset).filter((item, index) => index % n === 0);\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/nth.js?");

/***/ }),

/***/ "./src/methods/only.js":
/*!*****************************!*\
  !*** ./src/methods/only.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.only(...args)\n *\n * The only method returns the items in the collection with the specified keys\n *\n */\n\nconst {\n  isArray,\n  isObject\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function only(...args) {\n  args = isArray(args[0]) ? args[0] : args;\n  const obj = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach(key => {\n    let index = isArray(this.items) ? this.items[key] : key;\n    if (isArray(obj) & args.includes(index)) obj.push(this.items[key]);\n    if (isObject(obj) & args.includes(index)) obj[key] = this.items[key];\n  });\n  return new this.constructor(obj);\n};\n\n//# sourceURL=webpack://$/./src/methods/only.js?");

/***/ }),

/***/ "./src/methods/pad.js":
/*!****************************!*\
  !*** ./src/methods/pad.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.pad(size, value)\n *\n * The pad method will fill the array with the given value until the array reaches the specified size. \n * This method behaves like the array_pad PHP function. To pad to the left, you should specify a \n * negative size. No padding will take place if the absolute value of the given size is less \n * than or equal to the length of the array:\n *\n */\n\nconst {\n  isArray,\n  isObject,\n  clone\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function pad(size, value) {\n  let padSize;\n  let shift = 0;\n  const abs = Math.abs(size);\n  const count = this.count();\n  const items = clone(this.items);\n  if ((padSize = abs - count) <= 0) return this;\n  const padKeys = Array.from({\n    length: padSize\n  }, (v, i) => i);\n  if (isArray(items) && size < 0) padKeys.forEach(() => {\n    items.unshift(value);\n  });\n  if (isArray(items) && size > 0) padKeys.forEach(() => {\n    items.push(value);\n  });\n\n  if (isObject(items)) {\n    Object.keys(padKeys).forEach(key => {\n      if (items[+key + shift] !== undefined) shift += 1;\n      items[+key + shift] = value;\n    });\n  }\n\n  return new this.constructor(items);\n};\n\n//# sourceURL=webpack://$/./src/methods/pad.js?");

/***/ }),

/***/ "./src/methods/partition.js":
/*!**********************************!*\
  !*** ./src/methods/partition.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.partition(cb)\n *\n * The partition method may be combined with PHP array destructuring to separate\n *  elements that pass a given truth test from those that do not:\n *\n */\n\nconst {\n  isArray,\n  isObject\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function partition(cb) {\n  let arrays = isArray(this.items) ? [new this.constructor([]), new this.constructor([])] : [new this.constructor({}), new this.constructor({})];\n  Object.keys(this.items).forEach(key => {\n    const value = this.items[key];\n    const evaluated = cb(value);\n    if (isArray(this.items)) evaluated ? arrays[0].push(value) : arrays[1].push(value);\n    if (isObject(this.items)) evaluated ? arrays[0].put(key, value) : arrays[1].put(key, value);\n  });\n  return new this.constructor(arrays);\n};\n\n//# sourceURL=webpack://$/./src/methods/partition.js?");

/***/ }),

/***/ "./src/methods/pipe.js":
/*!*****************************!*\
  !*** ./src/methods/pipe.js ***!
  \*****************************/
/***/ ((module) => {

eval("\n/*\n * collection.pipe(cb)\n *\n * The pipe method passes the collection to the given closure and returns the result of the executed closure\n *\n */\n\nmodule.exports = function pipe(cb) {\n  return cb(this);\n};\n\n//# sourceURL=webpack://$/./src/methods/pipe.js?");

/***/ }),

/***/ "./src/methods/pluck.js":
/*!******************************!*\
  !*** ./src/methods/pluck.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.pluck(value)\n * collection.pluck(value, key)\n *\n * The pluck method retrieves all of the values for a given key\n * You may also specify how you wish the resulting collection to be keyed\n * You can use \"dot notation\" to access nested values which also supports \"wildcard\"\n *\n */\n\nconst {\n  isArray,\n  isObject,\n  clone\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function pluck(value, key) {\n  let keyValueMap, valuesMap, keysMap, sourceKeys, destKey;\n  let collection = value !== undefined && key !== undefined ? {} : []; // build keyValueMap\n\n  keyValueMap = keyMap(this.items); // build value map\n\n  if (value !== undefined) valuesMap = filterKeyPath(keyValueMap, value); // build value map\n\n  if (key !== undefined) keysMap = filterKeyPath(keyValueMap, key); // source keys\n\n  sourceKeys = Object.keys(this.items);\n  if (key === undefined) sourceKeys.forEach(key => {\n    collection[key] = null;\n  }); // build collection based on values\n\n  valuesMap.forEach((item, index) => {\n    let vIndex = index.split('.')[0];\n    if (key === undefined && collection[vIndex] !== null) collection.push(item);\n    if (key === undefined && collection[vIndex] === null) collection[vIndex] = item;\n\n    if (key !== undefined) {\n      destKey = '';\n      keysMap.forEach((value, k) => {\n        if (k.split('.')[0] == vIndex) destKey = value;\n      });\n      collection[destKey] = item;\n    }\n  }); // append keys if values for key doesn't exist\n\n  if (key !== undefined) {\n    keysMap.forEach(item => {\n      if (collection[item] === undefined) collection[item] = null;\n    });\n  }\n\n  return new this.constructor(collection);\n};\n/*\n * Build nested key/value map\n */\n\n\nfunction keyMap(items, key, collector = new Map()) {\n  if (!isArray(items) && !isObject(items)) collector.set(key, items);\n\n  if (isArray(items) || isObject(items)) {\n    Object.entries(items).forEach(item => {\n      let label = key == undefined ? item[0] : `${key}.${item[0]}`;\n      collector.set(label, item[1]);\n      if (isArray(item[1]) || isObject(item[1])) keyMap(item[1], label, collector);\n    });\n  }\n\n  return collector;\n}\n/*\n * Filter keyMap by filter\n */\n\n\nfunction filterKeyPath(keyMap, filter) {\n  const kMap = clone(keyMap); // filter depth\n\n  const depth = `0.${filter}`.split('.').length; // if filter includes wildcard character, replace with regex pattern\n\n  if (filter.includes('*')) filter = filter.replace(/[*]{1}/, '.*'); // build regex instance\n\n  const re = new RegExp(`[0-9]{1,}.${filter}` + '$');\n  kMap.forEach((item, key) => {\n    if (!(re.exec(key) !== null && key.split('.').length === depth)) kMap.delete(key);\n  });\n  return kMap;\n}\n\n//# sourceURL=webpack://$/./src/methods/pluck.js?");

/***/ }),

/***/ "./src/methods/pop.js":
/*!****************************!*\
  !*** ./src/methods/pop.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.pop()\n *\n * The pop method removes and returns the last item from the collection\n *\n */\n\nconst {\n  isArray,\n  isObject\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function pop(count = 1) {\n  if (this.isEmpty()) return null;\n  if (isArray(this.items) && count === 1) return this.items.pop();\n  if (isArray(this.items)) return this.items.splice(-count);\n  const keys = Object.keys(this.items);\n\n  if (isObject(this.items) && count === 1) {\n    const lastKey = keys[keys.length - 1];\n    const lastItem = this.items[lastKey];\n    delete this.items[lastKey];\n    return lastItem;\n  }\n\n  if (isObject(this.items)) {\n    const lastKeys = keys.slice(-count);\n    let lastItems = {};\n    lastKeys.forEach(key => {\n      lastItems[key] = this.items[key];\n      delete this.items[key];\n    });\n    return lastItems;\n  }\n\n  return null;\n};\n\n//# sourceURL=webpack://$/./src/methods/pop.js?");

/***/ }),

/***/ "./src/methods/prepend.js":
/*!********************************!*\
  !*** ./src/methods/prepend.js ***!
  \********************************/
/***/ ((module) => {

eval("\n/*\n * collection.prepend(value, key)\n *\n * The prepend method adds an item to the beginning of the collection\n *\n */\n\nmodule.exports = function prepend(value, key) {\n  if (key !== undefined) return this.put(key, value);\n  this.items.unshift(value);\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/prepend.js?");

/***/ }),

/***/ "./src/methods/pull.js":
/*!*****************************!*\
  !*** ./src/methods/pull.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.pull(key, defaultValue)\n *\n * The pull method removes and returns an item from the collection by its key\n *\n */\n\nconst {\n  isFunction\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function pull(key, defaultValue) {\n  let value;\n  if (key === undefined) return null;\n  if (this.items[key]) value = this.items[key];\n  if (value === undefined && defaultValue !== undefined) value = isFunction(defaultValue) ? defaultValue() : defaultValue;\n  delete this.items[key];\n  return value || null;\n};\n\n//# sourceURL=webpack://$/./src/methods/pull.js?");

/***/ }),

/***/ "./src/methods/push.js":
/*!*****************************!*\
  !*** ./src/methods/push.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.push()\n *\n * The push method appends an item to the end of the collection\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function push(...items) {\n  if (isArray(this.items)) this.items.push(...items);else {\n    Object.values(items).forEach(item => {\n      Object.assign(this.items, item);\n    });\n  }\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/push.js?");

/***/ }),

/***/ "./src/methods/put.js":
/*!****************************!*\
  !*** ./src/methods/put.js ***!
  \****************************/
/***/ ((module) => {

eval("\n/*\n * collection.put(key, value)\n *\n * The put method sets the given key and value in the collection\n *\n */\n\nmodule.exports = function put(key, value) {\n  this.items[key] = value;\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/put.js?");

/***/ }),

/***/ "./src/methods/random.js":
/*!*******************************!*\
  !*** ./src/methods/random.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.random(length)\n *\n * The random method returns a random item from the collection\n *\n */\n\nconst {\n  values\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function random(length = null) {\n  const items = values(this.items);\n  const collection = new this.constructor(items).shuffle(); // If not a length was specified\n\n  if (length !== parseInt(length, 10)) return collection.first();\n  return collection.take(length);\n};\n\n//# sourceURL=webpack://$/./src/methods/random.js?");

/***/ }),

/***/ "./src/methods/reduce.js":
/*!*******************************!*\
  !*** ./src/methods/reduce.js ***!
  \*******************************/
/***/ ((module) => {

eval("\n/*\n * collection.reduce(cb, accumulator)\n *\n * The reduce method reduces the collection to a single value, passing \n * the result of each iteration into the subsequent iteration\n *\n */\n\nmodule.exports = function reduce(cb, accumulator) {\n  let reduced = accumulator !== undefined ? accumulator : null;\n  Object.keys(this.items).forEach(key => {\n    const value = this.items[key];\n    reduced = cb(reduced, value, key);\n  });\n  return reduced;\n};\n\n//# sourceURL=webpack://$/./src/methods/reduce.js?");

/***/ }),

/***/ "./src/methods/reject.js":
/*!*******************************!*\
  !*** ./src/methods/reject.js ***!
  \*******************************/
/***/ ((module) => {

eval("\n/*\n * collection.reject(cb)\n *\n * The reject method filters the collection using the given closure. \n * The closure should return true if the item should be removed from the resulting collection\n *\n */\n\nmodule.exports = function reject(cb) {\n  return new this.constructor(this.items).filter(item => !cb(item));\n};\n\n//# sourceURL=webpack://$/./src/methods/reject.js?");

/***/ }),

/***/ "./src/methods/replace.js":
/*!********************************!*\
  !*** ./src/methods/replace.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.replace(items)\n *\n * The replace method behaves similarly to merge; however, in addition to overwriting\n * matching items that have string keys, the replace method will also overwrite \n * items in the collection that have matching numeric keys\n *\n */\n\nconst {\n  isArray,\n  isCollection\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function replace(items) {\n  if (!items) return this;\n\n  if (isArray(items)) {\n    const replaced = this.items.map((value, index) => items[index] || value);\n    return new this.constructor(replaced);\n  }\n\n  if (isCollection(items)) {\n    const replaced = Object.assign({}, this.items, items.all());\n    return new this.constructor(replaced);\n  }\n\n  const replaced = Object.assign({}, this.items, items);\n  return new this.constructor(replaced);\n};\n\n//# sourceURL=webpack://$/./src/methods/replace.js?");

/***/ }),

/***/ "./src/methods/replaceRecursive.js":
/*!*****************************************!*\
  !*** ./src/methods/replaceRecursive.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.replaceRecursive(args)\n *\n * This method works like replace, but it will recur into arrays \n * and apply the same replacement process to the inner values\n *\n */\n\nconst {\n  isArray,\n  isObject,\n  isCollection\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function replaceRecursive(args) {\n  if (!args) return this;\n  if (!isArray(args) && !isObject(args)) return new this.constructor(replaceDeep(this.items, [args]));\n  if (isCollection(args)) return new this.constructor(replaceDeep(this.items, args.all()));\n  return new this.constructor(replaceDeep(this.items, args));\n};\n/**\n * Performs a deep replace of `source` into `target`.\n * Mutates `target` only but not its objects and arrays.\n *\n */\n\n\nfunction replaceDeep(target, source) {\n  const mergedKeys = Object.keys(Object.assign({}, target, source));\n  const replaced = {};\n  mergedKeys.forEach(key => {\n    const targetValue = target[key];\n    const sourceValue = source[key];\n    if (isObject(sourceValue) || isArray(sourceValue)) replaced[key] = replaceDeep(targetValue, sourceValue); // } else if ( isObject(targetValue) && sourceValue !== undefined ) {\n    //     replaced[key] = Object.assign({}, sourceValue);\n    // } else if ( isArray(targetValue) && sourceValue !== undefined ) {\n    //     replaced[key] = sourceValue;\n    else if ((isObject(targetValue) || isArray(targetValue)) && sourceValue === undefined) replaced[key] = Object.assign({}, targetValue);else if (targetValue !== undefined && sourceValue === undefined) replaced[key] = targetValue;else replaced[key] = sourceValue;\n  });\n  return replaced;\n}\n\n//# sourceURL=webpack://$/./src/methods/replaceRecursive.js?");

/***/ }),

/***/ "./src/methods/reverse.js":
/*!********************************!*\
  !*** ./src/methods/reverse.js ***!
  \********************************/
/***/ ((module) => {

eval("\n/*\n * collection.reverse()\n *\n * The reverse method reverses the order of the collection's items, preserving the original keys\n *\n */\n\nmodule.exports = function reverse() {\n  const collection = [].concat(this.items).reverse();\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/reverse.js?");

/***/ }),

/***/ "./src/methods/search.js":
/*!*******************************!*\
  !*** ./src/methods/search.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.search(arg, strict)\n *\n * The search method searches the collection for the given value and returns its key if found. \n * If the item is not found, false is returned:\n *\n */\n\nconst {\n  isFunction,\n  isNumber\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function search(arg, strict) {\n  let result;\n  result = Object.keys(this.items).find(key => {\n    if (isFunction(arg)) return arg(this.items[key], key);\n    if (strict) return this.items[key] === arg;\n    return this.items[key] == arg;\n  });\n  if (result === undefined || result < 0) return false;\n  if (isNumber(result)) return parseInt(result);\n  return result;\n};\n\n//# sourceURL=webpack://$/./src/methods/search.js?");

/***/ }),

/***/ "./src/methods/shift.js":
/*!******************************!*\
  !*** ./src/methods/shift.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.shift(count)\n *\n * The shift method removes and returns the first item from the collection\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function shift(count = 1) {\n  if (this.isEmpty()) return null;\n\n  if (count === 1) {\n    const firstKey = Object.keys(this.items)[0];\n    const firstValue = this.items[firstKey];\n    isArray(this.items) ? this.items.splice(0, 1) : delete this.items[firstKey];\n    return firstValue;\n  }\n\n  const collection = isArray(this.items) ? [] : {};\n  const poppedKeys = Object.keys(this.items).slice(0, count);\n  poppedKeys.forEach(key => {\n    isArray(this.items) ? collection.push(this.items[key]) : collection[key] = this.items[key];\n  });\n  poppedKeys.forEach(key => {\n    isArray(this.items) ? this.items.splice(0, 1) : delete this.items[key];\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/shift.js?");

/***/ }),

/***/ "./src/methods/shuffle.js":
/*!********************************!*\
  !*** ./src/methods/shuffle.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.shuffle()\n *\n * The shuffle method randomly shuffles the items in the collection\n *\n */\n\nconst {\n  values\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function shuffle() {\n  const items = values(this.items);\n  let j, x, i;\n\n  for (i = items.length; i; i -= 1) {\n    j = Math.floor(Math.random() * i);\n    x = items[i - 1];\n    items[i - 1] = items[j];\n    items[j] = x;\n  }\n\n  this.items = items;\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/shuffle.js?");

/***/ }),

/***/ "./src/methods/skip.js":
/*!*****************************!*\
  !*** ./src/methods/skip.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.skip(number)\n *\n * The skip method returns a new collection, with the given number\n * of elements removed from the beginning of the collection\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function skip(number = 0) {\n  if (number == 0) return this;\n  const collection = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach((key, index) => {\n    if (index + 1 > number) {\n      isArray(this.items) ? collection.push(this.items[key]) : collection[key] = this.items[key];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/skip.js?");

/***/ }),

/***/ "./src/methods/skipUntil.js":
/*!**********************************!*\
  !*** ./src/methods/skipUntil.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.skipUntil(arg)\n *\n * The skipUntil method skips over items from the collection until the given \n * callback returns true and then returns the remaining items in the \n * collection as a new collection instance\n *\n */\n\nconst {\n  isArray,\n  isFunction\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function skipUntil(arg) {\n  let fulfilled = false;\n  const collection = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach(key => {\n    if (!fulfilled && isFunction(arg)) fulfilled = arg(this.items[key], key, this.items);\n    if (!fulfilled && !isFunction(arg)) fulfilled = this.items[key] == arg;\n\n    if (fulfilled) {\n      isArray(this.items) ? collection.push(this.items[key]) : collection[key] = this.items[key];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/skipUntil.js?");

/***/ }),

/***/ "./src/methods/skipWhile.js":
/*!**********************************!*\
  !*** ./src/methods/skipWhile.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.skipWhile(arg)\n *\n * The skipWhile method skips over items from the collection while the given callback \n * returns true and then returns the remaining items in the collection as a new collection\n *\n */\n\nconst {\n  isArray,\n  isFunction\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function skipWhile(arg) {\n  let fulfilled = true;\n  const collection = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach(key => {\n    if (fulfilled && isFunction(arg)) fulfilled = arg(this.items[key], key, this.items);\n    if (fulfilled && !isFunction(arg)) fulfilled = this.items[key] == arg;\n\n    if (!fulfilled) {\n      isArray(this.items) ? collection.push(this.items[key]) : collection[key] = this.items[key];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/skipWhile.js?");

/***/ }),

/***/ "./src/methods/slice.js":
/*!******************************!*\
  !*** ./src/methods/slice.js ***!
  \******************************/
/***/ ((module) => {

eval("\n/*\n * collection.slice(start, limit)\n *\n * The slice method returns a slice of the collection starting at the given index\n *\n */\n\nmodule.exports = function slice(start, limit) {\n  let collection = this.items.slice(start);\n  if (limit !== undefined) collection = collection.slice(0, limit);\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/slice.js?");

/***/ }),

/***/ "./src/methods/some.js":
/*!*****************************!*\
  !*** ./src/methods/some.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.some()\n *\n * Alias for the contains method.\n *\n */\n\nconst contains = __webpack_require__(/*! ./contains */ \"./src/methods/contains.js\");\n\nmodule.exports = contains;\n\n//# sourceURL=webpack://$/./src/methods/some.js?");

/***/ }),

/***/ "./src/methods/sort.js":
/*!*****************************!*\
  !*** ./src/methods/sort.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.sort(cb)\n *\n * The sort method sorts the collection. The sorted collection keeps the original array keys, \n * so in the following example we will use the values method to reset the keys to consecutively numbered indexes\n *\n */\n\nconst {\n  isFunction\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function sort(cb) {\n  const items = this.values().all();\n  if (isFunction(cb)) return new this.constructor(items.sort(cb));\n  if (this.every(item => typeof item === 'number')) return new this.constructor(items.sort((a, b) => a - b));\n  return new this.constructor(items.sort());\n};\n\n//# sourceURL=webpack://$/./src/methods/sort.js?");

/***/ }),

/***/ "./src/methods/sortBy.js":
/*!*******************************!*\
  !*** ./src/methods/sortBy.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.sortBy(arg)\n *\n * The sortBy method sorts the collection by the given key. The sorted collection keeps \n * the original array keys, so in the following example we will use the values method \n * to reset the keys to consecutively numbered indexes:\n *\n */\n\nconst {\n  isArray,\n  isFunction,\n  nested\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function sortBy(arg) {\n  const collector = isArray(this.items) ? [] : {};\n  const sorted = Object.entries(this.items).sort(([, a], [, b]) => {\n    const valueA = resolveValue(a, arg);\n    const valueB = resolveValue(b, arg);\n    if (valueA === null || valueA === undefined) return 1;\n    if (valueB === null || valueB === undefined) return -1;\n    if (valueA < valueB) return -1;\n    if (valueA > valueB) return 1;\n    return 0;\n  }).reduce((acc, [, value], index) => {\n    acc[index] = value;\n    return acc;\n  }, collector);\n  return new this.constructor(sorted);\n};\n/*\n * Resolve Value\n *\n */\n\n\nfunction resolveValue(item, arg) {\n  if (isFunction(arg)) return arg(item);\n  return nested(item, arg);\n}\n\n//# sourceURL=webpack://$/./src/methods/sortBy.js?");

/***/ }),

/***/ "./src/methods/sortByDesc.js":
/*!***********************************!*\
  !*** ./src/methods/sortByDesc.js ***!
  \***********************************/
/***/ ((module) => {

eval("\n/*\n * collection.sortByDesc(arg)\n *\n * This method has the same signature as the sortBy method, \n * but will sort the collection in the opposite order.\n *\n */\n\nmodule.exports = function sortByDesc(arg) {\n  return this.sortBy(arg).reverse();\n};\n\n//# sourceURL=webpack://$/./src/methods/sortByDesc.js?");

/***/ }),

/***/ "./src/methods/sortDesc.js":
/*!*********************************!*\
  !*** ./src/methods/sortDesc.js ***!
  \*********************************/
/***/ ((module) => {

eval("\n/*\n * collection.sortDesc(cb)\n *\n * This method will sort the collection in the opposite order as the sort method\n *\n */\n\nmodule.exports = function sort(cb) {\n  return this.sort(cb).reverse();\n};\n\n//# sourceURL=webpack://$/./src/methods/sortDesc.js?");

/***/ }),

/***/ "./src/methods/sortKeys.js":
/*!*********************************!*\
  !*** ./src/methods/sortKeys.js ***!
  \*********************************/
/***/ ((module) => {

eval("\n/*\n * collection.sortKeys()\n *\n * The sortKeys method sorts the collection by the keys of the underlying associative array\n *\n */\n\nmodule.exports = function sortKeys() {\n  const collection = {};\n  Object.keys(this.items).sort().forEach(key => {\n    collection[key] = this.items[key];\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/sortKeys.js?");

/***/ }),

/***/ "./src/methods/sortKeysDesc.js":
/*!*************************************!*\
  !*** ./src/methods/sortKeysDesc.js ***!
  \*************************************/
/***/ ((module) => {

eval("\n/*\n * collection.sortKeysDesc()\n *\n * This method has the same signature as the sortKeys method, \n * but will sort the collection in the opposite order\n *\n */\n\nmodule.exports = function sortKeysDesc() {\n  const collection = {};\n  Object.keys(this.items).sort().reverse().forEach(key => {\n    collection[key] = this.items[key];\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/sortKeysDesc.js?");

/***/ }),

/***/ "./src/methods/splice.js":
/*!*******************************!*\
  !*** ./src/methods/splice.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.splice(index, limit, replace)\n *\n * The splice method removes and returns a slice of items starting at the specified index\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function splice(index, limit, replace) {\n  const sliced = this.slice(index, limit);\n  this.items = this.diff(sliced.all()).all();\n\n  if (isArray(replace)) {\n    for (let iterator = 0, {\n      length\n    } = replace; iterator < length; iterator += 1) this.items.splice(index + iterator, 0, replace[iterator]);\n  }\n\n  return sliced;\n};\n\n//# sourceURL=webpack://$/./src/methods/splice.js?");

/***/ }),

/***/ "./src/methods/split.js":
/*!******************************!*\
  !*** ./src/methods/split.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.split(groups)\n *\n * The split method breaks a collection into the given number of groups\n *\n */\n\nconst {\n  clone\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function split(groups) {\n  const itemsPerGroup = Math.round(this.items.length / groups);\n  const items = clone(this.items);\n  const collection = [];\n\n  for (let iterator = 0; iterator < groups; iterator += 1) collection.push(new this.constructor(items.splice(0, itemsPerGroup)));\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/split.js?");

/***/ }),

/***/ "./src/methods/sum.js":
/*!****************************!*\
  !*** ./src/methods/sum.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.sum()\n * collection.sum(key)\n * collection.sum(items => items.dimensions.width)\n *\n * The sum method returns the sum of all items in the collection\n * You may pass a key in dotted notation to sum a nested key within the object\n * In addition, you may pass your own callback to determine which values of the collection to sum\n *\n */\n\nconst {\n  isArray,\n  isFunction\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function sum(key) {\n  const items = isArray(this.items) ? this.items : Object.values(this.items);\n  const total = items.reduce((acc, item) => {\n    if (key == undefined) acc += parseFloat(item);else if (isFunction(key)) acc += parseFloat(key(item));else if (key.includes('.')) {\n      const value = key.split('.').reduce((o, i) => o[i] || 0, item) || 0;\n      acc += parseFloat(value);\n    } else acc += parseFloat(item[key]);\n    return acc;\n  }, 0);\n  return parseFloat(total.toPrecision(12));\n};\n\n//# sourceURL=webpack://$/./src/methods/sum.js?");

/***/ }),

/***/ "./src/methods/symbol.iterator.js":
/*!****************************************!*\
  !*** ./src/methods/symbol.iterator.js ***!
  \****************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function SymbolIterator() {\n  let index = -1;\n  return {\n    next: () => {\n      index += 1;\n      return {\n        value: this.items[index],\n        done: index >= this.items.length\n      };\n    }\n  };\n};\n\n//# sourceURL=webpack://$/./src/methods/symbol.iterator.js?");

/***/ }),

/***/ "./src/methods/take.js":
/*!*****************************!*\
  !*** ./src/methods/take.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.take(length)\n *\n * The take method returns a new collection with the specified number of items\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function take(length) {\n  if (isArray(this.items) && length < 0) return new this.constructor(this.items.slice(length));\n  if (isArray(this.items)) return new this.constructor(this.items.slice(0, length));\n  const keys = length < 0 ? Object.keys(this.items).slice(length) : Object.keys(this.items).slice(0, length);\n  const collection = {};\n  keys.forEach(key => {\n    collection[key] = this.items[key];\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/take.js?");

/***/ }),

/***/ "./src/methods/takeUntil.js":
/*!**********************************!*\
  !*** ./src/methods/takeUntil.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.takeUntil(arg)\n *\n * The takeUntil method returns items in the collection until the given callback returns true\n *\n */\n\nconst {\n  isArray,\n  isFunction\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function takeUntil(arg) {\n  let fulfilled = false;\n  const collection = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach(key => {\n    if (!fulfilled && isFunction(arg)) fulfilled = arg(this.items[key], key, this.items);\n    if (!fulfilled && !isFunction(arg)) fulfilled = this.items[key] == arg;\n\n    if (!fulfilled) {\n      isArray(this.items) ? collection.push(this.items[key]) : collection[key] = this.items[key];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/takeUntil.js?");

/***/ }),

/***/ "./src/methods/takeWhile.js":
/*!**********************************!*\
  !*** ./src/methods/takeWhile.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.takeUntil(arg)\n *\n * The takeWhile method returns items in the collection until the given callback returns false\n *\n */\n\nconst {\n  isArray,\n  isFunction\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function takeWhile(arg) {\n  let fulfilled = true;\n  const collection = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach(key => {\n    if (fulfilled && isFunction(arg)) fulfilled = arg(this.items[key], key, this.items);\n    if (fulfilled && !isFunction(arg)) fulfilled = this.items[key] == arg;\n\n    if (fulfilled) {\n      isArray(this.items) ? collection.push(this.items[key]) : collection[key] = this.items[key];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/takeWhile.js?");

/***/ }),

/***/ "./src/methods/tap.js":
/*!****************************!*\
  !*** ./src/methods/tap.js ***!
  \****************************/
/***/ ((module) => {

eval("\n/*\n * collection.tap(cb)\n *\n * The tap method passes the collection to the given callback, allowing you to \"tap\" into\n * the collection at a specific point and do something with the items while not affecting\n * the collection itself. The collection is then returned by the tap method:\n */\n\nmodule.exports = function tap(cb) {\n  cb(this);\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/tap.js?");

/***/ }),

/***/ "./src/methods/times.js":
/*!******************************!*\
  !*** ./src/methods/times.js ***!
  \******************************/
/***/ ((module) => {

eval("\n/*\n * collection.times(times, cb)\n *\n * The static times method creates a new collection by invoking the given closure a specified number of times\n */\n\nmodule.exports = function times(times, cb) {\n  for (let iterator = 1; iterator <= times; iterator += 1) this.items.push(cb(iterator));\n\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/times.js?");

/***/ }),

/***/ "./src/methods/toArray.js":
/*!********************************!*\
  !*** ./src/methods/toArray.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.toArray()\n *\n * Converts collection to array\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function toArray() {\n  return convertToArray(this.items);\n};\n/*\n * Convert To Array\n */\n\n\nfunction convertToArray(items) {\n  return Object.entries(items).map(([key, value]) => {\n    return isArray(value) ? [key, convertToArray(value)] : [key, value];\n  });\n}\n\n//# sourceURL=webpack://$/./src/methods/toArray.js?");

/***/ }),

/***/ "./src/methods/toJson.js":
/*!*******************************!*\
  !*** ./src/methods/toJson.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.toJson()\n *\n * Converts collection to json representation\n *\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common.js */ \"./src/common.js\");\n\nmodule.exports = function toJson() {\n  if (!isArray(this.items)) return this.items;\n  return deepConvert(this.items);\n};\n\nfunction deepConvert(arr) {\n  return arr.reduce((acc, item) => {\n    acc[item[0]] = isArray(item[1]) ? deepConvert(item[1]) : item[1];\n    return acc;\n  }, {});\n}\n\n//# sourceURL=webpack://$/./src/methods/toJson.js?");

/***/ }),

/***/ "./src/methods/transform.js":
/*!**********************************!*\
  !*** ./src/methods/transform.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.transform(cb)\n *\n * The transform method iterates over the collection and calls the given callback \n * with each item in the collection. The items in the collection will be replaced \n * by the values returned by the callback:\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function transform(cb) {\n  const collection = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach(key => {\n    isArray(this.items) ? collection.push(cb(this.items[key], key)) : collection[key] = cb(this.items[key], key);\n  });\n  this.items = collection;\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/transform.js?");

/***/ }),

/***/ "./src/methods/union.js":
/*!******************************!*\
  !*** ./src/methods/union.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.union(arg)\n *\n * The union method adds the given array to the collection. If the given array contains keys that \n * are already in the original collection, the original collection's values will be preferred\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function union(arg) {\n  const collection = isArray(this.items) ? [] : {};\n  Object.keys(arg).forEach(key => {\n    collection[key] = this.items[key] === undefined ? arg[key] : this.items[key];\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/union.js?");

/***/ }),

/***/ "./src/methods/unique.js":
/*!*******************************!*\
  !*** ./src/methods/unique.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.unique(arg)\n *\n * The unique method returns all of the unique items in the collection. \n * The returned collection keeps the original array keys, so in the \n * following example we will use the values method to reset the \n * keys to consecutively numbered indexes\n */\n\nconst {\n  isArray,\n  isFunction\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function unique(arg) {\n  const collection = isArray(this.items) ? [] : {};\n  const existingKeys = [];\n  Object.keys(this.items).forEach(key => {\n    const compare = arg === undefined ? this.items[key] : isFunction(arg) ? arg(this.items[key], key, this.items) : this.items[key][arg];\n\n    if (existingKeys.indexOf(compare) === -1) {\n      existingKeys.push(compare);\n      isArray(this.items) ? collection.push(this.items[key]) : collection[key] = this.items[key];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/unique.js?");

/***/ }),

/***/ "./src/methods/unless.js":
/*!*******************************!*\
  !*** ./src/methods/unless.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.unless(value, cb, final)\n *\n * The unless method will execute the given callback unless the first argument given to the method evaluates to true\n */\n\nconst {\n  isFunction\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function unless(value, cb, final) {\n  if (!value) cb(this);\n  if (isFunction(final)) final(this);\n};\n\n//# sourceURL=webpack://$/./src/methods/unless.js?");

/***/ }),

/***/ "./src/methods/unlessEmpty.js":
/*!************************************!*\
  !*** ./src/methods/unlessEmpty.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.unlessEmpty()\n *\n * Alias for the whenNotEmpty method.\n */\n\nconst whenNotEmpty = __webpack_require__(/*! ./whenNotEmpty */ \"./src/methods/whenNotEmpty.js\");\n\nmodule.exports = whenNotEmpty;\n\n//# sourceURL=webpack://$/./src/methods/unlessEmpty.js?");

/***/ }),

/***/ "./src/methods/unlessNotEmpty.js":
/*!***************************************!*\
  !*** ./src/methods/unlessNotEmpty.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.unlessNotEmpty()\n *\n * Alias for the whenEmpty method.\n */\n\nconst whenEmpty = __webpack_require__(/*! ./whenEmpty */ \"./src/methods/whenEmpty.js\");\n\nmodule.exports = whenEmpty;\n\n//# sourceURL=webpack://$/./src/methods/unlessNotEmpty.js?");

/***/ }),

/***/ "./src/methods/unwrap.js":
/*!*******************************!*\
  !*** ./src/methods/unwrap.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.unwrap(value)\n *\n * The static unwrap method returns the collection's underlying items from the given value when applicable:\n */\n\nconst {\n  isCollection\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function unwrap(value) {\n  if (isCollection(value)) return value.all();\n  return value;\n};\n\n//# sourceURL=webpack://$/./src/methods/unwrap.js?");

/***/ }),

/***/ "./src/methods/values.js":
/*!*******************************!*\
  !*** ./src/methods/values.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.values()\n *\n * The values method appends an item to the end of the collection\n *\n */\n\nconst {\n  values: retrieveValues\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function values() {\n  return new this.constructor(retrieveValues(this.items));\n};\n\n//# sourceURL=webpack://$/./src/methods/values.js?");

/***/ }),

/***/ "./src/methods/when.js":
/*!*****************************!*\
  !*** ./src/methods/when.js ***!
  \*****************************/
/***/ ((module) => {

eval("\n/*\n * collection.when(value, cb, final)\n *\n * The when method will execute the given callback when the first argument given to the method evaluates to true:\n */\n\nmodule.exports = function when(value, cb, final) {\n  if (value) return cb(this, value);\n  if (final) return final(this, value);\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/when.js?");

/***/ }),

/***/ "./src/methods/whenEmpty.js":
/*!**********************************!*\
  !*** ./src/methods/whenEmpty.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.whenEmpty(cb, final)\n *\n * The whenEmpty method will execute the given callback when the collection is empty\n * A second closure may be passed to the whenEmpty method that will be executed when the collection is not empty\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function whenEmpty(cb, final) {\n  if (isArray(this.items) && this.isEmpty()) return cb(this);\n  if (!Object.keys(this.items).length) return cb(this);\n\n  if (final !== undefined) {\n    if (isArray(this.items) && this.isEmpty()) return final(this);\n    if (Object.keys(this.items).length) return final(this);\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/whenEmpty.js?");

/***/ }),

/***/ "./src/methods/whenNotEmpty.js":
/*!*************************************!*\
  !*** ./src/methods/whenNotEmpty.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.whenNotEmpty(cb, final)\n *\n * The whenNotEmpty method will execute the given callback when the collection is not empty\n */\n\nconst {\n  isArray\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function whenNotEmpty(cb, final) {\n  if (isArray(this.items) && this.isNotEmpty()) return cb(this);\n  if (Object.keys(this.items).length) return cb(this);\n\n  if (final !== undefined) {\n    if (isArray(this.items) && this.isEmpty()) return final(this);\n    if (!Object.keys(this.items).length) return final(this);\n  }\n\n  return this;\n};\n\n//# sourceURL=webpack://$/./src/methods/whenNotEmpty.js?");

/***/ }),

/***/ "./src/methods/where.js":
/*!******************************!*\
  !*** ./src/methods/where.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.where(...args)\n *\n * The where method filters the collection by a given key / value pair:\n *\n */\n\nconst {\n  values,\n  nested\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function where(...args) {\n  let key, operator, value, collection;\n\n  if (args.length === 1) {\n    key = args[0];\n    operator = undefined;\n  }\n\n  if (args.length === 2) {\n    key = args[0];\n    operator = args[1] === true || args[1] === false ? args[1] : '===';\n    value = args[1] === true || args[1] === false ? undefined : args[1];\n  }\n\n  if (args.length === 3) {\n    key = args[0];\n    operator = args[1];\n    value = args[2];\n  }\n\n  const items = values(this.items);\n\n  if (operator === undefined || operator === true) {\n    collection = items.filter(item => {\n      return nested(item, key);\n    });\n  }\n\n  if (operator === false) {\n    collection = items.filter(item => {\n      return !nested(item, key);\n    });\n  }\n\n  if (operator === '==') {\n    collection = items.filter(item => {\n      return nested(item, key) === Number(value) || nested(item, key) === value.toString();\n    });\n  }\n\n  if (operator === '===') {\n    collection = items.filter(item => {\n      return nested(item, key) === value;\n    });\n  }\n\n  if (operator === '!=' || operator === '<>') {\n    collection = items.filter(item => {\n      return nested(item, key) !== Number(value) && nested(item, key) !== value.toString();\n    });\n  }\n\n  if (operator === '!==') {\n    collection = items.filter(item => {\n      return nested(item, key) !== value;\n    });\n  }\n\n  if (operator === '<' || operator === 'lt') {\n    collection = items.filter(item => {\n      return nested(item, key) < value;\n    });\n  }\n\n  if (operator === '<=' || operator === 'lte') {\n    collection = items.filter(item => {\n      return nested(item, key) <= value;\n    });\n  }\n\n  if (operator === '>' || operator === 'gt') {\n    collection = items.filter(item => {\n      return nested(item, key) > value;\n    });\n  }\n\n  if (operator === '>=' || operator === 'gte') {\n    collection = items.filter(item => {\n      return nested(item, key) >= value;\n    });\n  }\n\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/where.js?");

/***/ }),

/***/ "./src/methods/whereBetween.js":
/*!*************************************!*\
  !*** ./src/methods/whereBetween.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.whereBetween(key, values)\n *\n * The whereBetween method filters the collection by determining if a specified item value is within a given range\n */\n\nconst {\n  isArray,\n  nested\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function whereBetween(key, values) {\n  const min = Math.min(...values);\n  const max = Math.max(...values);\n  const collection = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach(index => {\n    const value = nested(this.items[index], key);\n\n    if (value >= min && value <= max) {\n      isArray(this.items) ? collection.push(this.items[index]) : collection[key] = this.items[index];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/whereBetween.js?");

/***/ }),

/***/ "./src/methods/whereIn.js":
/*!********************************!*\
  !*** ./src/methods/whereIn.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.whereIn(key, values)\n *\n * The whereIn method removes elements from the collection that do not have \n * a specified item value that is contained within the given array\n */\n\nconst {\n  isArray,\n  nested,\n  values: extractValues\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function whereIn(key, values) {\n  const collection = isArray(this.items) ? [] : {};\n  let compare = extractValues(values);\n  if (!isArray(compare)) compare = [compare];\n  Object.keys(this.items).forEach(index => {\n    const value = nested(this.items[index], key);\n\n    if (compare.indexOf(value) !== -1) {\n      isArray(this.items) ? collection.push(this.items[index]) : collection[key] = this.items[index];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/whereIn.js?");

/***/ }),

/***/ "./src/methods/whereInstanceOf.js":
/*!****************************************!*\
  !*** ./src/methods/whereInstanceOf.js ***!
  \****************************************/
/***/ ((module) => {

eval("\n/*\n * collection.whereInstanceOf(type)\n *\n * The whereInstanceOf method filters the collection by a given class type\n */\n\nmodule.exports = function whereInstanceOf(type) {\n  return this.filter(item => item instanceof type);\n};\n\n//# sourceURL=webpack://$/./src/methods/whereInstanceOf.js?");

/***/ }),

/***/ "./src/methods/whereNotBetween.js":
/*!****************************************!*\
  !*** ./src/methods/whereNotBetween.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.whereNotBetween()\n *\n *\n */\n\nconst {\n  isArray,\n  nested\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function whereNotBetween(key, values) {\n  const min = Math.min(...values);\n  const max = Math.max(...values);\n  const collection = isArray(this.items) ? [] : {};\n  Object.keys(this.items).forEach(index => {\n    const value = nested(this.items[index], key);\n\n    if (value < min || value > max) {\n      isArray(this.items) ? collection.push(this.items[index]) : collection[key] = this.items[index];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/whereNotBetween.js?");

/***/ }),

/***/ "./src/methods/whereNotIn.js":
/*!***********************************!*\
  !*** ./src/methods/whereNotIn.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.whereNotIn(key, values)\n *\n * The whereNotIn method removes elements from the collection that have \n * a specified item value that is not contained within the given array\n */\n\nconst {\n  isArray,\n  nested,\n  values: extractValues\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function whereNotIn(key, values) {\n  const collection = isArray(this.items) ? [] : {};\n  let compare = extractValues(values);\n  if (!isArray(compare)) compare = [compare];\n  Object.keys(this.items).forEach(index => {\n    const value = nested(this.items[index], key);\n\n    if (compare.indexOf(value) === -1) {\n      isArray(this.items) ? collection.push(this.items[index]) : collection[key] = this.items[index];\n    }\n  });\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/whereNotIn.js?");

/***/ }),

/***/ "./src/methods/whereNotNull.js":
/*!*************************************!*\
  !*** ./src/methods/whereNotNull.js ***!
  \*************************************/
/***/ ((module) => {

eval("\n/*\n * collection.whereNotNull()\n *\n * The whereNotNull method returns items from the collection where the given key is not null\n */\n\nmodule.exports = function whereNotNull(key = null) {\n  return this.where(key, '!==', null);\n};\n\n//# sourceURL=webpack://$/./src/methods/whereNotNull.js?");

/***/ }),

/***/ "./src/methods/whereNull.js":
/*!**********************************!*\
  !*** ./src/methods/whereNull.js ***!
  \**********************************/
/***/ ((module) => {

eval("\n/*\n * collection.whereNull(key)\n *\n * The whereNull method returns items from the collection where the given key is null\n */\n\nmodule.exports = function whereNull(key = null) {\n  return this.where(key, '===', null);\n};\n\n//# sourceURL=webpack://$/./src/methods/whereNull.js?");

/***/ }),

/***/ "./src/methods/wrap.js":
/*!*****************************!*\
  !*** ./src/methods/wrap.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.wrap()\n *\n * The static wrap method wraps the given value in a collection when applicable\n */\n\nconst {\n  isArray,\n  isObject,\n  isCollection\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function wrap(value) {\n  if (isCollection(value)) return value;\n  if (isArray(value) || isObject(value)) return new this.constructor(value);\n  return new this.constructor([value]);\n};\n\n//# sourceURL=webpack://$/./src/methods/wrap.js?");

/***/ }),

/***/ "./src/methods/zip.js":
/*!****************************!*\
  !*** ./src/methods/zip.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/*\n * collection.zip(arg)\n *\n * The zip method merges together the values of the given array with the\n * values of the original collection at their corresponding index\n */\n\nconst {\n  isCollection\n} = __webpack_require__(/*! ../common */ \"./src/common.js\");\n\nmodule.exports = function zip(arg) {\n  if (isCollection(arg)) arg = arg.all();\n  const collection = this.items.map((item, index) => new this.constructor([item, arg[index]]));\n  return new this.constructor(collection);\n};\n\n//# sourceURL=webpack://$/./src/methods/zip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	$ = __webpack_exports__;
/******/ 	
/******/ })()
;