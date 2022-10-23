# Collection
Convenient and dependency free wrapper for working with javascript arrays and objects.
This package is heavily inspired by Laravel and collect.js. 


## Installation
npm install js-turanga/collection --save


## Usage
Using collection by require

	const collect = require('collection.js');

	collect(users)
	  .where('age', '>', 30)
	  .sortBy('name');


## Documentation
Please refer to Laravels Collection documentation https://laravel.com/docs/8.x/collections#available-methods

* all 				The all method returns the underlying array represented by the collection
* average 			The avg method returns the average value of a given key:
* chunk 			The chunk method breaks the collection into multiple, smaller collections of a given size
* collapse 			The collapse method collapses a collection of arrays into a single, flat collection
* collect 			The collect method returns a new Collection instance with the items currently in the collection
* combine 			The combine method combines the values of the collection, as keys, with the values of another array or collection
* concat 			The concat method appends the given array or collection's values onto the end of another collection
* contains 			The contains method determines whether the collection contains a given item
* count 			The count method returns the total number of items in the collection
* countBy 			The countBy method counts the occurrences of values in the collection
* crossJoin 		The crossJoin method cross joins the collection's values among the given arrays or collections
* dd 				The dd method dumps the collection's items and ends execution of the script
* diff 				The diff method compares the collection against another collection or array based on its values
* diffAssoc 		The diffAssoc method compares the collection against another collection or array based on its keys and values. 
* diffKeys 			The diffKeys method compares the collection against another collection or array based on its keys.
* dump 				The dump method dumps the collection's items
* duplicates 		The duplicates method retrieves and returns duplicate values from the collection
* each 				The each method iterates over the items in the collection and passes each item to a closure
* eachSpread 		The eachSpread method iterates over the collection's items, passing each nested item value into the given callback
* every 			The every method may be used to verify that all elements of a collection pass a given truth test
* except 			The except method returns all items in the collection except for those with the specified keys
* filter 			The filter method filters the collection using the callback, keeping only those items that pass a given truth test
* first 			The first method returns the first element in the collection that passes a given truth test
* firstWhere 		The firstWhere method returns the first element in the collection with the given key / value pair
* flatMap 			The flatMap method iterates through the collection and passes each value to the given closure.
* flatten 			The flatten method flattens a multi-dimensional collection into a single dimension
* flip 				The flip method swaps the collection's keys with their corresponding values
* forget 			The forget method removes an item from the collection by its key
* forPage 			The forPage method returns a new collection containing the items that would be present on a given page number.
* get 				The get method returns the item at a given key. If the key does not exist, null is returned
* groupBy 			The groupBy method groups the collection's items by a given key
* has 				The has method determines if a given key exists in the collection
* implode 			The implode method joins items in a collection.
* intersect 		The intersect method removes any values from the original collection that are not present
* intersectByKeys 	The intersectByKeys method removes any keys and their corresponding values that are not present
* isEmpty 			The isEmpty method returns true if the collection is empty; otherwise, false is returned
* isNotEmpty 		The isNotEmpty method returns true if the collection is not empty; otherwise, false is returned
* join 				The join method joins the collection's values with a string
* keyBy 			The keyBy method keys the collection by the given key. If multiple items have the same key, only the last will appear
* keys 				The keys method returns all of the collection's keys
* last 				The last method returns the last element in the collection that passes a given truth test
* macro 			The macro method allows you to add methods to the Collection class at run time. 
* make 				The static make method creates a new collection instance.
* map 				The map method iterates through the collection and passes each value to the given callback.
* mapInto 			The mapInto method iterates over the collection, creating a new instance by passing the value into the constructor
* mapSpread 		The mapSpread method iterates over the collection's items, passing each nested item value into the given closure.
* mapToGroups 		The mapToGroups method groups the collection's items by the given closure.
* mapWithKeys 		The mapWithKeys method iterates through the collection and passes each value to the given callback
* max 				The max method returns the maximum value of a given key
* median 			The median method returns the median value of a given key
* merge 			The merge method merges the given array or collection with the original collection.
* mergeRecursive 	The mergeRecursive method merges the given array or collection recursively with the original collection.
* min 				The min method returns the minimum value of a given key
* mode 				The mode method returns the mode value of a given key
* nth 				The nth method creates a new collection consisting of every n-th element
* only 				The only method returns the items in the collection with the specified keys
* pad 				The pad method will fill the array with the given value until the array reaches the specified size
* partition 		The partition method may be combined with array destructuring to separate elements that pass a given truth test
* pipe 				The pipe method passes the collection to the given closure and returns the result of the executed closure
* pipeInto 			The pipeInto method creates a new instance of the given class and passes the collection into the constructor
* pluck 			The pluck method retrieves all of the values for a given key
* pop 				The pop method removes and returns the last item from the collection
* prepend 			The prepend method adds an item to the beginning of the collection
* pull 				The pull method removes and returns an item from the collection by its key
* push 				The push method appends an item to the end of the collection
* put 				The put method sets the given key and value in the collection
* random 			The random method returns a random item from the collection
* range 			The range method returns a collection containing integers between the specified range
* reduce 			The reduce method reduces the collection to a single value, passing each iteration into iteration
* reduceSpread 		The reduceSpread method reduces the collection to an array of values, passing each iteration into iteration
* reject 			The reject method filters the collection using the given closure
* replace 			The replace method will overwrite items in the collection that have matching numeric keys
* replaceRecursive 	This method works like replace, it will recur into arrays and apply the replacement process to the inner values
* reverse 			The reverse method reverses the order of the collection's items, preserving the original keys
* search 			The search method searches the collection for the given value and returns its key if found.
* shift 			The shift method removes and returns the first item from the collection
* shuffle 			The shuffle method randomly shuffles the items in the collection
* sliding 			The sliding method returns a new collection of chunks representing a "sliding window" view of the items
* skip 				The skip method returns a new collection, with the given number of elements removed from the beginning
* skipUntil 		The skipUntil method skips items from the collection until the given callback returns true and returns remaining  
* skipWhile 		The skipWhile method skips over items from the collection while the given callback returns true 
* slice 			The slice method returns a slice of the collection starting at the given index
* sole 				The sole method returns the first element in the collection that passes a given truth test
* some 				Alias for the contains method.
* sort 				The sort method sorts the collection. The sorted collection keeps the original array keys
* sortBy 			The sortBy method sorts the collection by the given key.
* sortByDesc 		This method has the same signature as the sortBy method, but will sort the collection in the opposite order.
* sortDesc 			This method will sort the collection in the opposite order as the sort method
* sortKeys 			The sortKeys method sorts the collection by the keys of the underlying associative array
* sortKeysDesc 		This method has the same signature as the sortKeys method, but will sort the collection in the opposite order.
* splice 			The splice method removes and returns a slice of items starting at the specified index
* split 			The split method breaks a collection into the given number of groups
* sum 				The sum method returns the sum of all items in the collection
* take 				The take method returns a new collection with the specified number of items
* takeUntil 		The takeUntil method returns items in the collection until the given callback returns true
* takeWhile 		The takeWhile method returns items in the collection until the given callback returns false
* tap 				The tap method passes the collection to the given callback, while not affecting the collection itself. 
* times 			The static times method creates a new collection by invoking the given closure a specified number of times
* toArray 			The toArray method converts the collection into an array
* toJson 			The toJson method converts the collection into a JSON serialized string
* transform 		The transform method iterates over the collection and calls the given callback with each item in the collection
* union 			The union method adds the given array to the collection
* unique 			The unique method returns all of the unique items in the collection
* unless 			The unless method will execute the given callback unless the first argument given to the method evaluates to true
* unlessEmpty 		Alias for the whenNotEmpty method.
* unlessNotEmpty 	Alias for the whenEmpty method.
* unwrap 			The static unwrap method returns the collection's underlying items from the given value when applicable
* values 			The values method returns a new collection with the keys reset to consecutive integers
* when 				The when method will execute the given callback when the first argument given to the method evaluates to true
* whenEmpty 		The whenEmpty method will execute the given callback when the collection is empty
* whenNotEmpty 		The whenNotEmpty method will execute the given callback when the collection is not empty
* where 			The where method filters the collection by a given key / value pair
* whereBetween 		The whereBetween method filters the collection by determining if a specified item value is within a given range
* whereIn 			The whereIn method removes elements from the collection that do not have a specified item value
* whereInstanceOf 	The whereInstanceOf method filters the collection by a given class type
* whereNotBetween 	The whereNotBetween method filters the collection by determining item values outside of a given range
* whereNotIn 		The whereNotIn method removes elements from the collection that have a value that is not within the given array
* whereNotNull 		The whereNotNull method returns items from the collection where the given key is not null
* whereNull 		The whereNull method returns items from the collection where the given key is null
* wrap 				The static wrap method wraps the given value in a collection when applicable
* zip				The zip method merges together the values of the given array with the values of the original collection

