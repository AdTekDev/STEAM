
## Tạo CSDL về SV và GV cũng như đề tài mà GV hướng dẫn SV  

- **Khoa**(makhoa char(10), tenkhoa char(30), dienthoai char(10))  
- **GiangVien**(magv int, hotengv char(30), luong decimal(5,2), makhoa char(10))  
- **SinhVien**(masv int, hotensv char(30), makhoa char(10), namsinh int, quequan char(30))  
- **DeTai**(madt char(10), tendt char(30), kinhphi int, NoiThucTap char(30))  
- **HuongDan**(masv int, madt char(10), magv int, ketqua decimal(5,2))  


![image](https://github.com/user-attachments/assets/559fcc8c-7b31-44ae-b3a3-0258dfac9bb9)



Thực hiện các yêu cầu dưới đây :   

- Đưa ra thông tin gồm mã số, họ tên và tên khoa của tất cả các giảng viên
- Đưa ra thông tin gồm mã số, họ tênvà tên khoa của các giảng viên của khoa ‘Dia ly’
- Cho biết số sinh viên của khoa ‘Cong nghe sinh hoc’
- Đưa ra danh sách gồm mã số, họ tên và tuổi của các sinh viên khoa ‘Toan hoc’
- Cho biết số giảng viên của khoa ‘Cong nghe sinh hoc’
- Cho biết thông tin về sinh viên không tham gia thực tập
- Đưa ra mã khoa, tên khoa và số giảng viên của mỗi khoa
- Cho biết số điện thoại của khoa mà sinh viên có tên ‘Le Van Son’ đang theo học

Link:  https://devmaster.edu.vn/bai-tap-sql-co-ban.html 
