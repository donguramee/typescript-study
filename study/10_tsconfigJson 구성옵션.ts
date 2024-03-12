```tsx
//컴파일러 옵션 지정
"compilerOptions": {
	
	//컴파일될 ES(JS) 버전 명시 - "ES2015" 권장
	"target": "ES3"
	
	//모듈 시스템 지정 - "Commons", "AMD", "ESNext"
	"module": "Commons"
	
	//모듈 해석 방식 지정 - "Node", "Classic"
	"moduleResolution": "Node"
	
	//ESM 모듈 방식 호환성 활성화 여부 -> true로 활성화 추천
	"esModuleInterop": false,
	
	//모든 파일을 모듈로 컴파일, import 혹은 export 키워드 필수
	"isolatedModules": false,
	
	//모듈 해석에 사용할 기준 경로 지정
	"baseUrl": "./",
	
	//컴파일러가 참조할 타입 선언(d.ts)의 경로를 지정
	"typeRoots"; ["./node_modules/@types"],
	
	//컴파일에서 사용할 라이브러리 지정 - "ESNext", "DOM"
	"lib": [],
	
	//더 엄격한 타입 검색 활성화 - 기본값 false로 사용하면 타입스크립트 장점이 없으므로 true로 바꿔서 사용 (아래의 상세내용도 모두 true로 변함)
	"strict": false,
	
	//암시적 any 타입 검사 활성화
	"noImplicitAny": false,
	
	//암시적 this 타입 검사 활성화
	"noImplicitThis": false,
	
	//엄격한 NuLLish 타입 검사 활성화
	"strictNullChecks": false,
	
	//엄격한 함수의 매개변수 타입 검사 활성화
	"strictFunctionTypes": false,
	
	//엄격한 클래스의 속성 초기화 검사 활성화
	"strictPropertyInitialization": false,
	
	//엄격한 Bind, Call, Apply 메소드의 인수 검사 활성화
	"strictBindCallApply": false
},

	// 컴파일할 파일 경로 목록
	"include": [
		"src/**/*.ts",
		"api/**/*.ts"
	],
	// 컴파일에서 제외할 파일 경로 목록
	"exclude": [
		"node_modules"
	]
}
```;
