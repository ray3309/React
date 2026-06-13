const Ex3For = () => {

    const rows = ["돈까스", "비빔밥", "볶음밥"];

    for(let i = 0; i<rows.length; i++){
        rows.push(
            <p key={i} style={{display:'inline-block', margin:20}}>
                {i+1}
            </p>
        )
    }

    return (
        <div>
            <h1>For문 적용</h1>
            <h2>Ex3_For JSX 문법</h2>            
            <hr/>
            <div>{rows}</div>

        </div>
    )
}

export default Ex3For;