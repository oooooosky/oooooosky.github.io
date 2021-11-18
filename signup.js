function idCheck() {

    const id=document.getElementById('id').value
    const result=document.getElementById('idResult')
    const exp = /^(?=.*[a-z])(?=.*\d)[a-z\d]{5,20}$/;

    if(id.length!=0) {
        if(id.match(exp)) {
            result.innerHTML='멋진 아이디네요!'
            result.style.color='green'
        } else {
            result.innerHTML='5~20자의 영문 소문자, 숫자만 사용 가능합니다.'
            result.style.color='red'
        }
    } else {
        result.innerHTML='필수 정보입니다.'
        result.style.color='red'
    }
}

function pwCheck() {
    const pw=document.getElementById('pw').value
    const result=document.getElementById('pwResult')
    const exp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$-_])[a-zA-Z\d!@#$-_]{8,16}$/;

    if(pw.length!=0) {
        if(pw.match(exp)) {
            result.innerHTML='좋은 비밀번호네요!'
            result.style.color='green'
        } else {
            result.innerHTML='8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.'
            result.style.color='red'
        }
    } else {
        result.innerHTML='필수 정보입니다.'
        result.style.color='red'
    }
}

function pwConfirmCheck() {
    const pw1=document.getElementById('pw').value
    const pw2=document.getElementById('pwConfirm').value
    const result=document.getElementById('pwConfirmResult')
    const exp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$-_])[a-zA-Z\d!@#$-_]{8,16}$/;

    if(pw2.length!=0) {
        if(pw1==pw2) {
            result.innerHTML='비밀번호가 일치합니다!'
            result.style.color='green'
        } else {
            result.innerHTML='비밀번호가 불일치합니다'
            result.style.color='red'
        }
    } else {
        result.innerHTML='필수 정보입니다.'
        result.style.color='red'
    }
}

function DaumPostcode() {
    const address=document.getElementById('address').value=null
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            document.getElementById('address').value += data.zonecode;  // 우편번호
            document.getElementById("address").value += roadAddr;   // 도로명 주소
            // document.getElementById("address").value += data.jibunAddress;  // 지번
            
            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
            if(roadAddr !== ''){
                document.getElementById("address").value += extraRoadAddr;
            } else {
                document.getElementById("address").value += '';
            }

            var guideTextBox = document.getElementById("address");
        }
    }).open();
}

function address() {
    const address=document.getElementById('address').value.length
    const detail=document.getElementById('detailAddress').value.length
    if(address==0||detail==0) {
        if(address==0) {
            addressConfirm.innerHTML='필수 정보입니다.'
            addressConfirm.style.color='red'
        } else {
            addressConfirm.innerHTML='싱세주소를 작성해주세요.'
            addressConfirm.style.color='red'
        }
    } else {
        addressConfirm.innerHTML=null
    }

}

function emailCheck() {
    const email=document.getElementById('email').value.length
    if(email==0) {
        emailConfirm.innerHTML='필수 정보입니다.'
        emailConfirm.style.color='red'
    } else {
        emailConfirm.innerHTML=null
    }
}

function phoneCheck() {
    const exp=/^\d{3}-\d{4}-\d{4}$/;
    const phone=document.getElementById('phone').value
    const result=document.getElementById('phone-check-result')

    if(phone.length!=0) {
        if(phone.match(exp)) {
            // result.innerHTML='전화번호가 좋네요!'
            // result.style.color='green'
            result.innerHTML=null
        } else {
            result.innerHTML='010-XXXX-XXXX 형식으로 입력해주세요..'
            result.style.color='red'
        }
    } else {
        result.innerHTML='필수 정보입니다.'
        result.style.color='red'
    }
}