import { renderHook, act } from "@testing-library/react-hooks";
import { useSearch } from "hooks";
import MOCK_GAME_LIST from "./mocks/game-list.mock.json";

test("useSearch()", () => {
  const { result } = renderHook(() =>
    useSearch(MOCK_GAME_LIST, (item) => item.name)
  );
  const GAME_NAME = "Jack and the Beanstalk";
  let SEARCH_KEYWORD = "Jack aNd the BeaNstAlk";
  act(() => result.current.setSearch(SEARCH_KEYWORD));
  expect(result.current.search).toBe(SEARCH_KEYWORD); // state updated?
  expect(result.current.searchedList.length).toBe(1); // state updated?
  expect(result.current.searchedList[0].name).toBe(GAME_NAME); // state updated?
});
