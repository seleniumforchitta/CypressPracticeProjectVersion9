let str1 = "listen"
let str2 = "silpnt"
let val = true
if(str1.length == str2.length)
{
    for(i in str1)
    {
        if(str1.indexOf(str2.charAt(i))==-1)
        {
            val = false
        }
    }
}
if(val)
{
    console.log("it is a anagram")
}
else console.log("It is not an anagram")

