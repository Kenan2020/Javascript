/*
The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?
Examples
------------
clone([1, 2, 3]) ➞ [1, 2, 3, [1, 2, 3]]
clone(["x", "y"]) ➞ ["x", "y", ["x", "y"]]

Notes
------------
N/A

clone([1,1]),[1,1,[1,1]]
clone(['a','b','c']),['a','b','c',['a','b','c']]
clone([]),[[]]
*/
function clone(arr) {
	return [...arr, arr]
}
