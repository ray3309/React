import React, { useEffect, useState } from "react";

// ajax server : http://192.168.0.3:8080/Web_0612_Ajax/userdemo?num=1
// data {
//   "id": 1,
//   "name": "윤희상",
//   "username": "Zard",
//   "email": "ray3309@gmail.com",
//   "address": {
//     "street": "Yang-chon-ro",
//     "suite": "APT 103",
//     "city": "Seoul",
//     "zipcode": "157-745",
//     "loc": {
//       "lat": "37.5640277359057",
//       "lng": "126.852695154201"
//     }
//   },
//   "phone": "010-2734-8281",
//   "website": "https://github.com/ray3309",
//   "company": {
//     "name": "ITDC",
//     "chatchPhrase": "JAVA&C++ Development Corp!!",
//     "bs": "프로젝트 관리 시스템"
//   }
// }

// class AddressVO { private GeoVO gvo }
interface Geo{
    lat : string;
    lng : string;
}

interface Address{
     street: string;
     suite: string;
     city: string;
     zipcode: string;
     loc: Geo;
}

interface Company{
    name: string;
    chatchPhrase: string;
    bs: string; 
}

interface User{
   id: number;
   name: string;
   username: string;
   email: string;

   address: Address;
   phone: string;
   website: string;

   company: Company;
}

const UseEffectFetch2 = () => {
  
    const [userData, setUserData] = useState<User | null>(null);

    // 대량의 데이터 사용시 로딩이 발생할수 있음
    const [loading, setLoading] = useState(false);

    // 마운트(초기화) 시에 한번만 fetch를 사용하여 로드 하고 useState에 저장, 출력
    useEffect(() =>{
        const fetchUserData = async () => {
            setLoading(true);   // 로딩 시작 값 설정
            let url = "http://192.168.0.3:8080/Web_0612_Ajax/userdemo?num=1";
            
            
            const resp = await fetch(url);

            const data = await resp.json(); // await으로 변환 종료 까지 대기

            setUserData(data);  //js로 변환된 데이터를 useState에 Save

            setLoading(false);  // Loading 종료 설정
        }
        fetchUserData();
    }, []);
    
    if(loading){
        return <div>Data Loding...!</div>
    }

    return (
        <div>
            <h2>Fetch ~ Then overlapped JSON</h2>
            {
                userData ? (
                    <>
                        <p>Name : {userData.name}</p>
                        <p>UserName : {userData.username}</p>
                        <p>EMail : {userData.email}</p>
                        <p>Address : {userData.address.city}시
                                     {userData.address.street}길 
                                     {userData.address.suite} /
                                     우편번호{userData.address.zipcode}</p>
                        <p>Company : {userData.company.name}
                                      {userData.company.chatchPhrase}
                                      {userData.company.bs}</p>

                        <p>Phone : {userData.phone}</p>
                        <p>WebSite: {userData.website}</p>
                        <p>Geo: 위도={userData.address.loc.lat} / 경도 = {userData.address.loc.lng} </p>
                    </>
                ) : (<p>No Data</p>)
            }
        </div>
    )
}

export default UseEffectFetch2;
