const $id = document.getElementById("id");
const $idMsg = document.getElementById("id-msg");
window.addEventListener("load", () => $id.focus());

const $pw = document.getElementById("pw");
const $pwMsg = document.getElementById("pw-msg");
const $pwCheck = document.getElementById("pw-check");
const $pwCheckMsg = document.getElementById("pw-check-msg");
const $submit = document.getElementById("submit");

const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

const ID_ERROR_MSG = {
  required: "필수 정보입니다.",
  invalid: "5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
};

const PW_ERROR_MSG = {
  required: "필수 정보입니다.",
  invalid: "8~16자 영문 대 소문자, 숫자를 사용하세요.",
};

const PW_CHECK_ERROR_MSG = {
  required: "필수 정보입니다.",
  invalid: "비밀번호가 일치하지 않습니다.",
};

const checkIdValidation = (value) => {
  let isValidId;
  if (value.length === 0) {
    isValidId = "required";
  } else {
    isValidId = ID_REGEX.test(value) ? true : "invalid";
  }
  console.log(isValidId);

  if (isValidId !== true) {
    // isValidId -> invalid, required
    $id.classList.add("border-red-600");
    $idMsg.innerText = ID_ERROR_MSG[isValidId];
  } else {
    $id.classList.remove("border-red-600");
    $idMsg.innerText = "";
  }
};

const checkPwValidation = (value) => {
  let isValidPw;
  if (value.length === 0) {
    isValidPw = "required";
  } else {
    isValidPw = PW_REGEX.test(value) ? true : "invalid";
  }
  console.log(isValidPw);

  if (isValidPw !== true) {
    $pw.classList.add("border-red-600");
    $pwMsg.innerText = PW_ERROR_MSG[isValidPw];
  } else {
    $pw.classList.remove("border-red-600");
    $pwMsg.innerText = "";
  }
};

const checkPwCheckValidation = (value) => {
  let isValidPwCheck;
  if (value.length === 0) {
    isValidPwCheck = "required";
  } else {
    isValidPwCheck = $pw.value === value ? true : "invalid";
  }

  if (isValidPwCheck !== true) {
    $pwCheck.classList.add("border-red-600");
    $pwCheckMsg.innerText = PW_CHECK_ERROR_MSG[isValidPwCheck];
  } else {
    $pwCheck.classList.remove("border-red-600");
    $pwCheckMsg.innerText = "";
  }
};

$id.addEventListener("focusout", () => checkIdValidation($id.value));
$pw.addEventListener("focusout", () => checkPwValidation($pw.value));
$pwCheck.addEventListener("focusout", () =>
  checkPwCheckValidation($pwCheck.value)
);
$submit.addEventListener("click", (e) => {
  e.preventDefault();
  checkIdValidation($id.value);
  checkPwValidation($pw.value);
  checkPwCheckValidation($pwCheck.value);
});
