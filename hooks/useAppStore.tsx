import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../src/redux/store";

export const useAppStore: TypedUseSelectorHook<RootState> = useSelector;