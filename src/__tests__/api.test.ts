/**
 * @jest-environment jsdom
 */
import wtil from "../";

test("모듈은 기본 내보내기", () => {
  expect(wtil).toBeTruthy();
});

test("isNull 기본 동작 확인", () => {
  expect(wtil.isNull(null)).toBe(true);
  expect(wtil.isNull("a")).toBe(false);
});

test("isNil 기본 동작 확인", () => {
  expect(wtil.isNil(null)).toBe(true);
  expect(wtil.isNil(undefined)).toBe(true);
});

test("isFunction 기본 동작 확인", () => {
  expect(wtil.isFunction("hello")).toBe(true);
  expect(wtil.isFunction(() => {})).toBe(true);
});

test("모듈에 포함된 함수 확인", () => {
  expect(typeof wtil.pick).toBe("function");
});

test("모듈에 포함된 함수 확인", () => {
  expect(typeof wtil.omit).toBe("function");
});

test("Selector 동작 확인", () => {
  const divElement = document.createElement("div");
  divElement.innerHTML = `<button class='test-btn'>Continue</button>`;
  document.body.appendChild(divElement);

  const $button = wtil("button.test-btn");
  expect($button).toBeTruthy();
  const buttonElement = $button.get(0);
  if (buttonElement) {
    divElement.removeChild(buttonElement);
  }
});

test('`wtil("").innerHTML()`~~~~', () => {});

test('`wtil("").show()`~~~~', () => {});

test('`wtil("").hidden()`~~~~', () => {});

test('`wtil("").addEvent()`~~~~', () => {});
