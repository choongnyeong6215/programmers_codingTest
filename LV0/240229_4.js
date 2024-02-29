// 로그인 성공?

function solution(id_pw, db) {
  const [id, pw] = [id_pw[0], id_pw[1]];
  const info = new Map(db);

  return info.has(id) ? (info.get(id) === pw ? "login" : "wrong pw") : "fail";
}
