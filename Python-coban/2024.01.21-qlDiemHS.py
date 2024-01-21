
## Chương trình quản lý điểm học sinh ... siêu nhỏ

dshs = [
    {'HoTen': 'NV Tèo', 'GioiTinh': 'Nam', 'Toan': 8.5, 'Ly': 7.4, 'Hoa': 7.8} ,
    {'HoTen': 'NT Tít', 'GioiTinh': 'Nữ', 'Toan': 7.5, 'Ly': 8.4, 'Hoa': 8.8} ,
    {'HoTen': 'NV Ba', 'GioiTinh': 'Nam', 'Toan': 7.5, 'Ly': 7.0, 'Hoa': 6.8} 
]

for hs in dshs:
    hs['DTB'] = round( (hs['Toan'] + hs['Ly'] + hs['Hoa'])/3 , 1)
    if (hs['DTB'] >= 8):
        if (hs['Toan'] > 7 and hs['Ly'] > 7 and hs['Hoa'] > 7):
            hs['Loai'] = "Giỏi"
        else:
            hs['Loai'] = "Khá Giỏi"
    else:
        hs['Loai'] = "Khá"
    print(hs)
    
