import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addMenu,
  getMenus,
  updateMenu,
  getMenu,
  deleteMenu,
} from "../api/menu";

const asyncAddMenu = createAsyncThunk(
  "menuSlice/asyncAddMenu",
  async (data) => {
    const result = await addMenu(data);
    return result.data;
  }
);

const asyncGetMenus = createAsyncThunk(
  "menuSlice/asyncGetMenus",
  async (page) => {
    const result = await getMenus(page);
    return result.data;
  }
);

const asyncGetMenu = createAsyncThunk("menuSlice/asyncGetMenu", async (id) => {
  const result = await getMenu(id);
  return result.data;
});

const asyncUpdateMenu = createAsyncThunk(
  "menuSlice/asyncUpdateMenu",
  async (formData) => {
    const result = await updateMenu(formData);
    return result.data;
  }
);

const menuSlice = createSlice({
  name: "menuSlice",
  initialState: { menuList: [], selectedMenu: null }, // 초기 상태를 객체로 설정
  reducers: {
    setMenuList: (state, action) => {
      state.menuList = action.payload;
    },
    setSelectedMenu: (state, action) => {
      state.selectedMenu = action.payload; // 선택한 메뉴 정보를 업데이트
    },
  },
  extraReducers: (builder) => {
    builder
      // .addCase(asyncRegister.pending, (state, action) => {})
      .addCase(asyncAddMenu.rejected, (state, action) => {
        return alert("메뉴 등록에 실패했습니다. 다시 시도해주세요.");
      })
      .addCase(asyncAddMenu.fulfilled, (state, action) => {
        alert("메뉴 등록 성공");
        state.menuList.push(action.payload);
      })

      // 메뉴목록
      .addCase(asyncGetMenus.fulfilled, (state, action) => {
        state.menuList = action.payload;
      })

      // 메뉴 1개
      .addCase(asyncGetMenu.fulfilled, (state, action) => {
        alert("메뉴검색에 성공했습니다.");
        state.selectedMenu = action.payload;
      })
      .addCase(asyncGetMenu.rejected, (state, action) => {
        return alert("메뉴검색에 실패했습니다.");
      })

      // 메뉴수정
      .addCase(asyncUpdateMenu.rejected, (state, action) => {
        return alert("메뉴 수정에 실패했습니다. 다시 시도해주세요.");
      })
      .addCase(asyncUpdateMenu.fulfilled, (state, action) => {
        state.selectedMenu.push(action.payload); // 업데이트된 메뉴 정보를 받아옵니다.

        alert("메뉴 수정 성공");
      });
  },
});

export default menuSlice;
export { asyncAddMenu, asyncGetMenus, asyncUpdateMenu };
export const { setMenuList, setSelectedMenu } = menuSlice.actions;
