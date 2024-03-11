```tsx
type TypeA = string
type TypeB = string | number | boolean //타입별칭은 여러개의 타입을 조합해서 typeB라는 이름을 부여해서 재사용 -> 단일타입보다 우니온이나 | 을 이용해서 재사용
type User = {
	name: string
	age: number
	isValid: boolean
} | [string, number, boolean] //[]=튜플타입

-----예제1-----

const userA: User = { //userA는 User라는 타입을 적용을 해서 객체데이터이며 name,ag,isValid의 속성을 가져야함
	name: 'Rami',
	age: 30,
	isValid: true
}
const userB: User = ['Evan', 35, false]

-----예제2-----

function someFunc(param: TypeB): TypeA { //typA = string 문자데이터를 반환한다
	switch (typeof param) {
		case 'string':
			return param.toUpperCase()
		case 'number':
			return param.toFixed(2) //toFixed가 반환될때 문자데이터로 반환되기 때문에 에러가 발생하지 않음
		default:
			return true //불린데이터이기에 반환되지않고 에러발생
	}
}
```

- 타입별칭은 interface를 대체해서 사용 가능

```tsx
type TypeUser = { //타입별칭
	name: string
	age: number
	isValid: boolean
}
const rami: TypeUser {
	name: 'Rami',
	age: 30,
	isValid: true
}

----------

interface InterfaceUser { //인터페이스
	name: string
	age: number
	isValid: boolean
}

const rami: insterfaceUser = {
	name: 'Rami',
	age: 30,
	isValid: true
}
```

<aside>
💡 기능적인 차이는 없고 취향에 맞게 쓰지만 굳이 하나를 고르라면 interface방식을 권장 → 타입방식은 범위가 넓고 interface는 기본적으로 객체데이터를 전제로 하기때문에 굳이 고르자면 interface

</aside>