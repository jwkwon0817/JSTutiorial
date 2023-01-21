// 화살표 함수 앞에 new 연산자를 붙여서 호출 불가능
let Person = (name, age) => {
	this.name = name;
	this.age = age;
};
let tom = new Person('Tom', 17);  // -> TypeError: Person is not a constructor