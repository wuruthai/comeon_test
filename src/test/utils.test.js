import { Storage, capitalizeFirstLetter } from "utils";

const TEST_KEY = "TEST__KEY";
const TEST_VALUE = "TEST";

test("Storage.storeData", () => {
  Storage.storeData(TEST_KEY, TEST_VALUE);
  expect(JSON.parse(localStorage.getItem(TEST_KEY))).toBe(TEST_VALUE);
});

test("Storage.retrieveData", () => {
  Storage.storeData(TEST_KEY, TEST_VALUE);
  const storagedValue = Storage.retrieveData(TEST_KEY);
  expect(storagedValue).toBe(TEST_VALUE);
});

test("capitalizeFirstLetter(string)", () => {
  const str = "string";
  const capitilizedStr = capitalizeFirstLetter(str);
  expect("String").toBe(capitilizedStr);
});

test("capitalizeFirstLetter(number|null|undefined|obj|array)", () => {
  const paramList = [1234, null, undefined, {}, [1, 2, 3]];
  paramList.forEach((param) => {
    expect(param).toBe(capitalizeFirstLetter(param));
  });
});
