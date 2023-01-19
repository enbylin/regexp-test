const str = `
010-2544-7272
enby@kakao.com
http://www.omdbapi.com/?i=tt3896198&apikey=3ad8045d
https://www.omdbapi.com/?i=tt3896198&apikey=3ad8045d
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Integer vel orci ac urna dictum tincidunt. Integer facilisis
dolor eu quam vehicula commodo. Vivamus the varius velit sed odio
facilisis auctor. Aenean eu eleifend sem. Maecenas non quam sem.
Quisque auctor urna at ex volutpat blandit. Sed nec the eleifend diam.
동해물과 백두산이 마르고 닳도록_
abbcccdddd
`

// const regexp = new RegExp('In', 'gi')

// const regexp =/\.$/gim

// console.log(str.match(regexp))

// console.log(regexp.test(str))

// const temp = str.replace(regexp, '더')
// console.log(temp)

// const regexp = /\bf\w{1,}\b/g
// const regexp = /\s/g

// console.log(str.match(regexp))

// console.log(str.replace(regexp, ''))

console.log(
  str.match(/(?<=@).{1,}/g)
)