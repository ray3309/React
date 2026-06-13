import React, { useMemo, useState } from "react";

interface Prdouct{
    id: number;
    name: string;
    category: string;
    price: number;
};

// interface에 맞게 데이터를 가상으로 생성
//Array.form(갯수), func(_, i){}); 배열 생성기
const dummyProducts : Prdouct [] = Array.from({length:10000}, (_,i) => ({
    id:i +1,
    name: `상품_${i+1}`,
    category : i%3 === 0 ? '전자기기' : i%3 === 1 ? '의류':'식품',
    price:Math.floor(Math.random() * 10000) + 1000,
}));

const Ex02_useMemo2: React.FC = () => {

    //Decalre useState
    const [search, setSearch] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [toggle, setToggle] = useState<boolean>(false);

    // Calc Havy filter Function
    const filterProducts = (products:Prdouct[], searchKeyword:string, cat:string)=>{
        console.log("[과부하 발생] 데이터를 필터링 하는 중...(대용량 반복문이 실행)");

        // 복잡한 연산, 정규식 work
        for(let i = 0; i<10000; i++) { }
            return products.filter(p=>{
                const matchSearch = p.name.includes(searchKeyword);
                //const matCat = p.category.includes(cat);
                const matchCat = cat === '' || p.category === cat;
                return matchSearch && matchCat //matchCat
        });        
    }

    //Code1. Not use useMemo
    //const processProducts = filterProducts(dummyProducts, search, category);
    //search나 category가 변경될 때만 실행하도록 코드 변경(캐싱된 값을 재사용)
    const processProducts = useMemo(()=>{
        return filterProducts(dummyProducts, search, category);
    }, [search, category])

    return (
        <div style={{
                        backgroundColor:toggle?'black':'white', 
                        color:toggle?'white':'black',
                        transition: 'background-color 0.3s',
                        padding: '20px', minHeight: '100vh'
                    }}>
        <h2>useMemo 사용 여부 차이</h2>
        <p>데이터 갯수 : <b>{dummyProducts.length.toLocaleString()}개</b></p>
            <div style={{display:"flex",gap:'10px',alignItems:'center',marginBottom:'20px'}}>
                <input type="text" placeholder='상품명' value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{ padding: '8px', fontSize: '16px'}}
                />
                <select value = {category}
                    onChange={e => setCategory(e.target.value)}
                    style={{ padding: '8px', fontSize: '16px', color: 'black'}}
                >
                    <option value = "">전체 카테고리</option>
                    <option value = "전자기기">전자기기</option>
                    <option value = "의류">의류</option>
                    <option value = "식품">식품</option>
                </select>
                <button style={{width: '80px', height:'80px'}} onClick={()=>setToggle(!toggle)}>
                    상관없는 state 변경(다크모드 토글)
                </button>
            </div>
            <hr />
            <h3>검색 결과 ({processProducts.length} 건)</h3>
            <div style={{overflowY:'auto', border: '1px solid #FF00FF', maxHeight: '400px'}}>
                <table style={{width: '100%', borderCollapse: 'collapse',
                    textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th style={{ padding: '8px', textAlign: 'center', border: '1px solid #FF00FF' }}>번호</th>
                            <th style={{ padding: '8px', textAlign: 'center', border: '1px solid #FF00FF' }}>상품명</th>
                            <th style={{ padding: '8px', textAlign: 'center', border: '1px solid #FF00FF' }}>종류</th>
                            <th style={{ padding: '8px', textAlign: 'center', border: '1px solid #FF00FF' }}>가격</th>
                        </tr>
                    </thead>                    
                    
                    <tbody>
                        {
                            processProducts.map((e, i) => (
                                <tr key = {e.id} style={{borderBottom: '1px solid #FF00FF'}}>
                                    <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #FF00FF'}}>{e.id}</td>
                                    <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #FF00FF'}}>{e.name}</td>
                                    <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #FF00FF'}}>{e.category}</td>
                                    <td style={{ padding: '8px', textAlign: 'center', border: '1px solid #FF00FF'}}>{e.price.toLocaleString()}원</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Ex02_useMemo2;
