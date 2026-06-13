//tsrfc1 , tsrfc2
import React, { useState } from 'react'

interface Person {
    name: string,
    age: number,
    gender: string,
    bloodType: string
}

const Ex4_useStateTable: React.FC = () => {

    //상태 관리useState를 선언  -> name,age,gender
    const [name, setName] = useState<string>('');
    const [age, setAge] = useState<number>(0);
    const [gender, setGender] = useState<string>('');
    //풀이1) 
    const [bloodType, setBloodType] = useState<string>('');

    // Person객체 상태를 관리할 useState 
    //useState<any[]>([]) => setPeople([newPerson객체])
    // [{name,age,gender},{name,age,gender}]
    const [people, setPeople] = useState<any[]>([]);
    // [] -> click => setPeople([...people,newPerson]); [{'테스형',20,'남자'}] =>
    // click => setPeople([...people,newPerson]); => [{'테스형',20,'남자'},{'오스형',20,'여자'}]
    //useStat에 각각 저장할 chnage이벤트 처리하기 *****
    //change : 변화가 있을 때 감지 onChange , type='text'
    //React.ChangeEvent<HTMLInputElement> : HTMLInputElement input 객체 전용
    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target); //target객체의 주소를 전달 <input type>
        console.log(e.target.value);
        setName(e.target.value); //useState에 값을 저장 
    }
    //<input type="number" => HTMLInputElement
    const ageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`Age => ${e.target.value}`);
        setAge(parseInt(e.target.value));
    }
    //<select value={gender}>
    const genderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(`gender => ${e.target.value}`);
        setGender(e.target.value);
    }
    //풀이1) 
    const bloodTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(`bloodType => ${e.target.value}`);
        setBloodType(e.target.value);
    }

    //함수표현식 : 익명함수를 변수나 상수에 저장해놓고 호출해서 사용한다.(자바스크립트)
    //const myFun = function() {    } => 호출시 이벤트핸들러onClick=myfun
    //const myFun = () => {    } => 호출시 이벤트핸들러onClick=myfun
    const addPerson = () => {
        //alert("Click");
        //useState에 값이 존재한다면 if문 실행 
        if (name && age && gender && bloodType) {
            //interface를 정의해서 명확한 타입을 따른다.
            const newPerson: Person = {
                name: name,    //name:"테스형"
                age: age,
                gender: gender,
                bloodType: bloodType
            }
            setPeople([...people, newPerson]);
            //입력폼 초기화
            setName("");
            setAge(0);
            setGender("");
            setBloodType("");
        } else {
            alert("모든 데이터를 입력 하시오.");
        }
    }
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {/* onChage가 발생할 때 React.ChangeEvent 값  */}
            {/* value={name} 즉 useState에서 값을 바인딩함 */}
            <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                    <input type='text' placeholder='이름을 입력하세요' value={name}
                        onChange={nameChange} />
                    <input type='number' placeholder='20' value={age} onChange={ageChange} />
                    <select value={gender} onChange={genderChange}>
                        <option value="">성별 선택</option>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </div>
                <div>
                    {/* 한번 해보기 ) radio 에 해당되는 bloodType의 useState를 등록하기
                    지금까지 한 useState에 자료형을 올바르게 선언도 하고 
                     bloodTypeChange 함수도 만든 후 useState에 등록한 후 체크된 값이 UI 표시 되게 하시오. */}
                    <span style={{ marginRight: '10px', fontWeight: 'bold' }}>혈액형</span>
                    <label>
                        <input type="radio" name="bloodType" value="A" onChange={bloodTypeChange}
                            checked={bloodType === "A"} /> A형
                    </label>
                    <label style={{ marginRight: '10px' }}>
                        <input type="radio" name="bloodType" value="B" onChange={bloodTypeChange}
                            checked={bloodType === "B"} /> B형
                    </label>
                    <label style={{ marginRight: '10px' }}>
                        <input type="radio" name="bloodType" value="O" onChange={bloodTypeChange}
                            checked={bloodType === "O"} /> O형
                    </label>
                    <label style={{ marginRight: '10px' }}>
                        <input type="radio" name="bloodType" value="AB" onChange={bloodTypeChange}
                            checked={bloodType === "AB"} /> AB형
                    </label>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                <button onClick={addPerson} style={{ width: '100px', marginTop: '10px' }}>Add</button>
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead style={{ backgroundColor: '#ffccdd', border: '1px solid black' }}>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>이름</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>나이</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>성별</th>
                        <th style={{ border: '1px solid black', padding: '8px' }}>혈액형</th>
                    </tr>
                </thead>
                <tbody>
                    { //useState에서 가져온 people이란 배열을 map으로 반복
                        people.map((e, i) => (
                            <tr key={i} style={{
                                backgroundColor: e.gender === "여자" ? '#FF9980' : 'skyblue',
                                textAlign: 'center', border: '1px solid black'
                            }}>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{e.name}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{e.age}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{e.gender}</td>
                                <td style={{ border: '1px solid black', padding: '8px' }}>{e.bloodType} 형</td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Ex4_useStateTable