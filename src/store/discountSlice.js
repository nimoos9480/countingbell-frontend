import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDiscount } from "../api/Discount";

// 할인 추가 비동기 액션 생성
const asyncAddDiscount = createAsyncThunk("discountSlice/asyncAddDiscount", async (data) => {
  try {
    const result = await addDiscount(data);
    return result.data;
  } catch (error) {
    throw error;
  }
});

// 할인 조회
const asyncViewDiscount = createAsyncThunk(
  "discountSilce/asyncViewDiscount", async (page) => {
    const result = await asyncViewDiscount(page);
    return result.data;
  });

// 할인 수정
const asyncUpdateDiscount = createAsyncThunk(
  "discountSile/asyncUpdateDiscount", async (data) => {
    const result = await asyncUpdateDiscount(data);
    return result.data;
  });

// 할인 삭제
const asyncDeleteDiscount = createAsyncThunk(
  "discountSlice/asyncDeleteDiscount", async (id) => {
    const result = await asyncDeleteDiscount(id);
    return result.data;
  }
)


const discountSlice = createSlice({
  name: "discountSlice",
  initialState: { data: null, error: null, loading: false },
  reducers: {},
  extraReducers: (builder) => {

    // 할인 추가 액션 성공,실패,로딩시 상태 업데이트
    builder
      //실패
      .addCase(asyncAddDiscount.rejected, (state, action) => {
        state.error = "할인 등록에 실패했습니다. 다시 시도해주세요.";
        state.loading = false;
      })
      // 액션이 성공한 경우- 데이터 저장
      .addCase(asyncAddDiscount.fulfilled, (state, action) => { 
        state.data = action.payload;
        state.loading = false;
      })
      // 액션이 아직 처리중일 때의 상태 
      .addCase(asyncAddDiscount.pending, (state) => {
        state.loading = true;
      });


      // 할인 조회 액션 성공,실패,로딩시 상태 업데이트
      builder
      .addCase(asyncViewDiscount.rejected, (state, action) => {
        state.error = "할인 조회에 실패했습니다. 다시 시도해주세요.";
        state.loading = false;
      })
      .addCase(asyncViewDiscount.fulfilled, (state, action) => {
        state.data = action.payload; 
        state.loading = false;
      })
      .addCase(asyncViewDiscount.pending, (state) => { 
        state.loading = true;
      });

      // 할인 수정 액션 성공,실패,로딩시 상태 업데이트
      builder
      .addCase(asyncUpdateDiscount.rejected, (state, action) => {
        state.error = "할인 수정에 실패했습니다. 다시 시도해주세요.";
        state.loading = false;
      })
      .addCase(asyncUpdateDiscount.fulfilled, (state, action) => {
        state.data = action.payload; 
        state.loading = false;
      })
      .addCase(asyncUpdateDiscount.pending, (state) => { 
        state.loading = true;
      });

      // 할인 삭제 액션 성공,실패,로딩시 상태 업데이트
      builder
      .addCase(asyncDeleteDiscount.rejected, (state, action) => {
        state.error = "할인 수정에 실패했습니다. 다시 시도해주세요.";
        state.loading = false;
      })
      .addCase(asyncDeleteDiscount.fulfilled, (state, action) => {
        state.data = action.payload; 
        state.loading = false;
      })
      .addCase(asyncDeleteDiscount.pending, (state) => { 
        state.loading = true;
      });
    



  },
});


export default discountSlice;
export { asyncAddDiscount };