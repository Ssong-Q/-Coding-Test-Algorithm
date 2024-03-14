process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    let answer = "";
    for (let i = 0; i < a; i++) {
        answer += "*"
    }
    
    let tmp = answer;
    for (let j = 1; j < b; j++) {
        answer += '\n' + tmp
    }  
    
    console.log(answer)
});