- 함수 - 명시적this

```tsx
interface Cat {
	name: string
	age: number
}
const cat: Cat = {
	name: 'Lucy',
	age: 3
}

function hello(message: string) {
	console.log(`Hello ${this.name}, ${message}`) //에러발생 'this'에는 형식 주석이 없으므로 암시적으로 'any'형식이 포함
}
hello.call(cat, 'You are pretty awesome!')

//Hello Lucy, You are pretty awesome! 출력

->
interface Cat {
	name: string
	age: number
}
const cat: Cat = {
	name: 'Lucy',
	age: 3
}

function hello(this: Cat, message: string) { //this는 Cat이라는 객체데이터가 될꺼라고 명시적으로 지정
	console.log(`Hello ${this.name}, ${message}`)
}
hello.call(cat, 'You are pretty awesome!')
```

- 함수 - 오버로딩(Overloading) 하나의 이름으로 함수를 사용 가능

```tsx
1)
function add1(a: string, b: string) {
	return a + b
}
function add2(a: number, b: number) {
	return a + b
}
add1('hello ', 'world~') //'hello world~'
add2(1, 2) //3
add1('hello ', 2) //2에서 에러발생
add2('hello ', 2) //'hello '에서 에러발생

2)
function add(a: string, b: string): string //타입선언
function add(a: number, b: number): number //타입선언
function add(a: any, b: any): { //함수구현 위의 타입선언 두가지가 어떤것이든 사용이 가능하다 (조합해서는 불가능)
	return a + b
}
add('hello ', 'world~') //''hello world~'
add(1, 2) // 3
add('hello ', 2) //에러
add(1, 'world~') //에러
```