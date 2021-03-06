/*
You are given the length of a video in minutes. The format is mm:ss (e.g.: "02:54"). Create a function that takes the video length and return it in seconds.
Examples
-----------------
minutesToSeconds("01:00") ➞ 60
minutesToSeconds("13:56") ➞ 836
minutesToSeconds("10:60") ➞ false

Notes
-----------------
    The video length is given as a string.
    If the number of seconds is 60 or over, return false (see example #3).
    You may get a number of minutes over 99 (e.g. "121:49" is perfectly valid).
    
minutesToSeconds("01:00"), 60)
minutesToSeconds("13:56"), 836)
minutesToSeconds("10:60"), false, "60 is invalid")
minutesToSeconds("132:21"), 7941)
minutesToSeconds("132:271"), false)
minutesToSeconds("01:30"), 90)
minutesToSeconds("10:00"), 600)

*/
function minutesToSeconds(time) {
	sec=time.split(":")
  return (sec[1]>=60) ? false : parseInt(sec[0])*60+parseInt(sec[1])
}
const minutesToSeconds = time => {
	let [minutes, seconds] = time.split(":").map(Number);
	return seconds < 60 ? (minutes * 60) + seconds : false;
}
