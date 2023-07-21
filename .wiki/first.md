# 정규식

2023.07.21 FRI

## 문제

- 요구사항: 숫자 원 기호(①-⑮)와 단어 사이의 공백 있을 수도 있는 문자를 찾는 정규식 만들기.

1. 첫 번째 시도의 문제

```js
// 목표: 숫자 원 기호 뒤에 있는 문자를 대가로로 감싸기.
// 예시: This is an ① example of regular ②expression.
"This is an ① example of regular ②expression".replace(
  /([①-⑮])[ ](\w)/g,
  "$1 [$2]"
);
```

### 결과

- 기대한 결과
  `This is an ① [example] of regular ②[expression].`
- 실제 결과
  `This is an ① [e]xample of regular ②expression.`
  - `([①-⑮])`
    1. `(`와 `)`사이는 `$1` 첫 번째 캡처를 뜻한다.
    2. `[`와 `]`사이는 OR를 의미한다. 대괄호 속 문자나 표현들을 있다면 검사한다는 뜻이다.
    3. `①-⑮`는 `①`의 유니코드부터 `⑮`를 의미한다.
  - `[ ]`
    1. 공백이 하나 있다.
  - `(\w)`
    1. 두 번째의 `(`와 `)`사이는 `$2` 두 번째 캡처를 뜻한다.
    2. `\w` 하나의 문자를 의미한다.

#### 즉, 첫 번째 시도의 정규식은 "숫자 원 기호와 공백을 다음 문자로 가지며 이를 첫 번째로 캡처하고, 하나의 문자를 캡처하는 정규식이다.

2. 두 번째 시도 (성공)

```js
// 목표: 숫자 원 기호 뒤에 있는 문자를 대가로로 감싸기.
// 예시: This is an ① example of regular ②expression.
"This is an ① example of regular ②expression".replace(
  /([①-⑮])[\s]*(\w)/g,
  "$1 [$2]"
);
```

### 결과

- 기대한 결과
  `This is an ① [example] of regular ②[expression].`
- 실제 결과
  `This is an ① [e]xample of regular ②expression.`
  - `([①-⑮])`
    1. 위와 동일
  - `[\s]*`
    1. `[\s]*` 이 또한 공백을 의미하며 0개 이상의 문자인지 있을수도 없을수도 있다는 뜻이다.
  - `(\w)`
    1. 두 번째의 `(`와 `)`사이는 `$2` 두 번째 캡처를 뜻한다.
    2. `\w` 하나의 문자를 의미한다.

## 참고 링크

- [자바스크립트에서의 정규식 (MDN)](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_expressions)
- [정규식 표현들](https://support.cognex.com/docs/vidi_341/web/KO/vidisuite/Content/ViDi_Topics/1_Overview/images_display_filters_regex_basics.htm)
- [MDN replace 메소드](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
