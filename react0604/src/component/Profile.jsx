import "./Profile.css";

const Profile = () =>{
    // 자바스크립트 익명함수 영역
    // local area

    const Data = [{name: "윤희상", age: 43, Address: "서울시 강서구"}, 
                  {name: "김수연", age: 33, Address: "서울시 강남구"}, 
                  {name: "이태리", age: 23, Address: "서울시 강동구"}, 
                  {name: "구구가", age: 3, Address: "서울시 강북구"}];

    return(
        <div id='const'>
            <table className="table">
                <thead className="thead">
                    <tr>
                        <th className="Introduce" colspan={4}>자기소개</th>
                    </tr>
                    <tr>
                        <th className="key">인덱스</th>
                        <th className="Name">이름</th>
                        <th className="Age">나이</th>
                        <th className="Address">주소</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {Data.map((e, i) => (
                        <tr key={i}>
                            <td>{i}</td>
                            <td>{e.name}</td>
                            <td>{e.age}</td>
                            <td>{e.Address}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot className="tfoot">
                    {/* 인라인 스타일 일경우 JSX에서 자바스트립트 문법을 따름
                        style={{}} => {} 스크립트 스타일 영역
                    */}
                    <th colspan={4}>
                        <button className="btn">작성하기</button>
                    </th>
                </tfoot>             
            </table>
        </div>
    );
}

export default Profile