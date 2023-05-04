/**
   *위 코드에서 createRange() 메소드는 새로운 Range 객체를 생성합니다. 
   selectNodeContents() 메소드를 사용하여 선택하고자 하는 요소의 내용을 선택합니다. 
   getSelection() 메소드는 현재 선택된 영역을 나타내는 Selection 객체를 반환하며, 
   removeAllRanges() 메소드를 사용하여 이전에 선택된 영역을 모두 지워줍니다. 
   addRange() 메소드를 사용하여 새로운 Range 객체를 선택합니다. 
   마지막으로 execCommand('copy') 메소드를 사용하여 선택한 내용을 클립보드에 복사합니다.
   */
const copyTargetDom = ($dom) => {
  const range = document.createRange();
  range.selectNode($dom);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
  document.execCommand("copy");
  selection.removeAllRanges();
};

export { copyTargetDom };
