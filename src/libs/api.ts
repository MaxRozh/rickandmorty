import fetch from 'isomorphic-fetch';

interface IParams {
  url: string;
}

async function apiFetch<T>({ url }: IParams): Promise<{ isOk: boolean; body: T | null }> {
  try {
    const response = await fetch(url);
    const body = await response.json();

    return { isOk: response.ok, body };
  } catch (e) {
    return { isOk: false, body: null };
  }
}

export default apiFetch;
