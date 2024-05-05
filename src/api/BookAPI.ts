import BookModel from "../models/BookModel";
import { my_request } from "./Request";

export async function getAllBook(): Promise<BookModel[]> {
  const result: BookModel[] = [];
  // xác định endpoint
  const duongDan: string = "http://localhost:1234/sach";
  // gọi request
  const response = await my_request(duongDan);
  // lấy json sách
  const responseData = response._embedded.saches;
  // console.log(responseData);

  for (const key in responseData) {
    result.push({
      maSach: responseData[key].maSach,
      tenSach: responseData[key].tenSach,
      tenTacGia: responseData[key].tenTacGia,
      isbn: responseData[key].isbn,
      moTa: responseData[key].moTa,
      giaNiemYet: responseData[key].giaNiemYet,
      giaBan: responseData[key].giaBan,
      soLuong: responseData[key].soLuong,
      trungBinhXepHang: responseData[key].trungBinhXepHang,
    });
  }

  return result;
}
