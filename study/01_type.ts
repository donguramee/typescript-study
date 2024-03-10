- 문자

```tsx
let str: string
let red: string = "Red"
let green: string = 'Green'
let myColor: string = `My color is ${red}`
let yourColor: string = 'Your color is' + green
```

- 숫자

```tsx
let num: number
let integer: nimber = 6
let float: number = 3.14
let infinity: number = Infinity
let nan: number = NaN
```

- 불린

```tsx
let isBoolean: boolean
let isDone: boolean = false
```

- Null / Undefined (직접적으로 적용할 일은 거의 없음)

```tsx
let null: null
let und: undefined
console.log(nul) //undefined ->에러발생
console.log(und) //undefined
```

- 배열

```tsx
const fruits: string[] = ['Apple', 'Banana', 'Cherry']
const number: numbers: number[] = [1, 2, 3, 4, 5, 6, 7]
const union: (string|number)[] = ['Apple', 1, 2, 'Banana', 3]
```

- 객체 typeof DATA === ‘object’

```tsx
const obj: object = {}
const arr: object = []
const func: object = function () {}

const userA: {
	name: string
	age: number
	isValid: boolean
} = {
	name: 'Rami',
	age: 30,
	isValid: true
}
```

- 함수

```tsx
const add: (x: number, y:number) => number = function (x, y) {
	return x + y
}
const a: number = add(1, 2)

const hello: () => void = function () {
	console.log('Hello woeld~')
}
const h: void = hello()
```

- Any(js와 별반다를게 없기 때문에 잘 안쓰지만 쓰더라도 엄격하게 관리할 필요가 있음)

```tsx
let hello: any = 'Hello world'
hello = 123
hello = false
hello = null
hello = {}
hello = []
hello = function () {}
```

- Unknown

```tsx
const a: any = 123
const u: unknown = 123

const any: any = a
const boo: boolean = a
const num: number = a
const arr: string[] = a
const obj: { x:string, y: number } = a
```

- Tuple

```tsx
const tuple: [string, number, boolean] = ['a', 1, false]

const users: [number, string, boolean][]
	= [[1, 'Neo', true], [2,'Evan', false], [3, 'Lewis', true]]
```

- Void(리턴 키워드를 작성하지 않은 함수 안에서 반환되는 데이터의 타입)

```tsx
function hello(msg: string): void {
	console.log(`Hello ${msg}`)
}
const hi: void = hello('world')
```

- Never(절대 발생하지 않는 값 - 거의 쓸일없음)

```tsx
const nev: [] = []
nev.push(3)
```

- Union

```tsx
let union: string | number //문자와 숫자만 할당 |<-또는 버티컬바
union = 'Hello type'
union = 123
union = false //동시에 여러가지 타입을 적용하기 좋지만 boolean데이터는 형식에 없으므로 오류
```

- Intersection

```tsx
interface User {
	name: string,
	age: number
}
interface Validation {
	isValid: boolean
}
const rami: User & Validation = { //User, Validation이 같이 존재해야함
	name: 'Neo',
	age: 30,
	isValid: true
}
```