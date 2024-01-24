// 치킨 쿠폰

function solution(chicken) {
    // 쿠폰
    let coupon = chicken;
    // 총 서비스 치킨
    let totalServiceChicken = 0;
    
    while(coupon >= 10) {
        let serviceChicken = Math.floor(coupon / 10);
        
        totalServiceChicken += serviceChicken;
        
        coupon = coupon % 10 + serviceChicken;
    }
    
    return totalServiceChicken;
}