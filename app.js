// chapter38-42


// ansno1.

// var a = 25;
// var b = 20;
// function power(a,b)
// {
//     return a**b
// }
// document.write(power(a,b))

// ansno2.

//  var year = prompt("Enter the year to find it is leap year or not")
//  function lyear(year)
//  {
//      let y = parseInt(year)
//      if(y%4==0)
//      {
//          return `${year} is the leap Year`
//      }
//      else{
//          return `${year} is not the leap year`
//      }
// }
// document.write(lyear(year))


// ansno3.

// var a = 20;
// var b = 35;
// var c =10;
// function calS(a,b,c)
// {
//     return (a+b+c)/2
// }
// var d = calS(a,b,c)

// function calArea(a,b,c,d)
// {
//     return `area = ${ d*(d-a)*(d-b)*(d-c)}`
// }

// document.write(calArea(a,b,c,d));


// ansno4.



// var sub1 = prompt("Enter your marks taken in chemistry")
// var sub2 = prompt("Enter your marks taken in physics")
// var sub3 = prompt("Enter your marks taken in Maths")
// var total = 300;

// function mainfunction(aver,per)
// {
//     return `The average of you marks = ${Math.floor(aver)} <br>The percentage is: ${Math.floor(per)}%`
// }

// function calAver(sub1,sub2,sub3)
// {
//     let a = parseInt(sub1)
//     let b = parseInt(sub2)
//     let c = parseInt(sub3)

//     return ((a+b+c)/3)
// }
// var aver = calAver(sub1,sub2,sub3);

// function calPer(sub1,sub2,sub3,total)
// {
//     let a = parseInt(sub1) , b = parseInt(sub2) , c = parseInt( sub3)
//     return (((a+b+c)/total)*100)

// }
// var per = calPer(sub1,sub2,sub3,total);
// document.write( mainfunction(aver,per))


// ansno5.
// var str = "a quick brown fox jumps over the lazzy dog"
// var char = "g"
// function indexOf(str,char)
// {
//     for(i=0;i<str.length; i++)
//     {
//         if(str[i]==char)
//         {
//             return i;
//             break;
//         }
//     }

// }
// console.log(indexOf(str,char))



// ansno6.
// var str = "The quick brown fox jumps over the lazzy dog"
// function delVowel(str)
// {
//  return str.replaceAll("a","").replaceAll("e","").replaceAll("i","").replaceAll("o","").replaceAll("u","")
// }
// document.write(delVowel(str))

// ansno7.
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var chars = str.toLowerCase().split("");
//     var count = 0;

//     for(let i = 0; i < chars.length - 1; i++) {
//       var char = chars[i];
//       var next = chars[i + 1];


//       if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
//         count++
//       }
//     }

//     return count;
//   }


//   function isCorrectCharacter(char) {
//     switch (char) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         return true;
//       default:
//         return false;
//     }
//   }

//   var found = findOccurrences();

//   console.log(found);

// ansno8.

// let distance = prompt("Enter the distance between Hyderabad and karachi in KiloMeter\n:)")
// function meter(distance) {
//     let m = Number(distance)
//     return (m * 1000) + " Meters"
// }
// function feet(distance) {
//     let f = Number(distance)
//     return (f * 3280) + " Feet"
// }
// function inches(distance) {
//     let i = Number(distance)
//     return (i * 39370) + " Inches"
// }
// function cm(distance) {
//     let c = Number(distance)
//     return (c * 100000) + " Centimeters"
// }
// console.log(meter(distance), feet(distance), inches(distance), cm(distance))

// ansno9.
// var time = prompt("Enter your time worked this week")

// function overTime(time)
// {
//     if(time>40)
//     {
//         let a = Number(time)
//         let i = a-40
//         return (i*12)
//     }
//     else
//     {
//         return 0;
//     }
// }
// console.log("This week your income of over time is:Rs.",overTime(time))


// ansno10.
// let amount = prompt("Welcome to Hamid banks limited\nEnter amount to with draw",000)

// function curr(amount)
// {
//     let a = amount.split("")
//     var b;

//     if(a[1]>5)
//     {
//          b ="1 fifty notes "+(a[1]-5)+" ten notes"
//     }
//     else if(a[1]<5)
//     {
//          b = a[1]+" ten notes";
//     }
//     else
//     {
//         b="1 fifty notes";
//     }
//     return "You will have "+a[0]+" hundred notes "+b
// }
// console.log("You will have "+curr(amount))

// chapterno43-48

// ansno1.

// function greet(){
//     alert('Hello User')
// }

// ansno2.

// function thanks(){
//     alert('Thanks purchasing phone from us')
// }
// ansno3.
// function remove(e){
//     e.parentNode.parentNode.remove()

// }

// ansno5.
// function increase() {
//     var value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     console.log(value)
//     value = value + 1
//     document.getElementById("counter").innerHTML = value
// }
//  function decrease() {
//     var value = document.getElementById("counter").innerHTML
//     value = parseInt(value)
//     value = value - 1
//     document.getElementById("counter").innerHTML = value
// }