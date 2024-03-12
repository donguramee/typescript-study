### 접근 제어자(Access Modfiers)

- public - 어디서나 자유롭세 접근 가능, 클래스 바디에서 생략 가능
- protected - 나와 파생된 후손 클래스 내에서 접근 가능
- private - 내 클래스에서만 접근 가능

<aside>
💡 js에서는 문제가 없지만 ts에서는this로 접근할수있는 각각의 속성들은 constructor함수가 만들어지기 전에 클래스 바디부분에서 타입이 지정되어야함

</aside>

```tsx
class UserA {
	//public first: string //public은 생략 가능
	//public last: string
	//public age: number
	constructor(
		public first: string, //매개변수에서 접근제어자를 사용할 경우 축약이 가능하며 public을 꼭 붙여줘야함
		public last: string,
		public age: number) {
		//this.first = first
		//this.last = last
		//this.age = age
	}
	getAge() {
		return `${this.first} ${this.last} is ${this.age}`
	}
}
class UserB extends UserA {
	get() {
		return `${this.first} ${this.last} is ${this.age}`
	}
}
class UserC extends UserB {
	getAge() {
		return `${this.first} ${this.last} is ${this.age}`
	}
}

const neo = new UserA('Neo', 'Anderson', 102)
console.log(neo.first) //Neo
console.log(neo.last) //Anderson
console.log(neo.age) //102
```