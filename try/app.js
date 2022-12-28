//제목 색깔 변경 상호작용
const title = document.getElementById("title"); //id가 title이라는 요소를 불러옴
const poemTitleSelect = document.getElementById("titleSelect");
const colorChangeBtn = document.getElementById("titleColorChangeBtn");

function changeTitleColor() {
  title.style.color = poemTitleSelect.value; //아까 불러온 title, title의 스타일 컬러를 poemTitleSelect의 값으로 설정 poemTitleSelect의 값은 HEX
}
colorChangeBtn.addEventListener("click", changeTitleColor);
//제목 색깔 변경 상호작용 구현 끝

//기울기 버튼 클릭시 기울기
const italicContent = document.getElementById("italicTitle"); //italic 변경 버튼

function italicTitleFont() {
  title.style.fontStyle = "italic";
}

italicContent.addEventListener("click", italicTitleFont);
//기울기 버튼 클릭시 기울기 구현 끝

//굵기 버튼 클릭시 글꼴 굵게
const onfontWeightTitle = document.getElementById("fontWeightTitle");

function fontWeight() {
  document.getElementById("title").style.fontWeight = "900";
}

onfontWeightTitle.addEventListener("click", fontWeight);
//굵기 버튼 클릭시 글꼴 굵게 구현 끝

//input value값으로 폰트설정
const fontStyleInput = document.getElementById("fontStyleInput");
const fontStyleBtn = document.getElementById("fontStyleBtn");

function onChangeFont() {
  title.style.fontFamily = fontStyleInput.value;
}
fontStyleBtn.addEventListener("click", onChangeFont);

//input value값으로 폰트설정 구현 끝

//글자 크기 설정
const fontSizeInput = document.getElementById("fontSizeInput");
const fontSizeBtn = document.getElementById("fontSizeBtn");

function onChangeFontSize() {
  title.style.fontSize = `${fontSizeInput.value}px`;
}
fontSizeBtn.addEventListener("click", onChangeFontSize);
//글자 크기 설정 구현 끝

//초기화 버튼
const resetBtn = document.getElementById("resetBtn");

function onReset() {
  title.style.color = "black";
  title.style.fontFamily = "";
  title.style.fontStyle = "";
  title.style.fontSize = "";
  title.style.fontWeight = "";
}

resetBtn.addEventListener("click", onReset);
//초기화 버튼 구현 끝

//여기까지 제목설정

//컨텐츠 색깔 변경
const contents = document.getElementById("contents");
const contentColorSelect = document.getElementById("contentColorSelect");
const changeTitleColorBtn = document.getElementById("changeTitleColorBtn");
function changeContentColor() {
  contents.style.color = contentColorSelect.value;
}

changeTitleColorBtn.addEventListener("click", changeContentColor);
//컨텐츠 색깔 변경 구현 끝

//컨텐츠 폰트 기울기
const contentItalicBrn = document.getElementById("contentItalicBrn");
function italicContentFont() {
  contents.style.fontStyle = "italic";
}
contentItalicBrn.addEventListener("click", italicContentFont);
//컨텐츠 폰트 기울기 구현 끝

//컨텐츠 폰트 굵게
const contentBold = document.getElementById("contentBold");
function contentFontWeight() {
  contents.style.fontWeight = "900";
}
contentBold.addEventListener("click", contentFontWeight);
//컨텐츠 폰트 굵게 구현 끝

//컨텐츠 글꼴 바꾸기
const contentFontStyleInput = document.getElementById("contentFontStyleInput");
const contentFontStyleBtn = document.getElementById("contentFontStyleBtn");

function onChangeContentFontStyle() {
  contents.style.fontFamily = contentFontStyleInput.value;
}
contentFontStyleBtn.addEventListener("click", onChangeContentFontStyle);
//컨텐츠 글꼴 바꾸기 구현 끝

//컨텐츠 글자 크기 바꾸기
const contentFontSizeInput = document.getElementById("contentFontSizeInput");
const contentFontSizeBtn = document.getElementById("contentFontSizeBtn");

function onChangeContentFontSize() {
  contents.style.fontSize = `${contentFontSizeInput.value}px`;
}
contentFontSizeBtn.addEventListener("click", onChangeContentFontSize);
//컨텐츠 글자 크기 바꾸기 구현 끝

//컨텐츠 초기화 버튼
const contentResetBtn = document.getElementById("contentResetBtn");
function contentReset() {
  contents.style.color = "black";
  contents.style.fontFamily = "";
  contents.style.fontStyle = "";
  contents.style.fontSize = "";
  contents.style.fontWeight = "";
}
contentResetBtn.addEventListener("click", contentReset);
//컨텐츠 초기화 버튼 구현 끝

//여기까지 컨텐츠 끝

//메모장 구현
const memo = document.getElementById("memo");
//메모장 구현 끝

//메모장 스타일
//메모 내용 색깔 변경
const memoColorInput = document.getElementById("memoColorInput");
const memoColorBtn = document.getElementById("memoColorBtn");
function onChagneMemoColor() {
  memo.style.color = memoColorInput.value;
}

memoColorBtn.addEventListener("click", onChagneMemoColor);
//메모 내용 색깔 변경 구현 끝

//메모 내용 기울기
const memoItalic = document.getElementById("memoItalic");
function onItalicMemo() {
  memo.style.fontStyle = "italic";
}

memoItalic.addEventListener("click", onItalicMemo);
//메모 내용 기울기 구현 끝

//메모 내용 굵게하기
const memoBoldBtn = document.getElementById("memoBoldBtn");
function onBoldMemo() {
  memo.style.fontWeight = "900";
}

memoBoldBtn.addEventListener("click", onBoldMemo);
//메모 내용 굵게하기 구현 끝

//메모 내용 폰트 변경
const memoFontInput = document.getElementById("memoFontInput");
const memoFontBtn = document.getElementById("memoFontBtn");
function onChangeMemoFont() {
  memo.style.fontFamily = memoFontInput.value;
}

memoFontBtn.addEventListener("click", onChangeMemoFont);
//메모 내용 폰트 변경 구현 끝

//메모 크기 변경
const memoSizeInput = document.getElementById("memoSizeInput");
const memoSizeBtn = document.getElementById("memoSizeBtn");

function onChangeMemoSize() {
  memo.style.fontSize = `${memoSizeInput.value}px`;
}

memoSizeBtn.addEventListener("click", onChangeMemoSize);
//메모 크기 변경 구현 끝

//메모 초기화 버튼
const memoResetBtn = document.getElementById("memoResetBtn");

function resetMemo() {
  memo.style.color = "black";
  memo.style.fontFamily = "";
  memo.style.fontStyle = "";
  memo.style.fontSize = "";
  memo.style.fontWeight = "";
}

memoResetBtn.addEventListener("click", resetMemo);
//메모 초기화 버튼 구현 끝
