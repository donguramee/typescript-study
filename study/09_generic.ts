- 함수

```tsx
interface Obj {
	x: number
}
type Arr = [number, number]

function toArray(a: string, b: string): string[]
function toArray(a: number, b: number): number[]
function toArray(a: boolean, b: boolean): boolean[]
function toArray(a: Obj, b: Obj): Obj[]
function toArray(a: Arr, b: Arr): Arr[]
function toArray(a: any, b: any) {
	return [a, b]
}

console.log(
	toArray('Neo', 'Anderson'),
	toArray(1, 2),
	toArray(true, false),
	toArray({ x: 1 }, { x: 2 }),
	toArray([1, 2], [3, 4])
)

->오버로딩 개념을 계속 넣으면 불편함

interface Obj {
	x: number
}
type Arr = [number, number]

function toArray<T>(a: T, b: T) { //어떤 단어를 넣어도 되지만 통상적으로 T(type)을 넣음
	return [a, b]
}

console.log(
	toArray('Neo', 'Anderson'), //toArray<string>('Neo', 'Anderson'), 사이에 string을 명시해줘도 됨
	toArray(1, 2),
	toArray(true, false),
	toArray({ x: 1 }, { x: 2 }),
	toArray([1, 2], [3, 4])
)
```

- 클래스

```tsx
class User<P> {
	//constructor(public payload) { //오류가 뜨는 이유는 암시적으로 any 형식이 포함되어 따로 타입을 지정해줘야함
	constructor(public payload: P) {}
	getPayload() {
		return this.payload
	}
}

----------

interface UserAType {
	name: string
	age: number
	isValid: boolean
}
interface UserBType {
	name: string
	age: number
	emails: string[]
}
const rami = new User<UserAType>({
	name: 'Rami',
	age: 30,
	isValid: true
})
const neo = new User<UserBType>({
	name: 'Neo',
	age: 102,
	emails: ['sanulim94@gmail.com']
})
```

- 인터페이스, 제약 조건(Constraints)

<aside>
💡 타입 뒤에 extends ~~ | ~~으로 제약을 검

</aside>

```tsx
interface MyData<T extends string | number> { //T라는 타입변수는 문자이거나 숫자만 상속
	name: string
	value: T
}
const dataA: MyData<string> = {
	name: 'Data A',
	value: 'Hello world'
}
const dataC: MyData<number> = {
	name: 'Data B',
	value: true
}
const dataC: MyData<boolean> = { //불린타입에 에러
	name: 'Data C',
	value: true
}
const dataD: MyData<number[]> = { //배열타입에 에러
	name: 'Data D'
	value: [1, 2, 3, 4]
}
```