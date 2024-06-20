import { axiosInstance } from "../axiosInstance";

export async function getFetcher(url: string, locale?: string) {

  console.log(locale)
  try {
    const response = await axiosInstance.get(url, {
      headers: {
        "Accept-Language": locale,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (e) {
    return null
  }
}
