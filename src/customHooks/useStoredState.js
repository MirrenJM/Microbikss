import React, { useMemo, useState, useEffect } from "react";

export function useStoredBoxContent(boxContentInitial) {
  const intitialState = useMemo(() => {
    const localStorageContent = localStorage.getItem("boxContentStorage");
    if (localStorageContent) {
      return JSON.parse(localStorageContent);
    }
    return boxContentInitial;
  }, []);

  const [storeBoxContent, setStoreBoxContent] = useState(intitialState);

  useEffect(() => {
    const storeState = JSON.stringify(storeBoxContent);
    localStorage.setItem("boxContentStorage", storeState);
  }, [storeBoxContent]);

  return [storeBoxContent, setStoreBoxContent];
}

export function useStoredHistory(boxHistory) {
  const initialState = useMemo(() => {
    const localStorageHistory = localStorage.getItem("historyStorage");
    if (localStorageHistory) {
      return JSON.parse(localStorageHistory);
    }
    return boxHistory;
  }, []);

  const [storedHistory, setStoredHistory] = useState(initialState);

  useEffect(() => {
    const storeHistory = JSON.stringify(storedHistory);
    localStorage.setItem("historyStorage", storeHistory);
  }, [storedHistory]);

  return [storedHistory, setStoredHistory];
}

export function useStoredMoves(moves) {
  const initialState = useMemo(() => {
    const localStorageMoves = localStorage.getItem("movesStorage");
    if (localStorageMoves) {
      return JSON.parse(localStorageMoves);
    }
    return moves;
  }, []);

  const [storedMoves, setStoredMoves] = useState(initialState);

  useEffect(() => {
    const storeMoves = JSON.stringify(storedMoves);
    localStorage.setItem("movesStorage", storeMoves);
  }, [storedMoves]);

  return [storedMoves, setStoredMoves];
}

export function useStoredState(liveState, storageId){
  const initialState = useMemo(() => {

    const localStorageState = localStorage.getItem(storageId);
    if(localStorageState){
      return JSON.parse(localStorageState);
    }
    return liveState;
  }, []);

  const [myState, setMyState ] = useState(initialState);

  useEffect(() => {
    const storeState = JSON.stringify(myState);
    localStorage.setItem(storageId, storeState);
  }, [myState]);

  return [myState, setMyState];
}
