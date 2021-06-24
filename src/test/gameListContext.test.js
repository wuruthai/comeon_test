import { renderHook, act } from "@testing-library/react-hooks";
import { useGameList, GameListProvider } from "context/game-list.context";

test("GameListContext", async () => {
  const { result } = renderHook(() => useGameList(), {
    wrapper: GameListProvider,
  });
  const GAME_CODE = "starburst";

  expect.objectContaining({
    gameList: expect.any(Array),
    getGameList: expect.any(Function),
    gameListLoading: expect.any(Boolean),
    getByCode: expect.any(Function),
  });
  // await act(async () => result.current.getGameList());
  // expect(result.current.gameList.length).toBe(5);
  // expect(result.current.getByCode(GAME_CODE).name).toBe("Starburst");
});
