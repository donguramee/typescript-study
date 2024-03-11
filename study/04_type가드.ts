- 타입 가드(Guards)

```tsx
	function lodText(el: Element) {
		console.log(el.textContent)
	}
	
	const h1El = document.querySelector('h1') //쿼리셀렉터에서 찾지 못하면 null출력
	logText(h1El) //h1엘리먼트는 null일수도 있어 매개 변수에 할당 될 수 없음

	->
	const h1El = document.querySelector('h1') as HTMLHeadingElement //null이 아니라고 단언
	logText(h1El) //textContent에서 에러 발생

	-> 타입 가드 적용
	const h1El = document.querySelector('h1')
	if (h1El) { //if 조건문으로 거짓데이터가 아닐때만 실행되는 구조이기에 에러가 사라짐
		logText(h1El)
	}
```

```tsx
	function add(val: string | number) {
		let res = 'Result => '
		if (typeof val === 'number') {
			res += val.toFixed(2)
		} else {
			res += val.toUpperCase()
		}
		console.log(res)
	}
	
	add(3.141592) //Result => 3.14
	add('hello world') //Result => HELLO WORLD
```