// 로그인 성공?

function solution(id_pw, db) {
    const id = id_pw[0];
    const pw = id_pw[1];
    
    // map객체로 저장
    const info = new Map(db);
    
    return info.has(id) ? (info.get(id) === pw ? "login" : "wrong pw") : "fail";
}