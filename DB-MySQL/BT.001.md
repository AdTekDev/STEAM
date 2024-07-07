
Cơ sở dữ liệu quản lý bán hàng gồm có các quan hệ sau:
KHACHHANG (MAKH, HOTEN, DCHI, SODT, NGSINH, DOANHSO, NGDK)  
Tân từ: Quan hệ khách hàng sẽ lưu trữ thông tin của khách hàng thành viên gồm có các thuộc tính: mã khách àng, họ tên, địa chỉ, số điện thoại, ngày sinh, ngày đăng ký và doanh số (tổng trị giá các hóa đơn của khách àng thành viên này).

NHANVIEN (MANV,HOTEN, NGVL, SODT)  
Tân từ: Mỗi nhân viên bán hàng cần ghi nhận họ tên, ngày vào làm, điện thọai liên lạc, mỗi nhân viên phân iệt với nhau bằng mã nhân viên.

SANPHAM (MASP,TENSP, DVT, NUOCSX, GIA)    
Tân từ: Mỗi sản phẩm có một mã số, một tên gọi, đơn vị tính, nước sản xuất và một giá bán.

HOADON (SOHD, NGHD, MAKH, MANV, TRIGIA)   
Tân từ: Khi mua hàng, mỗi khách hàng sẽ nhận một hóa đơn tính tiền, trong đó sẽ có số hóa đơn, ngày mua, hân viên nào bán hàng, trị giá của hóa đơn là bao nhiêu và mã số của khách hàng nếu là khách hàng thành iên.

CTHD (SOHD,MASP,SL)  
Tân từ: Diễn giải chi tiết trong mỗi hóa đơn gồm có những sản phẩm gì với số lượng là bao nhiêu.

![image](https://github.com/AdTekDev/STEAM/assets/18588011/cfd135e4-2ea4-4403-b37e-3c7ca29458fd)

![image](https://github.com/AdTekDev/STEAM/assets/18588011/2e943f1f-6797-4848-b272-ed5e8d5fda84)

![image](https://github.com/AdTekDev/STEAM/assets/18588011/06d4a7e4-a028-48f2-affb-ebcf20ddcc37)

![image](https://github.com/AdTekDev/STEAM/assets/18588011/b6ec4208-d9c5-48e7-abee-43970e5c8257)


I. Ngôn ngữ định nghĩa dữ liệu (Data Definition Language):
1. Tạo các quan hệ và khai báo các khóa chính, khóa ngoại của quan hệ.
2. Thêm vào thuộc tính GHICHU có kiểu dữ liệu varchar(20) cho quan hệ SANPHAM.
3. Thêm vào thuộc tính LOAIKH có kiểu dữ liệu là tinyint cho quan hệ KHACHHANG.
4. Sửa kiểu dữ liệu của thuộc tính GHICHU trong quan hệ SANPHAM thành varchar(100).
5. Xóa thuộc tính GHICHU trong quan hệ SANPHAM.
6. Làm thế nào để thuộc tính LOAIKH trong quan hệ KHACHHANG có thể lưu các giá trị là: “Vang ai”, “Thuong xuyen”, “Vip”, …
7. Đơn vị tính của sản phẩm chỉ có thể là (“cây”,”hộp”,”cái”,”quyển”,”chục”)
8. Giá bán của sản phẩm từ 500 đồng trở lên.
9. Mỗi lần mua hàng, khách hàng phải mua ít nhất 1 sản phẩm.
10. Ngày gia nhập của khách hàng thành viên phải lớn hơn ngày sinh của người đó.
11. Ngày mua hàng (NGHD) của một khách hàng thành viên sẽ lớn hơn hoặc bằng ngày khách hàng đó ăng ký thành viên (NGDK).
12. Ngày bán hàng (NGHD) của một nhân viên phải lớn hơn hoặc bằng ngày nhân viên đó vào làm.
13. Mỗi một hóa đơn phải có ít nhất một chi tiết hóa đơn.
14. Trị giá của một hóa đơn là tổng thành tiền (số lượng*đơn giá) của các chi tiết thuộc hóa đơn đó.
15. Doanh số của một khách hàng là tổng trị giá các hóa đơn mà khách hàng thành viên đó đã mua.
II. Ngôn ngữ thao tác dữ liệu (Data Manipulation Language):
1. Nhập dữ liệu cho các quan hệ trên.
2. Cập nhật giá tăng 5% đối với những sản phẩm do “Thai Lan” sản xuất.
3. Cập nhật giá giảm 5% đối với những sản phẩm do “Trung Quoc” sản xuất có giá từ 10.000 trở xuống.
4. Cập nhật giá trị LOAIKH là “Vip” đối với những khách hàng đăng ký thành viên trước ngày 1/1/2007 ó doanh số từ 10.000.000 trở lên hoặc khách hàng đăng ký thành viên từ 1/1/2007 trở về sau có doanh ố từ 2.000.000 trở lên.
III. Viết các câu truy vấn:
1. In ra danh sách các sản phẩm (MASP,TENSP) do “Trung Quốc” sản xuất.
2. In ra danh sách các sản phẩm (MASP, TENSP) có đơn vị tính là “cây”, ”quyển”.
3. In ra danh sách các sản phẩm (MASP,TENSP) có mã sản phẩm bắt đầu là “B” và kết thúc là “01”.
4. In ra danh sách các sản phẩm (MASP,TENSP) do “Trung Quốc” sản xuất có giá từ 20.000 đến 30.000.
5. In ra danh sách các sản phẩm (MASP,TENSP) do “Trung Quốc” hoặc “Thái Lan” sản xuất có giá từ
20.000 đến 30.000.
6. In ra các số hóa đơn, trị giá hóa đơn bán ra trong ngày 1/1/2007 và ngày 2/1/2007.
7. In ra các số hóa đơn, trị giá hóa đơn trong tháng 1/2007, sắp xếp theo ngày (tăng dần) và trị giá của óa đơn (giảm dần).
8. In ra danh sách các khách hàng (MAKH, HOTEN) đã mua hàng trong ngày 1/1/2007.
9. In ra danh sách các sản phẩm (MASP,TENSP) được khách hàng có tên “Nguyễn Văn A” mua trong háng 10/2006.
10. In ra số hóa đơn, trị giá các hóa đơn do nhân viên có tên “Nguyễn Văn B” lập trong ngày 10/10/2006.
11. Tìm các số hóa đơn đã mua sản phẩm có mã số “BB01” hoặc “BB02”.
12. Tìm các số hóa đơn đã mua sản phẩm có mã số “BB01” hoặc “BB02”, mỗi sản phẩm mua với số ượng từ 10 đến 20.
13. Tìm các số hóa đơn mua cùng lúc 2 sản phẩm có mã số “BB01” và “BB02”, mỗi sản phẩm mua với số ượng từ 10 đến 20.
14. In ra danh sách các sản phẩm (MASP,TENSP) do “Trung Quốc” sản xuất hoặc các sản phẩm được bán a trong ngày 1/1/2007.
15. In ra danh sách các sản phẩm (MASP,TENSP) không bán được.
16. In ra danh sách các sản phẩm (MASP,TENSP) không bán được trong năm 2006.
17. In ra danh sách các sản phẩm (MASP,TENSP) do “Trung Quốc” sản xuất không bán được trong năm 2006.
18. Có bao nhiêu hóa đơn không phải của khách hàng đăng ký thành viên mua?
19. Cho biết trị giá hóa đơn cao nhất, thấp nhất là bao nhiêu ?
20. Trị giá trung bình của tất cả các hóa đơn được bán ra trong năm 2006 là bao nhiêu?
21. Tính doanh thu bán hàng trong năm 2006.
22. Tìm số hóa đơn có trị giá cao nhất trong năm 2006.
23. Tìm họ tên khách hàng đã mua hóa đơn có trị giá cao nhất trong năm 2006.
24. In ra danh sách 3 khách hàng (MAKH, HOTEN) có doanh số cao nhất.
25. In ra danh sách các sản phẩm (MASP, TENSP) có giá bán bằng 1 trong 3 mức giá cao nhất.
26. In ra danh sách các sản phẩm (MASP, TENSP) do “Trung Quốc” sản xuất có giá bằng 1 trong 3 mức iá thấp nhất (của tất cả các sản phẩm).
27. In ra danh sách các sản phẩm (MASP, TENSP) do “Trung Quốc” sản xuất có giá bằng 1 trong 3 mức iá thấp nhất (của sản phẩm do “Trung Quốc” sản xuất).
28. * In ra danh sách 3 khách hàng (MAKH, HOTEN) có doanh số cao nhất (sắp xếp theo kiểu xếp hạng).
29. Tính tổng số sản phẩm do “Trung Quốc” sản xuất.
30. Tính tổng số sản phẩm của từng nước sản xuất.
31. Với từng nước sản xuất, tìm giá bán cao nhất, thấp nhất, trung bình của các sản phẩm.
32. Tính doanh thu bán hàng mỗi ngày.
33. Tính tổng số lượng của từng sản phẩm bán ra trong ngày 28/10/2006.
34. Tính doanh thu bán hàng của từng tháng trong năm 2006.
35. Tìm khách hàng (MAKH, HOTEN) có số lần mua hàng nhiều nhất.
36. Tìm sản phẩm (MASP, TENSP) có tổng số lượng bán ra thấp nhất trong năm 2006.
37. Tháng mấy trong năm 2006, doanh số bán hàng thấp nhất ?
38. Mỗi nước sản xuất, tìm sản phẩm (MASP,TENSP) có giá bán cao nhất.
39. *Trong 10 khách hàng có doanh số cao nhất, tìm khách hàng có số lần mua hàng nhiều nhất.
40. *Tìm nước sản xuất sản xuất ít nhất 3 sản phẩm có giá bán khác nhau

# Link - https://cuuduongthancong.com/atc/35/bai-tap-co-so-du-lieu-co-loi-giai---phan-nguyen-thuy-an---uit  
