## 타입단언(Assertion)

### ‘단언’ - 주저하지 않고 딱 잘라 말함

- 단언 키워드 - as

```tsx
1)
	const el = document.querySelector('body') //선택자로 요소를 찾지 못하면 null 출력
	el.textContent = 'Hello world?!' //el에서 에러 발생 
	
	->
	const el = document.querySelector('body') as HTMLBodyElement //확실하게 타입스크립트에게 알려줌
	el.textContent = 'Hello world?!'
	
2)
	function getNumber(x: number | null | undefined) { //getNumber는 3개의 타입을 가지고 있음
		return Number(x.toFixed(2)) //toFixed는 숫자데이터에서 사용가능 null과 undefined는 가질 수 없는 에러가 발생
	}
	getNumber(3.1415926535)
	getNumber(null)
	
	->
	function getNumber(x: number | null | undefined) { 
		return Number((x as number).toFixed(2)) 
	}
	getNumber(3.1415926535)
	getNumber(null) //당장의 에러는 수정했지만 잘못된 코드
	
3)
	function getValue(x: string | number, isNumber: boolean) {
		if (isNumber) {
			return Number(x.toFixed(2)) //문자데이터 일수도 있고 숫자 데이터일수도 있어서 실행불가
		}
		return x.toUpperCase() //toUpperCase 소문자를 대문자로 출력
	}
	getValue('hello world', false)
	getValue(3.1415926535, true) 

	->
	function getValue(x: string | number, isNumber: boolean) {
		if (isNumber) {
			return Number((x as number).toFixed(2)) //toFixed는 소수점 ()번째 자리까지 반환
		}
		return (x as string).toUpperCase() //소괄호로 toUpperCase가 어디서 실행되는지 알려줌
	}
	getValue('hello world', false) //'HELLO WORLD'
	getValue(3.1415926535, true) //3.14
```

- Non-null 단언 연산자 - !

```tsx
1)
	const el = document.querySelector('body') 
	el.textContent = 'Hello world?!'
	
	->
	const el = document.querySelector('body') //도큐먼트에서 찾지 못하면 null 출력
	el!.textContent = 'Hello world?!' //!로 절대 null데이터가 아니라는걸 단언
	
2)
	function getNumber(x: number | null | undefined) { 
		return Number(x.toFixed(2)) 
	}
	getNumber(3.1415926535)
	getNumber(null)
	
	->
	function getNumber(x: number | null | undefined) { 
		return Number(x!.toFixed(2))  //x는 null이나 undefined가 아니라고 단언
	}
	getNumber(3.1415926535)
	getNumber(null)
	
3)
	function getValue(x: string | number, isNumber: boolean) {
		if (isNumber) {
			return Number(x.toFixed(2))
		}
		return x.toUpperCase()
	}
	getValue('hello world', false)
	getValue(3.1415926535, true) 

	->
	function getValue(x: string | number, isNumber: boolean) {
		if (isNumber) {
			return Number((x as number).toFixed(2)) //꼭 숫자여야하기에 여기선 !사용불가
		}
		return (x as string).toUpperCase()
	}
	getValue('hello world', false)
	getValue(3.1415926535, true) 
```

## 할당단언(Assertion)

### ‘단언’ - 주저하지 않고 딱 잘라 말함

```tsx
	let num: number //타입이 지정됨
	console.log(num) //undefined 출력
	
	->
	let num: number
	num = 123
	console.log(num) //123출력

	-> undefined 출력을 원함
	let num!: number // 할당단언
	console.log(num) //undefined 출력

	num = 123
```