const $id = document.getElementById("id");
window.addEventListener("load", () => $id.focus());

const $pw = document.getElementById("pw");
const $pwCheck = document.getElementById("pw-check");
const $submit = document.getElementById("submit");

const ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
const PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

const checkIdValidation = (value) => {
  const isValidId = ID_REGEX.test(value);
  console.log(isValidId);
};

const checkPwValidation = (value) => {
  const isValidPw = PW_REGEX.test(value);
  console.log(isValidPw);
};

const checkPwCheckValidation = (value) => {
  const isValidPwCheck = $pw.value === value;
  console.log(isValidPwCheck);
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
