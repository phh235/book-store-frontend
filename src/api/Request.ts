export async function my_request(duongDan: string) {
  // truy vấn đến đường dẫn
  const response = await fetch(duongDan);
  // nếu trả về lỗi
  if (!response.ok) {
    throw new Error(`Không thể truy cập ${duongDan}`);
  }
  // nếu trả về thành công
  return response.json();
}
