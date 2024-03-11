## 기본

- 선택적 속성 - ?

```tsx
interface User {
	name: string
	age: number
	isValid: boolean
}
const rami: User = {
	name: 'Rami',
	age: 30,
	isValid: true
}
const neo: User = { //오류발견 isValid 속성이 존재하지 않음 boolean 데이터로 추가하면 오류제거
	name: 'Neo',
	age: 102
}

->
interface User {
	name: string
	age: number
	isValid?: boolean //?추가로 선택적 속성으로 전환
}
const rami: User = {
	name: 'Rami',
	age: 30,
	isValid: true
}
const neo: User = {
	name: 'Neo',
	age: 102
}
```

- 읽기전용 속성 - readonly

```tsx
interface User {
	name: string
	readonly age: number
	isValid: boolean
}
const rami: User = {
	name: 'Rami',
	age: 30,
	isValid: true
}
rami.isValid = false
rami.age = 22 //오류발생 age는 읽기전용 속성이므로 값을 할당할 수 없음

const neo: User = {
	name: 'Neo',
	age: 102
}
```

## 함수 타입

### - 호출 시그니처(Call Signature)

```tsx
interface GetName {
	**(message: string): string** //호출 시그니처
}
interface User {
	name: string
	age: number
	getName: GetName
}
interface rami: User {
	name: 'Rami',
	age: 30,
	getName(message: string) {
		console.log(message)
		return this.name
	}
}
rami.getName('Hello~')

-----재사용 안할때-----

interface User {
	name: string
	age: number
	getName: (message: string) => string
}
interface rami: User {
	name: 'Rami',
	age: 30,
	getName(message: string) {
		console.log(message)
		return this.name
	}
}
rami.getName('Hello~')
```

## 인덱스 가능 타입

### - 인덱스 시그니처(Index Signature)

- 배열

```tsx
interface Fruits {
	**[item: number]: string** //인덱스 시그니쳐 문법
}
const fruits: Fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits[1]) //
```

```tsx
interface User {
	**[key: string]: unknown**
	name: string
	age: number
}
const rami: User = {
	name: 'Rami',
	age: 30
}
rami['isValid'] = true
rami['emails'] = ['sanulim94@naver.com', 'sanulim94@gmail.com'] //내용 추가가 가능
console.log(rami)
```

## 확장

### - 확장(상속)

```tsx
interface UserA {
	name: string
	age: number
}
interface UserB extends UserA {
	isValid: boolean
}

const rami: UserA = {
	name: 'Rami',
	age: 30,
	isValid: true //에러 발생 userA는 name과 age뿐 isValid는 userB만 가지고 있음
}
const neo: UserB = {
	name: 'Neo',
	age: 32,
	isValid: true
}

----------

interface FullName {
	firstName: string
	lastName: string
}
interface FullName {
	middleName: string
	lastName: boolean //에러발생 - 후속속성 선언에 같은 형식으로 하는데 boolean데이터로 적용되어있어 에러발생
}

const fullName: FullName = {
	firstName: 'Tomas',
	middleName: 'Sean',
	lastName: 'Connery'
}

->
interface FullName {
	firstName: string
	lastName: string
}
interface FullName {
	middleName: string
	lastName: string
}

const fullName: FullName = {
	firstName: 'Tomas',
	middleName: 'Sean',
	lastName: 'Connery'
}
```