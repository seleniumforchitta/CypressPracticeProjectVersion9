let str1 = "listen"
let str2 = "silent"
let val = true
str1 = str1.replace(/\s/g, '').toLowerCase()
str2 = str2.replace(/\s/g, '').toLowerCase()
console.log(str1, str2)

if (str1.length !== str2.length) {
  val = false
}
else {
  // Sort the characters in the given string
  str1 = str1.split('').sort().join('')
  str2 = str2.split('').sort().join('')
  console.log(str1, str2)

  if (str1 !== str2) {
    val = false
  }
}

if (val == true)
  console.log("It is anagram")
else console.log("It is not an anagram")