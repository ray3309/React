import React, { useMemo, useState } from 'react'

const Ex4_useMemo3: React.FC = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [ssn, setSsn] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [people, setPeople] = useState<any[]>([]);
    const [nextId, setNextId] = useState(1);
    //  useMemo가 감지하는 영역 people useState고 여기의 변화가
    //  없을 때만 기존의 캐시를 사용해서 랜더링에 적용한 개념인데 
    //  그걸 반대로 증명하기 위해서 아래의 코드를 가져온다!!!!!!!!!
    //  Ex3_PersonUSeMemo처리를 증명 하기 위한 useState
    const [chcolor, setChcolor] = useState(false);
    const [bgcolors, setBgcolors] = useState('orange');

    //----------------------------------------------------------------
     const sendSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        console.log(`${name}, ${age} ${ssn} ${email} ${phone}`);

        //사용자 정보에 대한 객체
        const newPepole = { id: nextId, name, age, ssn, email, phone }
        // nextId 에도 1씩 증가     
        setPeople([...people, newPepole]);  //전개 연산자
        setNextId(nextId + 1);
        setName('');
        setAge('');
        setSsn('');
        setEmail('');
        setPhone('');
    };

    const changeColor = (e:React.ChangeEvent<HTMLInputElement>) => {
        setBgcolors(e.target.value);
    }

    const usePeople = useMemo(() => {  
        console.log("people map useMemo Apply");
        setChcolor(true);
        return people.map((e, idx)=>(
                (<tr key={e.id}>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{e.name}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{e.age}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{e.Ssn}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{e.email}</td>
                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{e.phone}</td>
                </tr>)
        ))
    }, [people]);

    //----------------------------------------------------------------

    return (
        <div style={{ maxWidth: '600px', margin: '30px auto', backgroundColor: bgcolors }}>
            {/* onSubmit 이벤트는 폼이 전송될 때 감지 */}
            <form onSubmit={sendSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px', marginBottom: '20px'
                }}
            >
                {/* 인라인 방식으로 입력값 useState에 onChange 이벤트로 등록 */}
                <input type="text" value={name} placeholder='이름 입력' required 
                    onChange={e=>setName(e.target.value)}
                />

                <input type="number" value={age} placeholder='나이 입력' 
                    onChange={e=>setAge(e.target.value)}
                />
                
                <input type="text"  value={ssn} placeholder='주민번호 앞 6자리 + 뒤 1자리' pattern='\d{7}' maxLength={7}
                    onChange={e=>setSsn(e.target.value)}
                />
                
                <input type="email"  value={email} placeholder='이메일 입력' 
                    onChange={e=>setEmail(e.target.value)}
                />

                <input type="tel" value={phone} placeholder='전화번호 입력' 
                    onChange={e=>setPhone(e.target.value)}
                />
               
                <button type='submit'
                        style={{
                                backgroundColor: 'skyblue', border: 'none',
                                padding: '10px', cursor: 'pointer'
                        }}>추가</button>

            </form>
            <hr />
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: 'pink', color: '#fff' }}>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>이름</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>나이</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>주민번호</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>이메일</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px' }}>연락처</th>
                    </tr>
                </thead>
                <tbody>
                        {/* map을 사용해서 people값의 데이터를 출력 
                            방식은 2가지 
                        */}

                        {usePeople}

                </tbody>
                   <tfoot>
                    <tr style={{ backgroundColor: 'pink', color: '#fff' }}>
                        <th colSpan={5}>폼 전송 예제!</th>
                        <th colSpan={5}>
                            <input type='color' onChange={changeColor}/>
                        </th>
                    </tr>
                </tfoot>
                </table>
        </div>
    )
}

export default Ex4_useMemo3