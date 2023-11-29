let project_list = ["소리클리어", "마음건강", "워킹카우 벤브라더스", "여행버튼", "퍼블버블", "룸앤베드", "하이브"];
let project_info = [
    "이명 치료 서비스",
    "마음병 건강관리 서비스",
    "키오스크 서비스",
    "공모전 및 클립 구매&판매 서비스",
    "웹페이지 제작 플랫폼 서비스",
    "숙박 예약 서비스",
    "아이돌 그룹 응원봉 관리 서비스"
];
let project_headCount = ["2", "4", "4", "2", "2", "2", "5"];
let project_lang = ["java, flutter", "java, flutter", "react, react-native", "cakePhp", "cakePhp", "laravel php", "flutter"];
let project_db = ["mySql", "mySql", "postgresql", "php admin", "php admin", "mariadb", "외부 api 사용"];
let project_role = ["", "", "", "", "", "", ""];

let content = "";

const goVel = () => {
    let a= document.createElement('a');
    a.target= '_blank';
    a.href= 'https://velog.io/@ohjs813';
    a.click();
}

const goTel = () => {
    let a= document.createElement('a');
    a.target= '_blank';
    a.href= 'tel:010-2256-4291';
    a.click();
}

const getPage = () => {
    console.log("getPage start");
    console.log($('.body_main'));
    for(let i = 0; i < project_list.length; i++) {
        content += "<span>"+project_list[i]+"</span>";
    }
    $(".body_main")
    console.log("getPage end");
}

$(document).ready(function () {
    getPage();
});