// 치킨 쿠폰

function solution(chicken) {
  let coupon = chicken;
  let totalService = 0;

  while (coupon >= 10) {
    const service = Math.floor(coupon / 10);

    totalService += service;

    coupon = (coupon % 10) + service;
  }

  return totalService;
}
