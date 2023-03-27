import { useEffect, useReducer } from 'react';

interface IState<T> {
  data?: T;
  error?: Error;
  isLoading: boolean;
}
type Action<T> =
  | { type: 'loading' }
  | { type: 'error'; payload: Error }
  | { type: 'fetched'; payload: T };

function useFetch<T = unknown>(url: string): IState<T> {
  const initialState: IState<T> = {
    data: undefined,
    error: undefined,
    isLoading: false,
  };
  const fetchReducer = (state: IState<T>, action: Action<T>) => {
    switch (action.type) {
      case 'loading':
        return { ...state, isLoading: true };
      case 'error':
        return { ...state, error: action.payload };
      case 'fetched':
        return { ...state, data: action.payload, isLoading: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);
  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      dispatch({ type: 'loading' });
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = (await response.json()) as T;
        dispatch({ type: 'fetched', payload: data });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({ type: 'error', payload: error });
        }
      }
    }
    fetchData()
  }, []);

  return state;
}

export default useFetch;
