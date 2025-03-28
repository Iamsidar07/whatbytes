
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ScoreState {
  rank: number;
  percentile: number;
  currentScore: {
    current: number;
    total: number;
  };
}

const initialState: ScoreState = {
  rank: 1,
  percentile: 30,
  currentScore: {
    current: 10,
    total: 15,
  },
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setRank: (state, action: PayloadAction<number>) => {
      state.rank = action.payload;
    },
    setPercentile: (state, action: PayloadAction<number>) => {
      state.percentile = action.payload;
    },
    setCurrentScore: (state, action: PayloadAction<{ current: number; total: number }>) => {
      state.currentScore = action.payload;
    },
  },
});

export const { setRank, setPercentile, setCurrentScore } = scoreSlice.actions;

export default scoreSlice.reducer;

