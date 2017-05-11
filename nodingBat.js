// 1. The parameter weekday is true if it is a weekday, and the parameter vacation // is true if we are on vacation. We sleep in if it is not a weekday or we're on // vacation. Return true if we sleep in.

var sleepIn = function(weekday, vacation){
	if (!weekday || vacation) {
      return true
    } else {
      return false
    }
}

// 2. Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

var diff21 = function(n){
 if (n < 21) {
   return (21 - n)
 } else {
   return ((n - 21)*2)
 }
}

// 3. Given a string, return true if the string starts with 'hi' and false otherwise.

var startHi = function(str){
  if (str.startsWith('hi')) {
    return true
  } else {
    return false
  }
}

// 4. Given a string, return true if it ends in 'ly'.

var endsLy=function(str) {
  if (str.endsWith('ly')) {
    return true
  } else {
    return false
  }
}

// 5. We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

var monkeyTrouble=function(aSmile, bSmile){
  if (aSmile && bSmile || !aSmile && !bSmile) {
    return true
  } else {
    return false
  }
}

// 6. Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

missingChar = function(str, n){
  var newString = '';
  for (i=0; i<str.length; i++) {
    if (i == n) {
      continue
    } else {
			newString += str.charAt(i)
		}
  } return newString;
}

// 7. We have a loud talking parrot. The 'hour' parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return True if we are in trouble.

var parrotTrouble=function(talking, hour) {
  if (talking && hour < 7 || talking && hour > 20) {
    return true
  } else {
    return false
  }
}

// 8. Return true if the given non-negative number is a multiple of 3
// or a multiple of 5. (Hint: Use the % 'mod' operator)

var or35=function(n) {
  if (n % 3 === 0 || n % 5 === 0) {
    return true
  } else {
    return false
  }
}

// 9. Given 2 int values, return True if one is negative and one is positive.
// Except if the parameter 'negative' is True, then return True only if
// both are negative.

var posNeg=function(a, b, negative) {
  if (!negative && a < 0 && b > 00 || !negative && a > 0 && b <0) {
    return true
  }
  if (negative && a < 0 && b < 0) {
    return true
  } else {
    return false
  }
}

// 10. Given two temperatures, return true if one is less than 0 and
// the other is greater than 100.

var icyHot=function(temp1, temp2) {
  if (temp1<0 && temp2>100 || temp1>100 && temp2<0) {
    return true
  } else {
    return false
  }
}

// 11. Return true if the given string begins with 'mix', except the 'm' can be anything,
//so 'pix', '9ix' .. all count.

var mixStart=function(str){

  if (str[1] == 'i' && str[2] == 'x') {
    return true
  } else {
    return false
  }
}

// 12. Return true if the given string contains between 1 and 3 'e' chars.

var stringE=function(str){
  count = 0;
  for (i=0; i<str.length; i++) {
    if (str[i] == 'e') {
      count++
    }
  }
  if (count > 0 && count < 4) {
    return true
  } else {
    return false
  }
}

// 13. Given an int n, return True if it is within 10 of 100 or 200. Note: abs(num) computes the absolute value of a number.

nearHundred = function(n){
  if (n > 89 && n < 111 || n > 189 && n < 211) {
    return true
  } else {
    return false
  }
}

// 14. Given a string, return a new string where the first and last chars have been exchanged.

var frontBack=function(str) {
  newStr = '';
  if (str.length>1) {
    firstLetter = str.charAt(0);
  	word = str.slice(1, str.length-1);
  	lastLetter = str.charAt(str.length-1);
  	newStr= lastLetter + word + firstLetter;
  } else {
    return str
  }
  return newStr;
}

// 15. Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.

var backAround = function(str){

   newStr='';

    lastLetter= str.charAt(str.length-1);
    newStr= lastLetter + str + lastLetter

  return newStr;

}

// 16. Given 2 int values, return true if they are both in the range 30..40 inclusive,
// or they are both in the range 40..50 inclusive.

var in3050=function(a ,b) {
  if (a>29 && a<41 && b>29 && b<41) {
    return true
  } else if (a>39 && a<51 && b>39 && b<51) {
    return true
  } else {
    return false
  }
}

// 17. Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so 'ozymandias' yields 'oz'.

var startOz=function(str) {
  newStr = '';
  if (str.startsWith('oz')) {
    newStr = 'oz'
  } else {
    for (i=0; i<str.length; i++) {
	    if (str.charAt(0) == 'o') {
	      newStr = str.charAt(0);
	    }
	    if (str.charAt(1) == 'z') {
	      newStr = str.charAt(1);
	    }
  	}
  }
  return newStr;
}

// 18. Given two int values, return their sum. Unless the two values are the same, then return double their sum.

var sumDouble=function(a ,b) {
  if (a == b) {
    return ((a + b) * 2)
  } else {
    return (a + b)
  }
}

// 19. Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

var makes10=function(a ,b) {
  if (a + b == 10) {
    return true
  } else if ( a == 10 || b == 10) {
    return true
  } else {
    return false
  }
}

// 20. Given a string, return a new string where 'not ' has been added to the front. However, if the string already begins with 'not', return the string unchanged.

var notString=function(str) {
  if (str.startsWith('not')) {
    return str
  } else {
    return 'not ' + str
  }
}

// 21. Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.
var front3=function(str) {
  front = str.charAt(0)+str.charAt(1)+str.charAt(2);
  return front + front + front;
}
// 22. Given a string, take the first 2 chars and return the string with the 2 chars added at both the // front and back, so 'kitten' yields 'kikittenki' chars are there.
var front22=function(str) {
  front = str.charAt(0)+str.charAt(1);
  return front+str+front;
}
// 23. Given 2 int values, return true if either of them is in the range 10..20 inclusive.
var in1020=function(a, b) {
  if (a > 9 && a < 21 || b > 9 && b < 21) {
    return true
  } else {
    return false
  }
}
// 24. Given a string, if the string "del" appears starting at index 1, return a string // where that "del" has been deleted. Otherwise, return the string unchanged.
var delDel=function(str) {
 if (str.charAt(1)=='d' && str.charAt(2)=='e' && str.charAt(3)=='l') {
    return str.charAt(0)+str.slice(4, str.length)
  } else {
    return str
  }
} //There is probably a much better way to do this one.
// 25. Given a string name, e.g. 'bob', return a greeting of the form 'Hello Bob!.

var helloName=function(name) {
  greeting = 'Hello ' + name;
  return greeting;
}

// 26. Given two strings, a and b, return the result of putting them together in the order abba, e.g. 'Hi' and 'Bye' returns 'HiByeByeHi'.

var makeAbba=function(a, b) {
  jumbled = a + b + b + a;
  return jumbled;
}

// 27. Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

var extraEnd=function(str) {
  last = str.charAt(str.length-2) + str.charAt(str.length-1);
  return last+last+last;
}

// 28. Given a string, return a version without the first and last char, so 'Hello' yields 'ell'.

var withoutEnd=function(str) {
  return str.slice(1, str.length-1);
}

// 29. Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

var comboString=function(a, b) {
  if (a.length > b.length) {
    return b+a+b
  } else {
    return a+b+a
  }
}

// 30. Given a string, return the string made of its first two chars, so the String 'Hello' yields 'He'. If the string is shorter than length 2, return whatever

var firstTwo=function(str) {
  newStr = '';
  if (str.length < 2) {
    return str
  } else {
    newStr = str.charAt(0) + str.charAt(1);
  } return newStr;
}

// 31. Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

var endUp=function(str) {
     if (str.length < 3) {
   	   return str.toUpperCase();
    	}
  	 else {
    	  var str2 = str.slice((str.length-3), str.length);
    	  var arr = str.split("");
    	  arr.splice(-3, 3);
    	  ver newStr = arr.join("") + str2.toUpperCase();

    	  return  newStr;
      }
}
