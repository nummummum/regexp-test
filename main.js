const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// 앞쪽일치 @ 기호 앞의 1개의 임의의 것을 일치한다.
console.log(
    str.match(/.{1,}(?=@)/g)
)

// 뒤쪽일치 @ 기호 뒤에 1개의 임의의 것을 일치한다.
console.log(
    str.match(/(?<=@).{1,}/g)
)