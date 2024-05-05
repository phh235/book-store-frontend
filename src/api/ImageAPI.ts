import ImageModel from "../models/ImageModel";
import { my_request } from "../api/Request";

export async function getAllImage(maSach: number): Promise<ImageModel[]> {
  const result: ImageModel[] = [];
  // xác định endpoint
  const duongDan: string = `http://localhost:1234/sach/${maSach}/danhSachHinhAnh`;
  // gọi request
  const response = await my_request(duongDan);
  // lấy json sách
  const responseData = response._embedded.hinhAnhs;
  // console.log(responseData);

  for (const key in responseData) {
    result.push({
      maHinhAnh: responseData[key].maHinhAnh,
      tenHinhAnh: responseData[key].tenHinhAnh,
      icon: responseData[key].icon,
      duongDan: responseData[key].duongDan,
      duLieuAnh: responseData[key].duLieuAnh,
    });
  }

  return result;
}
