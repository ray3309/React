import React from "react";

const Ex2_Type_Complex: React.FC = () => {
    //1) 배열자료형 - 기존에 자바스크립트는 배열만 관심이 있어서 요소의 자료형까지 체크 하지 않음
    // typescript로 변경하자마자 이 배열은 선언한 타입만 요소로 저장할 수 있는 배열이 됨. *****
    //const numbers:number[] = ['A',10];
    const numbers: number[] = [10, 20, 300, 500, 600];
    //자바에서 사용했던 제네릭 : 컬렉션을 생성할 때 특정 객체 전용으로 생성  
    //List<String> arr = new ArrayList<>();
    //arr.add(1000); X

    //2)Array<자료형> : 전용배열 - 이기때문에 오직 string만 들어와야 함.
    //const fruits:Array<string> = ["Apple",10];
    const fruits: Array<string> = ["Apple", "Banana", "Cherry", "1000"];

    //3)tuple : 나열한 자료형에 맞게 값을 할당해야 한다.  이때 개수도 맞아야 한다.
    //const person : [string,number,boolean] = [25,true,"테스형"]; //X 
    const person: [string, number, boolean] = ["테스형", 25, false];

    //4) enum:열거형 객체
    enum MyColor { Red, Green, Blue, Pink, Orange };
    // 변수 col의 자료형을 열거형 enum으로 선언하면 열거된 값만 들어 올수 있다!!!!
    //let col:MyColor = MyColor.SkyBlue; //X
    let col: MyColor = MyColor.Green;

    
    // 5) interface - menu의 역할
    interface Car {
        brand:string,
        model: string,
        price: number
    }
    // 구현한 객체 정의 -> {}
    // 해당 Object 자료형이 미리 선언한 interface라면
    // 반드시 재정의 해서 구현해야 한다.
    // 쉽게 => interface를 재정의한->반드시  object가 값을 대입해서 사용해야 한다.
    const myCar:Car = {
        brand: "현다이자동차",
        // aaa : "현대모터스",
        model :"그랜다이저",
        price : 9000
    }
    return (
        <div>
            <h1 style={{ backgroundColor: 'orange', color: 'white' }}>복합 자료형 출력</h1>
            <h2>Array</h2>
            {/* 10,20,300,500,600 값처럼 numbers를 문자열로 , 로 구분해서 출력하려면? arr.join("구분자")
                arr.join()만 호출해도 , 로 배열에서 하나씩 구분해서 출력한다.
            */}
            <p>{numbers.join()}</p>
            <h2>Tuple</h2>
            <p>Person : 이름:{person[0]}, 나이:{person[1]} ,
                학생여부 : {person[2] ? "예" : "아니오"}</p>
            <h2>Enum</h2>
            <p>내가 선택한 색상 : {col} / {MyColor[col]}</p>
            <h2>Interface를 구현한 객체</h2>
            <p>My Car : {myCar.brand} / {myCar.model} / {myCar.price}</p>
        </div>
    )

}
export default Ex2_Type_Complex