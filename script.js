(function () {
  "use strict";

  const items = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
  ];
  document.querySelector(".info").textContent = items.join(" ");

  const doors = document.querySelectorAll(".door");
  document.querySelector("#spinner").addEventListener("click", spin);
  document.querySelector("#reseter").addEventListener("click", init);

  async function spin() {
    init(false, 1, 2);
    for (const door of doors) {
      const boxes = door.querySelector(".boxes");
      const duration = parseInt(boxes.style.transitionDuration);
      boxes.style.transform = "translateY(0)";
      await new Promise((resolve) => setTimeout(resolve, duration * 1000));
    }
  }

  function init(firstInit = true, groups = 1, duration = 1) {
    const employees = [{"id":"00043", "arr":[0,0,0,4,3], "name":"Đào Xuân Nam"},{"id":"04840", "arr":[0,4,8,4,0], "name":"Trần Quang"},{"id":"06805", "arr":[0,6,8,0,5], "name":"Hà Trần Thanh An"},{"id":"05869", "arr":[0,5,8,6,9], "name":"Nguyễn Trần Hữu Trang"},{"id":"02982", "arr":[0,2,9,8,2], "name":"Trần Quốc Toàn"},{"id":"00132", "arr":[0,0,1,3,2], "name":"Trương Đình Khánh Bảo"},{"id":"05229", "arr":[0,5,2,2,9], "name":"trần hồng ngọc"},{"id":"00132", "arr":[0,0,1,3,2], "name":"Trương Đình Khánh Bảo"},{"id":"09671", "arr":[0,9,6,7,1], "name":"LÊ HOÀI PHONG"},{"id":"05273", "arr":[0,5,2,7,3], "name":"Nguyễn Thị Quỳnh Như"},{"id":"03115", "arr":[0,3,1,1,5], "name":"TỐNG PHƯỚC ANH"},{"id":"04158", "arr":[0,4,1,5,8], "name":"NGUYỄN THỊ HOÀNG YẾN"},{"id":"09672", "arr":[0,9,6,7,2], "name":"Lê Anh lộc"},{"id":"04463", "arr":[0,4,4,6,3], "name":"Đỗ Trần Thuận Hiếu"},{"id":"04068", "arr":[0,4,0,6,8], "name":"Trần Hoàng Thuý Hà"},{"id":"03008", "arr":[0,3,0,0,8], "name":"Lê Phát Việt"},{"id":"05911", "arr":[0,5,9,1,1], "name":"Nguyễn Đức Vượng"},{"id":"03339", "arr":[0,3,3,3,9], "name":"Đinh Trung Chánh"},{"id":"05589", "arr":[0,5,5,8,9], "name":"Lê Thị Thanh Vy"},{"id":"03792", "arr":[0,3,7,9,2], "name":"Vũ Trà Mi"},{"id":"03569", "arr":[0,3,5,6,9], "name":"Bùi Ngọc Hoài Diễm"},{"id":"04286", "arr":[0,4,2,8,6], "name":"Trương Hoàng Phương"},{"id":"06654", "arr":[0,6,6,5,4], "name":"Hà Đức Thiện"},{"id":"20015", "arr":[2,0,0,1,5], "name":"Hoàng Thu Ngân "},{"id":"05738", "arr":[0,5,7,3,8], "name":"Nguyễn Yến My "},{"id":"04931", "arr":[0,4,9,3,1], "name":"Lê Ngọc Phương Giao"},{"id":"06469", "arr":[0,6,4,6,9], "name":"Phạm Quốc Tài"},{"id":"04886", "arr":[0,4,8,8,6], "name":"Bùi Thị Thuỳ Vân"},{"id":"02841", "arr":[0,2,8,4,1], "name":"Đỗ Văn Thủy"},{"id":"05906", "arr":[0,5,9,0,6], "name":"Đỗ Thị Phương Khánh "},{"id":"01650", "arr":[0,1,6,5,0], "name":"Nguyễn Minh Nhựt"},{"id":"06504", "arr":[0,6,5,0,4], "name":"La Kim Yến"},{"id":"03674", "arr":[0,3,6,7,4], "name":"Nguyễn Trường Phước"},{"id":"03677", "arr":[0,3,6,7,7], "name":"Võ Thị Thu Giang"},{"id":"06823", "arr":[0,6,8,2,3], "name":"Nghiêm An Nhiên "},{"id":"05620", "arr":[0,5,6,2,0], "name":"Trần Gia Thuỵ"},{"id":"06144", "arr":[0,6,1,4,4], "name":"Ngô Phúc Tự Di"},{"id":"03455", "arr":[0,3,4,5,5], "name":"Nguyễn Công Tín"},{"id":"04381", "arr":[0,4,3,8,1], "name":"Nguyễn Ngọc Độ"},{"id":"05492", "arr":[0,5,4,9,2], "name":"Lương Thị Ý Như"},{"id":"06768", "arr":[0,6,7,6,8], "name":"Dương Thị Thanh Tuyền"},{"id":"04703", "arr":[0,4,7,0,3], "name":"Huỳnh Khánh Hưng"},{"id":"06864", "arr":[0,6,8,6,4], "name":"Trương Cẩm Hương"},{"id":"05579", "arr":[0,5,5,7,9], "name":"Lê Phạm Hiếu Ngân"},{"id":"03904", "arr":[0,3,9,0,4], "name":"Lâm quảng hồng"},{"id":"04654", "arr":[0,4,6,5,4], "name":"Phạm Thị Thu Hảo "},{"id":"04646", "arr":[0,4,6,4,6], "name":"Trương Văn Giang"},{"id":"04182", "arr":[0,4,1,8,2], "name":"Nguyễn Hồng Thanh Nhã"},{"id":"05150", "arr":[0,5,1,5,0], "name":"Nguyễn Thanh Duy"},{"id":"06263", "arr":[0,6,2,6,3], "name":"lê duy anh"},{"id":"04267", "arr":[0,4,2,6,7], "name":"Lê Anh Tuấn"},{"id":"06666", "arr":[0,6,6,6,6], "name":"Lam See"},{"id":"20292", "arr":[2,0,2,9,2], "name":"Kho Ry Ah"},{"id":"06203", "arr":[0,6,2,0,3], "name":"Nguyễn chí thành tâm"},{"id":"05108", "arr":[0,5,1,0,8], "name":"Đỗ Hải Yến Nhi"},{"id":"20128", "arr":[2,0,1,2,8], "name":"Nguyễn Vĩnh An"},{"id":"03680", "arr":[0,3,6,8,0], "name":"Liên Bích Nghi"},{"id":"04317", "arr":[0,4,3,1,7], "name":"Trương Đoàn Tường Vi"},{"id":"05335", "arr":[0,5,3,3,5], "name":"Phạm Hoàng Vũ"},{"id":"05956", "arr":[0,5,9,5,6], "name":"Nguyễn Minh Tiến"},{"id":"06675", "arr":[0,6,6,7,5], "name":"Nguyễn Hoàng Nguyên"},{"id":"05983", "arr":[0,5,9,8,3], "name":"Lê Trung Nguyên"},{"id":"02958", "arr":[0,2,9,5,8], "name":"Đỗ Văn Tiến"},{"id":"06586", "arr":[0,6,5,8,6], "name":"Trần Yến Nhi"},{"id":"05206", "arr":[0,5,2,0,6], "name":"Hoàng Thị Thu Cúc"},{"id":"00127", "arr":[0,0,1,2,7], "name":"Nguyễn Minh Cảnh"},{"id":"01777", "arr":[0,1,7,7,7], "name":"Phạm Quốc Đạt"},{"id":"00002", "arr":[0,0,0,0,2], "name":"Lê Văn Quốc Khánh"},{"id":"06545", "arr":[0,6,5,4,5], "name":"Phan Lê Phương Trâm"},{"id":"05352", "arr":[0,5,3,5,2], "name":"Hoàng Thị Lâm"},{"id":"00012", "arr":[0,0,0,1,2], "name":"Đỗ Thị Lan Nhi"},{"id":"06524", "arr":[0,6,5,2,4], "name":"Lê thị tuyết nhung"},{"id":"03813", "arr":[0,3,8,1,3], "name":"Ngô Trần Khánh Trang"},{"id":"04697", "arr":[0,4,6,9,7], "name":"Bùi Công Huân"},{"id":"04698", "arr":[0,4,6,9,8], "name":"Nguyễn Nhật Khoa"},{"id":"05735", "arr":[0,5,7,3,5], "name":"Nguyễn Phạm Hoài Thương"},{"id":"05424", "arr":[0,5,4,2,4], "name":"Lương Bích Ngân "},{"id":"00082", "arr":[0,0,0,8,2], "name":"Nguyễn Đoàn Thanh Trúc"},{"id":"05546", "arr":[0,5,5,4,6], "name":"Trần Ngọc Hiếu"},{"id":"05988", "arr":[0,5,9,8,8], "name":"Đặng Gia Linh"},{"id":"03496", "arr":[0,3,4,9,6], "name":"Trần Thuý An"},{"id":"03191", "arr":[0,3,1,9,1], "name":"Võ Thị Kim Xuân"},{"id":"06038", "arr":[0,6,0,3,8], "name":"Phan Đình Lê Khang"},{"id":"06226", "arr":[0,6,2,2,6], "name":"Nguyễn Trang Anh Thư"},{"id":"04823", "arr":[0,4,8,2,3], "name":"TRẦN VỌNG HUY"},{"id":"05032", "arr":[0,5,0,3,2], "name":"Đặng Lê Hoàng Kim Ngân"},{"id":"04422", "arr":[0,4,4,2,2], "name":"Đinh Phan Phi Phượng"},{"id":"00029", "arr":[0,0,0,2,9], "name":"Phan Minh Quyền"},{"id":"04287", "arr":[0,4,2,8,7], "name":"Nguyễn Thị Kim Ngân"},{"id":"06113", "arr":[0,6,1,1,3], "name":"Đoàn Thị Thu Hường"},{"id":"05932", "arr":[0,5,9,3,2], "name":"Phạm Đình Khang "},{"id":"04454", "arr":[0,4,4,5,4], "name":"Nguyễn Phước Tài"},{"id":"00079", "arr":[0,0,0,7,9], "name":"Trần nguyễn phương oanh"},{"id":"20201", "arr":[2,0,2,0,1], "name":"Trương Đình Duy"},{"id":"03097", "arr":[0,3,0,9,7], "name":"Thái Hoàng Khang"},{"id":"05033", "arr":[0,5,0,3,3], "name":"Đặng Mỹ Kim"},{"id":"05958", "arr":[0,5,9,5,8], "name":"Phan Lê Hoàng Việt"},{"id":"04479", "arr":[0,4,4,7,9], "name":"Phạm Hoàng Trung"},{"id":"06097", "arr":[0,6,0,9,7], "name":"Lê Minh Thông"},{"id":"00532", "arr":[0,0,5,3,2], "name":"Phan Thuý Sang"},{"id":"06628", "arr":[0,6,6,2,8], "name":"Lương Thị Tuyết Trinh"},{"id":"03657", "arr":[0,3,6,5,7], "name":"Trương Thị Thanh Trang"},{"id":"00078", "arr":[0,0,0,7,8], "name":"Huỳnh Thị Ngọc Trâm"},{"id":"03485", "arr":[0,3,4,8,5], "name":"Tạ Thị Hồng Dung"},{"id":"04038", "arr":[0,4,0,3,8], "name":"THÁI NGỌC GIA PHÚC"},{"id":"03058", "arr":[0,3,0,5,8], "name":"Nguyễn Thuý Kiều"},{"id":"00034", "arr":[0,0,0,3,4], "name":"Lê Cao Mạnh Tường"},{"id":"20291", "arr":[2,0,2,9,1], "name":"Phạm Thuý Mai Hương"},{"id":"01456", "arr":[0,1,4,5,6], "name":"Huỳnh Thanh Phong"},{"id":"06629", "arr":[0,6,6,2,9], "name":"Vũ Hoàng Phúc"},{"id":"04529", "arr":[0,4,5,2,9], "name":"Võ Thị Nhật Hạ"},{"id":"04135", "arr":[0,4,1,3,5], "name":"Nguyễn Thị Mỹ Nhân"},{"id":"06087", "arr":[0,6,0,8,7], "name":"Phùng Long Phát"},{"id":"20313", "arr":[2,0,3,1,3], "name":"Đỗ Thị Kim Phụng"},{"id":"05573", "arr":[0,5,5,7,3], "name":"Phạm Thị Mai Chi"},{"id":"20207", "arr":[2,0,2,0,7], "name":"Trương Quốc Thắng"},{"id":"03936", "arr":[0,3,9,3,6], "name":"Hoàng Thị Quyên "},{"id":"05051", "arr":[0,5,0,5,1], "name":"Huỳnh Thị Minh Tuyết"},{"id":"06010", "arr":[0,6,0,1,0], "name":"Nguyễn Đăng Khoa"},{"id":"03207", "arr":[0,3,2,0,7], "name":"Võ Ngọc Quý"},{"id":"03158", "arr":[0,3,1,5,8], "name":"Nguyễn Thị Ngọc Huyền"},{"id":"02076", "arr":[0,2,0,7,6], "name":"Hà Thuý Nhi"},{"id":"05570", "arr":[0,5,5,7,0], "name":"Trần Ngọc Minh Hiếu"},{"id":"03090", "arr":[0,3,0,9,0], "name":"NGÔ QUỐC KHÁNH"},{"id":"03866", "arr":[0,3,8,6,6], "name":"Trần Thị Quỳnh Ngân "},{"id":"20344", "arr":[2,0,3,4,4], "name":"Bùi Thị Thuý Hiền"},{"id":"05933", "arr":[0,5,9,3,3], "name":"NGUYỄN TUẤN KHOA"},{"id":"04530", "arr":[0,4,5,3,0], "name":"Phan Thanh Hiếu"},{"id":"00011", "arr":[0,0,0,1,1], "name":"Trần Thị Tươi"},{"id":"00192", "arr":[0,0,1,9,2], "name":"Trương Văn Cường "},{"id":"03562", "arr":[0,3,5,6,2], "name":"Mai Trần Thanh Vi"},{"id":"00075", "arr":[0,0,0,7,5], "name":"Nguyễn Thị Thanh Ngân"},{"id":"00067", "arr":[0,0,0,6,7], "name":"Nguyễn Trí Tài Đức"},{"id":"00069", "arr":[0,0,0,6,9], "name":"Le Vu Hoang"},{"id":"01914", "arr":[0,1,9,1,4], "name":"Trần Huỳnh Ngọc Bảo"},{"id":"06186", "arr":[0,6,1,8,6], "name":"Huỳnh Hữu Thắng"},{"id":"05649", "arr":[0,5,6,4,9], "name":"Lý Minh Tiến"},{"id":"05657", "arr":[0,5,6,5,7], "name":"Tran dang thu thao"},{"id":"06951", "arr":[0,6,9,5,1], "name":"Ngô Thanh Tính"},{"id":"04003", "arr":[0,4,0,0,3], "name":"Nguyễn Thị Hoàng Yến "},{"id":"06825", "arr":[0,6,8,2,5], "name":"Trần Thanh Phong"},{"id":"04421", "arr":[0,4,4,2,1], "name":"Đinh Thị Hồng Điệp"},{"id":"05660", "arr":[0,5,6,6,0], "name":"Trương Thanh Hiếu "},{"id":"05054", "arr":[0,5,0,5,4], "name":"Nguyễn Quang Đại "},{"id":"05647", "arr":[0,5,6,4,7], "name":"Huỳnh Hải Bằng"},{"id":"06943", "arr":[0,6,9,4,3], "name":"DIỆP THU THƯƠNG "},{"id":"06763", "arr":[0,6,7,6,3], "name":"Tràng văn Cầu"},{"id":"03606", "arr":[0,3,6,0,6], "name":"Nguyễn Thị Thanh"},{"id":"04622", "arr":[0,4,6,2,2], "name":"Phạm Đức Phúc"},{"id":"05954", "arr":[0,5,9,5,4], "name":"Trần Thị Hằng"},{"id":"05184", "arr":[0,5,1,8,4], "name":"Trần Thị Thắm"},{"id":"02840", "arr":[0,2,8,4,0], "name":"Nguyễn Công Cẩn"},{"id":"00160", "arr":[0,0,1,6,0], "name":"Nguyễn Quang Nam"},{"id":"20377", "arr":[2,0,3,7,7], "name":"Nguyễn Thị Hà Vy"},{"id":"03873", "arr":[0,3,8,7,3], "name":"Huỳnh Bảo Trân"},{"id":"06691", "arr":[0,6,6,9,1], "name":"Nguyễn phi thoàn"},{"id":"06036", "arr":[0,6,0,3,6], "name":"Lâm Minh Châu"},{"id":"04310", "arr":[0,4,3,1,0], "name":"Vũ phạm ngọc trâm"},{"id":"03353", "arr":[0,3,3,5,3], "name":"Nguyễn Thị Ánh Quyên"},{"id":"04952", "arr":[0,4,9,5,2], "name":"Phạm Ngọc Minh Thư"},{"id":"00598", "arr":[0,0,5,9,8], "name":"Đặng Thị Tuyết Trinh "},{"id":"03836", "arr":[0,3,8,3,6], "name":"Nguyễn Thị Kiều Trang"},{"id":"04653", "arr":[0,4,6,5,3], "name":"Trương Cẩm Thi"},{"id":"05736", "arr":[0,5,7,3,6], "name":"Phạm Thái Sơn"},{"id":"20088", "arr":[2,0,0,8,8], "name":"Bùi Lê Minh Hoàng"},{"id":"05923", "arr":[0,5,9,2,3], "name":"Phan Minh Tiến"},{"id":"05658", "arr":[0,5,6,5,8], "name":"Mã Ngọc Hơn "},{"id":"20277", "arr":[2,0,2,7,7], "name":"Nguyễn Ngọc linh"},{"id":"10407", "arr":[1,0,4,0,7], "name":"Trần Bảo Quốc "},{"id":"06547", "arr":[0,6,5,4,7], "name":"Đặng Minh Phúc"},{"id":"02626", "arr":[0,2,6,2,6], "name":"Nguyễn Quốc Khánh"},{"id":"05386", "arr":[0,5,3,8,6], "name":"Trần Anh Duy "},{"id":"05244", "arr":[0,5,2,4,4], "name":"Trương Ngọc Trinh"},{"id":"02946", "arr":[0,2,9,4,6], "name":"Trương Ngọc Sơn"},{"id":"04134", "arr":[0,4,1,3,4], "name":"Đinh Thị Ngọc Thúy"},{"id":"05245", "arr":[0,5,2,4,5], "name":"Huỳnh Minh Tài"},{"id":"03516", "arr":[0,3,5,1,6], "name":"Lê Thị Hoàng Huyên"},{"id":"05623", "arr":[0,5,6,2,3], "name":"Nguyen Tan Vinh An "},{"id":"05275", "arr":[0,5,2,7,5], "name":"Lê Hoàng Hải My"},{"id":"05555", "arr":[0,5,5,5,5], "name":"Trần Hữu Cát Nhi"},{"id":"05224", "arr":[0,5,2,2,4], "name":"Nguyễn Kim Tuyền"},{"id":"03047", "arr":[0,3,0,4,7], "name":"Nguyễn Mạnh Tường"},{"id":"06134", "arr":[0,6,1,3,4], "name":"Vũ Mạnh Tường"},{"id":"04233", "arr":[0,4,2,3,3], "name":"NGUYỄN TẤN THÀNH "},{"id":"03989", "arr":[0,3,9,8,9], "name":"Do Nu Thai Ngan Ha"},{"id":"06587", "arr":[0,6,5,8,7], "name":"Đặng Thị Phương Thảo"},{"id":"06568", "arr":[0,6,5,6,8], "name":"Nguyễn Xuân Thi"},{"id":"05637", "arr":[0,5,6,3,7], "name":"Lữ Lợi Hưng"},{"id":"20229", "arr":[2,0,2,2,9], "name":"Cao Thủy Triều"},{"id":"03761", "arr":[0,3,7,6,1], "name":"Võ Minh Quân"},{"id":"03630", "arr":[0,3,6,3,0], "name":"Nguyễn Thị Thuỳ Linh"},{"id":"20199", "arr":[2,0,1,9,9], "name":"Lê Cảnh Trường Giang"},{"id":"05737", "arr":[0,5,7,3,7], "name":"Phan Vân Trường"},{"id":"20305", "arr":[2,0,3,0,5], "name":"PHẠM THIỀU QUANG THẮNG"},{"id":"06828", "arr":[0,6,8,2,8], "name":"Ngô Quốc Thuần"},{"id":"03863", "arr":[0,3,8,6,3], "name":"Lê Thị Thanh Xuân"},{"id":"05300", "arr":[0,5,3,0,0], "name":"Nguyễn Hoài Thương "},{"id":"06184", "arr":[0,6,1,8,4], "name":"Đào Đình Nhật"},{"id":"00314", "arr":[0,0,3,1,4], "name":"Huỳnh Thị Thanh Trà"},{"id":"05476", "arr":[0,5,4,7,6], "name":"Trần Thị Nguyên Hạnh"},{"id":"06238", "arr":[0,6,2,3,8], "name":"Phan Võ Duy Thành"},{"id":"04836", "arr":[0,4,8,3,6], "name":"Nguyễn Ngọc Linh"},{"id":"06865", "arr":[0,6,8,6,5], "name":"Tran Tuan Anh"},{"id":"00115", "arr":[0,0,1,1,5], "name":"Phạm Trần Quốc Đại"},{"id":"06119", "arr":[0,6,1,1,9], "name":"Nguyễn Thị Như Quỳnh"},{"id":"01653", "arr":[0,1,6,5,3], "name":"Nguyễn Quốc Nam"},{"id":"06848", "arr":[0,6,8,4,8], "name":"Nguyễn đăng minh Khiết "},{"id":"20103", "arr":[2,0,1,0,3], "name":"Đinh Thị Phụng Vy"},{"id":"04700", "arr":[0,4,7,0,0], "name":"Nguyễn Đăng Phương Minh"},{"id":"03818", "arr":[0,3,8,1,8], "name":"Đỗ Châu Nhi"},{"id":"08552", "arr":[0,8,5,5,2], "name":"Phạm Kế Độ"},{"id":"05648", "arr":[0,5,6,4,8], "name":"Huỳnh Thanh Hoàng"},{"id":"06098", "arr":[0,6,0,9,8], "name":"Vi Thanh Sơn"},{"id":"05726", "arr":[0,5,7,2,6], "name":"Huỳnh Như"},{"id":"13379", "arr":[1,3,3,7,9], "name":"Huỳnh Gia Thắng"},{"id":"04033", "arr":[0,4,0,3,3], "name":"Phạm Thị Phương"},{"id":"01629", "arr":[0,1,6,2,9], "name":"Đỗ Thị Mỹ Tiên"},{"id":"06773", "arr":[0,6,7,7,3], "name":"Trần Triệu Dương"},{"id":"04452", "arr":[0,4,4,5,2], "name":"Nguyễn Thị Vân Anh"},{"id":"02707", "arr":[0,2,7,0,7], "name":"Dương Đình Phát"},{"id":"06910", "arr":[0,6,9,1,0], "name":"Phan Đức Tâm"},{"id":"06632", "arr":[0,6,6,3,2], "name":"Lâm Bửu Tuấn Phát"},{"id":"06775", "arr":[0,6,7,7,5], "name":"Tư"},{"id":"06537", "arr":[0,6,5,3,7], "name":"Nguyễn Thị Thanh Ngàn"},{"id":"01417", "arr":[0,1,4,1,7], "name":"Trần Bảo Quốc "},{"id":"03672", "arr":[0,3,6,7,2], "name":"Nguyễn Lê Thanh Hoài"},{"id":"06845", "arr":[0,6,8,4,5], "name":"Trần Thị Quỳnh Hoa"},{"id":"05929", "arr":[0,5,9,2,9], "name":"TRẦN THỊ THẢO HIỀN "},{"id":"20308", "arr":[2,0,3,0,8], "name":"Thiều Hoàng Trúc Chi"},{"id":"04969", "arr":[0,4,9,6,9], "name":"Nguyễn Ngọc Phương Quỳnh"},{"id":"06495", "arr":[0,6,4,9,5], "name":"Tạ Quang Hải"},{"id":"05717", "arr":[0,5,7,1,7], "name":"Phan Tiến Dũng"},{"id":"06322", "arr":[0,6,3,2,2], "name":"Trần Võ An Khang "},{"id":"04323", "arr":[0,4,3,2,3], "name":"Trần Thị Kim Ngân"},{"id":"05394", "arr":[0,5,3,9,4], "name":"Ngô Thị Hoàng Oanh"},{"id":"00071", "arr":[0,0,0,7,1], "name":"Nguyễn Thị Nhâm Thắm"},{"id":"06262", "arr":[0,6,2,6,2], "name":"Đặng Ngọc Mai Phương"},{"id":"03165", "arr":[0,3,1,6,5], "name":"Dương Trường Thịnh"},{"id":"07364", "arr":[0,7,3,6,4], "name":"NGUYỄN PHƯỚC TÀI"},{"id":"06146", "arr":[0,6,1,4,6], "name":"Trương Đại Vĩ"},{"id":"04835", "arr":[0,4,8,3,5], "name":"Trương Thị Thu Uyên"},{"id":"03793", "arr":[0,3,7,9,3], "name":"Võ Đỗ Hải Quỳnh"},{"id":"20449", "arr":[2,0,4,4,9], "name":"Nguyễn Hoàng Vũ"},{"id":"06195", "arr":[0,6,1,9,5], "name":"Trần Quốc Minh Nguyên"},{"id":"05027", "arr":[0,5,0,2,7], "name":"Nguyễn Thị Thu Thảo"},{"id":"03616", "arr":[0,3,6,1,6], "name":"Huỳnh Công Sơn"},{"id":"06938", "arr":[0,6,9,3,8], "name":"Nguyễn Trúc Sim Mi"},{"id":"01766", "arr":[0,1,7,6,6], "name":"Nguyễn Thị Đào "},{"id":"03530", "arr":[0,3,5,3,0], "name":"Nguyễn Phú Ngọc Anh"},{"id":"02834", "arr":[0,2,8,3,4], "name":"Đặng Phú Cường"},{"id":"05145", "arr":[0,5,1,4,5], "name":"Trần minh quân"},{"id":"00013", "arr":[0,0,0,1,3], "name":"NGUYỄN NGỌC DUYÊN"},{"id":"03061", "arr":[0,3,0,6,1], "name":"Nguyễn Minh Hoàng"},{"id":"20148", "arr":[2,0,1,4,8], "name":"Bùi Thanh Thảo"},{"id":"06950", "arr":[0,6,9,5,0], "name":"Phạm Hoài Vũ"},{"id":"06352", "arr":[0,6,3,5,2], "name":"Trần thị thiên trang"},{"id":"20268", "arr":[2,0,2,6,8], "name":"Tô Thị Mỹ Duyên"},{"id":"03517", "arr":[0,3,5,1,7], "name":"Bùi Thị Mỹ Trinh"},{"id":"06833", "arr":[0,6,8,3,3], "name":"Trần Thị Thanh Thảo"},{"id":"06131", "arr":[0,6,1,3,1], "name":"LÊ THỊ YẾN TRÂM"},{"id":"06554", "arr":[0,6,5,5,4], "name":"Trần Quốc Toàn"},{"id":"05142", "arr":[0,5,1,4,2], "name":"Hà Minh Quân"},{"id":"06637", "arr":[0,6,6,3,7], "name":"Nguyễn Thị Minh Phuơng"},{"id":"04263", "arr":[0,4,2,6,3], "name":"Hoàng Minh Phương "},{"id":"20400", "arr":[2,0,4,0,0], "name":"Nguyễn Phượng Thảo"},{"id":"04890", "arr":[0,4,8,9,0], "name":"Lê Nguyên Minh"},{"id":"05707", "arr":[0,5,7,0,7], "name":"Ngô Minh Hiệu"},{"id":"06353", "arr":[0,6,3,5,3], "name":"Nguyễn Vũ Hữu Luân"},{"id":"20260", "arr":[2,0,2,6,0], "name":"Lê Phương Thảo"},{"id":"05716", "arr":[0,5,7,1,6], "name":"Ngô Thị Thảo Trinh"},{"id":"05706", "arr":[0,5,7,0,6], "name":"Lê hà giang"},{"id":"20193", "arr":[2,0,1,9,3], "name":"Nguyễn Huy Hoàng"},{"id":"06859", "arr":[0,6,8,5,9], "name":"Nguyễn Huỳnh Tuyết Như "},{"id":"06831", "arr":[0,6,8,3,1], "name":"Nguyễn Ngọc Phương Dung"},{"id":"06885", "arr":[0,6,8,8,5], "name":"Trần Thị Thu"},{"id":"06286", "arr":[0,6,2,8,6], "name":"Trần Xuân Trí"},{"id":"00010", "arr":[0,0,0,1,0], "name":"Nguyễn Viết Huy"},{"id":"04181", "arr":[0,4,1,8,1], "name":"Nguyễn Hà My"},{"id":"06827", "arr":[0,6,8,2,7], "name":"Đặng Anh Thư"},{"id":"03852", "arr":[0,3,8,5,2], "name":"Nguyễn Thị Ngọc Sang"},{"id":"03860", "arr":[0,3,8,6,0], "name":"Nguyễn Đỗ Phương Uyên"},{"id":"06189", "arr":[0,6,1,8,9], "name":"Đoàn Nhật Trinh"},{"id":"03860", "arr":[0,3,8,6,0], "name":"Nguyễn Đỗ Phương Uyên"},{"id":"20246", "arr":[2,0,2,4,6], "name":"Võ Thị Hưng Uyên"},{"id":"03449", "arr":[0,3,4,4,9], "name":"Đàm Tâm Như"},{"id":"20028", "arr":[2,0,0,2,8], "name":"Nguyễn Thị Thu Dương"},{"id":"05662", "arr":[0,5,6,6,2], "name":"Nguyễn Hoàng Vũ"},{"id":"00128", "arr":[0,0,1,2,8], "name":"Lai Thanh Sơn"},{"id":"04222", "arr":[0,4,2,2,2], "name":"Nguyễn Thị Thuỳ Trang"},{"id":"04811", "arr":[0,4,8,1,1], "name":"Phan Thành Nam"},{"id":"05377", "arr":[0,5,3,7,7], "name":"Phạm Ngân Tử"},{"id":"04651", "arr":[0,4,6,5,1], "name":"Đặng Hải Đăng"},{"id":"06546", "arr":[0,6,5,4,6], "name":"Đỗ thị mùi"},{"id":"00118", "arr":[0,0,1,1,8], "name":"Trần Ngọc Hinh"},{"id":"06286", "arr":[0,6,2,8,6], "name":"Trần Xuân Trí"},{"id":"05144", "arr":[0,5,1,4,4], "name":"Vũ bùi thuý nhi"},{"id":"06876", "arr":[0,6,8,7,6], "name":"Trần Nhật Tân"},{"id":"05992", "arr":[0,5,9,9,2], "name":"NGUYỄN THUỴ NGUYỆT ANH  "},{"id":"06228", "arr":[0,6,2,2,8], "name":"Bùi Thị Thuý Phượng"},{"id":"20110", "arr":[2,0,1,1,0], "name":"Nguyễn hồng thạch"},{"id":"05957", "arr":[0,5,9,5,7], "name":"Nguyễn Thị Thuý Hồng"},{"id":"05426", "arr":[0,5,4,2,6], "name":"Phạm Đình Phong"},{"id":"03113", "arr":[0,3,1,1,3], "name":"Trần Thị Yến Phượng"},{"id":"06769", "arr":[0,6,7,6,9], "name":"Võ Thị Bảo Châm"},{"id":"05917", "arr":[0,5,9,1,7], "name":"PHÙNG VỊNH NGHI"},{"id":"01442", "arr":[0,1,4,4,2], "name":"Nguyễn Thị Mai Lý"},{"id":"04660", "arr":[0,4,6,6,0], "name":"Phan Trung Hiếu"},{"id":"02923", "arr":[0,2,9,2,3], "name":"Nguyễn Phú Hải Đăng "},{"id":"00117", "arr":[0,0,1,1,7], "name":"Võ Hồ Thiên Vũ"},{"id":"06781", "arr":[0,6,7,8,1], "name":"Lê Hà Thịnh Sang"},{"id":"20084", "arr":[2,0,0,8,4], "name":"Lê Thị Mai"},{"id":"04586", "arr":[0,4,5,8,6], "name":"Trương Lai Phúc"},{"id":"06227", "arr":[0,6,2,2,7], "name":"Nguyễn Đào Trọng Trí"},{"id":"06189", "arr":[0,6,1,8,9], "name":"Đoàn Nhật Trịn"},{"id":"00521", "arr":[0,0,5,2,1], "name":"Nguyễn Viết Duy"},{"id":"05100", "arr":[0,5,1,0,0], "name":"Chu Vũ Anh Thy"},{"id":"01582", "arr":[0,1,5,8,2], "name":"Cao Nhân Hảo"},{"id":"00134", "arr":[0,0,1,3,4], "name":"Phan Văn Trưng"},{"id":"20156", "arr":[2,0,1,5,6], "name":"Đặng Xuân Thọ "},{"id":"04262", "arr":[0,4,2,6,2], "name":"Phạm Thị Ly"},{"id":"05056", "arr":[0,5,0,5,6], "name":"Nguyễn Lê Minh Quyên"},{"id":"06112", "arr":[0,6,1,1,2], "name":"Nguyễn Thị Hồng Phấn"},{"id":"06540", "arr":[0,6,5,4,0], "name":"ĐẶNG THỊ TRÀ MY"},{"id":"05582", "arr":[0,5,5,8,2], "name":"Hồ Thị Thanh Trúc"},{"id":"06781", "arr":[0,6,7,8,1], "name":"Lê Hà Thịnh Sang"},{"id":"04709", "arr":[0,4,7,0,9], "name":"Nguyễn Ngọc Châu "},{"id":"04006", "arr":[0,4,0,0,6], "name":"Nguyễn ngọc liên"},{"id":"04546", "arr":[0,4,5,4,6], "name":"Thôi Vĩnh Quyền "},{"id":"04837", "arr":[0,4,8,3,7], "name":"Đỗ thị thu thảo"},{"id":"03920", "arr":[0,3,9,2,0], "name":"Phạm Khắc Huy"},{"id":"04713", "arr":[0,4,7,1,3], "name":"Nguyễn Thị Thanh Nhàn"},{"id":"03675", "arr":[0,3,6,7,5], "name":"Hồ Thị Nguyệt Ánh"},{"id":"05120", "arr":[0,5,1,2,0], "name":"Nguyễn Thế Vinh"},{"id":"03570", "arr":[0,3,5,7,0], "name":"Châu Phú Thịnh"},{"id":"06409", "arr":[0,6,4,0,9], "name":"Tăng Nhật Trường "},{"id":"01446", "arr":[0,1,4,4,6], "name":"Nguyễn Hùng Nhân"},{"id":"05423", "arr":[0,5,4,2,3], "name":"Trương Thị Tố Yên "},{"id":"05421", "arr":[0,5,4,2,1], "name":"Nguyễn Võ Thảo Sương"},{"id":"02933", "arr":[0,2,9,3,3], "name":"Đặng Nguyễn Minh Hoàng"},{"id":"03565", "arr":[0,3,5,6,5], "name":"Ka Hoàng Khánh Thuận"},{"id":"06273", "arr":[0,6,2,7,3], "name":"PHẠM THỊ MINH ANH"},{"id":"03779", "arr":[0,3,7,7,9], "name":"Bùi Võ Trường Thi"},{"id":"06266", "arr":[0,6,2,6,6], "name":"Đoàn Nguyễn Minh Anh"},{"id":"06494", "arr":[0,6,4,9,4], "name":"Bui Thi Kim Quý "},{"id":"20436", "arr":[2,0,4,3,6], "name":"Hoàng Thu Trang"},{"id":"06788", "arr":[0,6,7,8,8], "name":"Nguyễn Phan Diệu Uyên "},{"id":"04373", "arr":[0,4,3,7,3], "name":"Đỗ Thị Thanh Trang"},{"id":"03377", "arr":[0,3,3,7,7], "name":"Nguyễn Lê Anh Thư"},{"id":"04426", "arr":[0,4,4,2,6], "name":"Nguyễn Mình Tâm"},{"id":"06410", "arr":[0,6,4,1,0], "name":"Vương Thục Oanh"},{"id":"05908", "arr":[0,5,9,0,8], "name":"Nguyễn Thị Thanh Thuỷ"},{"id":"04807", "arr":[0,4,8,0,7], "name":"Nguyễn Thị Thu Hiền"},{"id":"00126", "arr":[0,0,1,2,6], "name":"Dương Bình Nguyên "},{"id":"04462", "arr":[0,4,4,6,2], "name":"Nguyễn Nhị Nguyên Thư"},{"id":"05380", "arr":[0,5,3,8,0], "name":"Nguyễn Thị Tường Vi"},{"id":"05713", "arr":[0,5,7,1,3], "name":"Hà Thị Thu"},{"id":"04328", "arr":[0,4,3,2,8], "name":"Nguyễn Thị Quỳnh Nhi"},{"id":"03084", "arr":[0,3,0,8,4], "name":"Phạm Thuý Hằng"},{"id":"05101", "arr":[0,5,1,0,1], "name":"Nguyễn Vĩnh Khiêm"},{"id":"00116", "arr":[0,0,1,1,6], "name":"Trương Đình Phước Long"},{"id":"00565", "arr":[0,0,5,6,5], "name":"Nguyễn Văn Sơn"},{"id":"20364", "arr":[2,0,3,6,4], "name":"Nguyễn Hoàng Trọng Hiếu"},{"id":"05166", "arr":[0,5,1,6,6], "name":"Nguyễn Hồ Thạch"},{"id":"04793", "arr":[0,4,7,9,3], "name":"Nguyễn Thanh Nam"},{"id":"05857", "arr":[0,5,8,5,7], "name":"Lê Văn Khánh "},{"id":"02828", "arr":[0,2,8,2,8], "name":"Giang Ngọc Huỳnh Hương "},{"id":"05326", "arr":[0,5,3,2,6], "name":"GIANG QUOC DUNG "},{"id":"05549", "arr":[0,5,5,4,9], "name":"Nguyễn Thị Thu Trang"},{"id":"04903", "arr":[0,4,9,0,3], "name":"Vũ Huy Quang "},{"id":"04545", "arr":[0,4,5,4,5], "name":"Dương Cẩm Tú"},{"id":"09427", "arr":[0,9,4,2,7], "name":"Trần Lý Hùng"},{"id":"04304", "arr":[0,4,3,0,4], "name":"Nguyễn Lê Nhân"},{"id":"05370", "arr":[0,5,3,7,0], "name":"Vũ Thị Thuỳ Linh"},{"id":"05379", "arr":[0,5,3,7,9], "name":"MOHAMED ALY"},{"id":"06113", "arr":[0,6,1,1,3], "name":"Đoàn Thị Thu Hường "},{"id":"05422", "arr":[0,5,4,2,2], "name":"Nguyễn Thành Lộc"},{"id":"05707", "arr":[0,5,7,0,7], "name":"Ngô Minh Hiệu"},{"id":"03186", "arr":[0,3,1,8,6], "name":"Trần Dương Kim Ngân"},{"id":"06932", "arr":[0,6,9,3,2], "name":"Nguyễn Minh Triều"},{"id":"02409", "arr":[0,2,4,0,9], "name":"Nguyễn Minh Nguyên"},{"id":"06581", "arr":[0,6,5,8,1], "name":"Vũ Phúc Đăng"},{"id":"06849", "arr":[0,6,8,4,9], "name":"Võ Thị Quyển Nhi"},{"id":"04594", "arr":[0,4,5,9,4], "name":"Nguyễn Quốc Đạt"},{"id":"06525", "arr":[0,6,5,2,5], "name":"Trang Ngọc Yến"},{"id":"03599", "arr":[0,3,5,9,9], "name":"Trương Hiền Đức"},{"id":"04948", "arr":[0,4,9,4,8], "name":"Võ Gia Huy"},{"id":"00009", "arr":[0,0,0,0,9], "name":"nguyễn kim ngọc"},{"id":"04794", "arr":[0,4,7,9,4], "name":"Trần thị thu hà"},{"id":"05960", "arr":[0,5,9,6,0], "name":"Huỳnh Kim Tuyến"},{"id":"03402", "arr":[0,3,4,0,2], "name":"Lê Thị Ngọc Mai"},{"id":"00164", "arr":[0,0,1,6,4], "name":"Lê Đức Anh"},{"id":"00133", "arr":[0,0,1,3,3], "name":"Nguyễn Thị Diễm Trinh"},{"id":"04453", "arr":[0,4,4,5,3], "name":"Trần Ngọc Vân Anh"},{"id":"05336", "arr":[0,5,3,3,6], "name":"Nguyễn Thị Ngọc Quyền"},{"id":"04881", "arr":[0,4,8,8,1], "name":"Nguyễn Thiện Vương Duy"},{"id":"03948", "arr":[0,3,9,4,8], "name":"Nguyễn Việt Dinh"},{"id":"00158", "arr":[0,0,1,5,8], "name":"Thạch hoàng phuóng"},{"id":"00123", "arr":[0,0,1,2,3], "name":"Nguyễn Ngọc Quý"},{"id":"04137", "arr":[0,4,1,3,7], "name":"Nguyễn Thị Bé Thuỳ"},{"id":"06826", "arr":[0,6,8,2,6], "name":"Thái Trần Đức Anh"},{"id":"06671", "arr":[0,6,6,7,1], "name":"Võ Thị Thanh Xuân"},{"id":"06007", "arr":[0,6,0,0,7], "name":"Nguyễn Ngọc Trúc Linh"},{"id":"06495", "arr":[0,6,4,9,5], "name":"Tạ Quang Hải"},{"id":"03720", "arr":[0,3,7,2,0], "name":"Trần Phước Sang"},{"id":"03374", "arr":[0,3,3,7,4], "name":"Hồ Ngọc Tường Vi"},{"id":"20370", "arr":[2,0,3,7,0], "name":"Đồng Thị Ngọc Ân"},{"id":"06008", "arr":[0,6,0,0,8], "name":"Phạm Văn Mỹ "},{"id":"04495", "arr":[0,4,4,9,5], "name":"Trần Phạm Hưng"},{"id":"04075", "arr":[0,4,0,7,5], "name":"Trần Nguyễn Kim Thy"},{"id":"04272", "arr":[0,4,2,7,2], "name":"Ung Sơn Bách"},{"id":"05034", "arr":[0,5,0,3,4], "name":"Phạm Thị Thu Hương"},{"id":"20151", "arr":[2,0,1,5,1], "name":"DƯƠNG BẢO KHÁNH"},{"id":"05644", "arr":[0,5,6,4,4], "name":"Lê Hoàng Quang"},{"id":"06651", "arr":[0,6,6,5,1], "name":"Phạm Ngọc Lễ"},{"id":"04963", "arr":[0,4,9,6,3], "name":"Trà Bảo Long"},{"id":"03966", "arr":[0,3,9,6,6], "name":"Nhâm Kiến Đông"},{"id":"06832", "arr":[0,6,8,3,2], "name":"PHẠM THỊ QUỲNH ANH "},{"id":"03987", "arr":[0,3,9,8,7], "name":"Bùi Minh Chí"},{"id":"02761", "arr":[0,2,7,6,1], "name":"Lê Nguyễn Quỳnh Như"},{"id":"06261", "arr":[0,6,2,6,1], "name":"Hồ Trần Ngọc Thanh"},{"id":"04400", "arr":[0,4,4,0,0], "name":"NGuyen Thi Nguyet"},{"id":"04656", "arr":[0,4,6,5,6], "name":"Trương Thị Diễm Thuý"},{"id":"05028", "arr":[0,5,0,2,8], "name":"Nguyễn Vương Minh Hằng"},{"id":"05582", "arr":[0,5,5,8,2], "name":"Hồ Thị Thanh Trúc"},{"id":"00143", "arr":[0,0,1,4,3], "name":"Trần Quốc Hải Long"},{"id":"05724", "arr":[0,5,7,2,4], "name":"Huỳnh Lê Quang Quân"},{"id":"05184", "arr":[0,5,1,8,4], "name":"Nguyễn Hồng Bảo"},{"id":"06340", "arr":[0,6,3,4,0], "name":"Phạm Tấn Phát"},{"id":"05351", "arr":[0,5,3,5,1], "name":"Nguyễn Thị Phương Thảo"},{"id":"03559", "arr":[0,3,5,5,9], "name":"Đoàn Trọng Nhân"},{"id":"05640", "arr":[0,5,6,4,0], "name":"Đoàn Thị Mỹ Linh"},{"id":"04528", "arr":[0,4,5,2,8], "name":"Trần Ngọc Ấn"},{"id":"05534", "arr":[0,5,5,3,4], "name":"Chu Anh Bảo"},{"id":"03990", "arr":[0,3,9,9,0], "name":"Nguyễn Thị Anh Đào"},{"id":"05496", "arr":[0,5,4,9,6], "name":"Ha Le Dang Khoa"},{"id":"20155", "arr":[2,0,1,5,5], "name":"Nguyễn Thị Mai Phụng"},{"id":"05449", "arr":[0,5,4,4,9], "name":"Nguyễn Phước Tiến"},{"id":"01917", "arr":[0,1,9,1,7], "name":"Trương Thị Minh Huệ"},{"id":"03693", "arr":[0,3,6,9,3], "name":"Trần Đình Đại"},{"id":"04934", "arr":[0,4,9,3,4], "name":"Nguyễn Thị Tam"},{"id":"06804", "arr":[0,6,8,0,4], "name":"Nguyễn Quang Trạng"},{"id":"04916", "arr":[0,4,9,1,6], "name":"Lê Thị Thảo Uyên"},{"id":"04431", "arr":[0,4,4,3,1], "name":"Phạm Thị Nhã Hạnh"},{"id":"03691", "arr":[0,3,6,9,1], "name":"Nguyễn Thị Anh Thư"},{"id":"00033", "arr":[0,0,0,3,3], "name":"Huỳnh Công Anh Duy"},{"id":"03678", "arr":[0,3,6,7,8], "name":"Nguyễn Huy Hoàng"},{"id":"05143", "arr":[0,5,1,4,3], "name":"Võ Huỳnh Kim Ngân"},{"id":"05990", "arr":[0,5,9,9,0], "name":"Trần khánh an"},{"id":"03006", "arr":[0,3,0,0,6], "name":"Nguyễn Đình Nghĩa "},{"id":"06034", "arr":[0,6,0,3,4], "name":"Châu Thị Kim Trang"},{"id":"06803", "arr":[0,6,8,0,3], "name":"Võ Hồng Chiến Thắng"},{"id":"05493", "arr":[0,5,4,9,3], "name":"Nguyễn Thị Lan Anh"},{"id":"04137", "arr":[0,4,1,3,7], "name":"Nguyễn Thị Bé Thuỳ"},{"id":"05457", "arr":[0,5,4,5,7], "name":"Hồ phương vy"},{"id":"20228", "arr":[2,0,2,2,8], "name":"nguyễn thị Hồng Lam"},{"id":"05913", "arr":[0,5,9,1,3], "name":"Đặng Nguyễn Hoàng Vy"},{"id":"06935", "arr":[0,6,9,3,5], "name":"Trần Võ Minh Uyên"},{"id":"03449", "arr":[0,3,4,4,9], "name":"Đàm Tâm Như"},{"id":"05989", "arr":[0,5,9,8,9], "name":"Lê Phước Thịnh "},{"id":"03880", "arr":[0,3,8,8,0], "name":"Huỳnh Tuấn Hoà"},{"id":"05473", "arr":[0,5,4,7,3], "name":"Nguyễn Thị Minh Tâm"},{"id":"00150", "arr":[0,0,1,5,0], "name":"Nguyễn Hoàng Tuấn"},{"id":"03856", "arr":[0,3,8,5,6], "name":"Trần Thị Bạch Tuyết "},{"id":"05642", "arr":[0,5,6,4,2], "name":"Võ Minh Khai"},{"id":"05146", "arr":[0,5,1,4,6], "name":"Nguyễn Thanh Trà My"},{"id":"00166", "arr":[0,0,1,6,6], "name":"Nguyễn Tăng Huy"},{"id":"03148", "arr":[0,3,1,4,8], "name":"Vũ Hữu Bảo Lâm"},{"id":"04427", "arr":[0,4,4,2,7], "name":"Lưu Chí Hồng"},{"id":"06003", "arr":[0,6,0,0,3], "name":"Huỳnh Quang Thế Kiệt"},{"id":"20306", "arr":[2,0,3,0,6], "name":"Trần Khánh An"},{"id":"04588", "arr":[0,4,5,8,8], "name":"Trần Nữ Phương Nhi"},{"id":"05993", "arr":[0,5,9,9,3], "name":"Nguyễn Vũ Thùy Anh"},{"id":"20138", "arr":[2,0,1,3,8], "name":"NGUYỄN VĂN HƯNG"},{"id":"20387", "arr":[2,0,3,8,7], "name":"Huỳnh Anh Muội"},{"id":"05984", "arr":[0,5,9,8,4], "name":"Nguyễn Ngọc Anh Thi "},{"id":"03476", "arr":[0,3,4,7,6], "name":"Phan Minh Thọ"},{"id":"20377", "arr":[2,0,3,7,7], "name":"Bùi Khoa Nam"},{"id":"05808", "arr":[0,5,8,0,8], "name":"Nguyễn Thị Thuỷ Tiên"},{"id":"03881", "arr":[0,3,8,8,1], "name":"Trần Sơn hà"},{"id":"03450", "arr":[0,3,4,5,0], "name":"Lê Thanh Cường "},{"id":"05147", "arr":[0,5,1,4,7], "name":"Phạm Thị Tuyết Nhung"},{"id":"04398", "arr":[0,4,3,9,8], "name":"Nguyen dạ minh châu"},{"id":"20321", "arr":[2,0,3,2,1], "name":"Hoàng Ngọc Nhi"},{"id":"04715", "arr":[0,4,7,1,5], "name":"NGUYỄN BÙI THỦY TIÊN"},{"id":"03717", "arr":[0,3,7,1,7], "name":"Bùi Quốc Thiện Bảo Long"},{"id":"00014", "arr":[0,0,0,1,4], "name":"Phạm Tuấn Tài"},{"id":"03382", "arr":[0,3,3,8,2], "name":"Nguyễn Hoài Tâm"},{"id":"03313", "arr":[0,3,3,1,3], "name":"Đặng Tuấn Kiên"},{"id":"01607", "arr":[0,1,6,0,7], "name":"Võ Thị Thanh Tú"},{"id":"05540", "arr":[0,5,5,4,0], "name":"TRẦN THỊ QUẾ NƯƠNG"},{"id":"05633", "arr":[0,5,6,3,3], "name":"Nguyễn Thị Tú Anh"},{"id":"05526", "arr":[0,5,5,2,6], "name":"Vũ Thị Ngọc Mai"},{"id":"06706", "arr":[0,6,7,0,6], "name":"Nguyễn Quốc Thịnh "},{"id":"05661", "arr":[0,5,6,6,1], "name":"Trần Lê Minh Nhựt"},{"id":"05531", "arr":[0,5,5,3,1], "name":"Nguyễn Thị Thu Hiền"},{"id":"04558", "arr":[0,4,5,5,8], "name":"LƯU HỒNG PHONG"},{"id":"04306", "arr":[0,4,3,0,6], "name":"Phan Hoàng Anh Thư"},{"id":"00124", "arr":[0,0,1,2,4], "name":"Nguyễn Thành Nhân "},{"id":"00520", "arr":[0,0,5,2,0], "name":"Tăng Thị Mai Xuân"},{"id":"03988", "arr":[0,3,9,8,8], "name":"Lê Thị Thảo Hiền"},{"id":"05030", "arr":[0,5,0,3,0], "name":"Nguyễn Trần Ngọc Nhi "},{"id":"04036", "arr":[0,4,0,3,6], "name":"Nguyễn Phạm Hạnh Huyền"},{"id":"00156", "arr":[0,0,1,5,6], "name":"Nguyễn Minh Toàn"},{"id":"05382", "arr":[0,5,3,8,2], "name":"Trần Hoàng Tấn Phát"},{"id":"05025", "arr":[0,5,0,2,5], "name":"Đinh Hoàng Phúc"},{"id":"02619", "arr":[0,2,6,1,9], "name":"Nguyễn Hoàng Nhân"},{"id":"06331", "arr":[0,6,3,3,1], "name":"Nguyễn Hữu Tria"},{"id":"06693", "arr":[0,6,6,9,3], "name":"Đặng Như Huỳnh"},{"id":"04052", "arr":[0,4,0,5,2], "name":"Nguyễn Anh Trình"},{"id":"06291", "arr":[0,6,2,9,1], "name":"Nguyễn Thị Thanh Thuỷ"},{"id":"20026", "arr":[2,0,0,2,6], "name":"Đinh Hoàng Nam"},{"id":"20365", "arr":[2,0,3,6,5], "name":"Phạm Việt Trâm"},{"id":"06824", "arr":[0,6,8,2,4], "name":"Nguyễn Hồ Thiên Thanh"},{"id":"06886", "arr":[0,6,8,8,6], "name":"Lê Mai Anh"},{"id":"04533", "arr":[0,4,5,3,3], "name":"Trần Ngọc Thuỳ Trang"},{"id":"06303", "arr":[0,6,3,0,3], "name":"Lê Đăng Thịnh"},{"id":"01419", "arr":[0,1,4,1,9], "name":"Hoàng Ngọc Bảo Nghi"},{"id":"05104", "arr":[0,5,1,0,4], "name":"Lê Hoàng Tuyết Phương"},{"id":"06114", "arr":[0,6,1,1,4], "name":"Trịnh Thị Thu Hà "},{"id":"05529", "arr":[0,5,5,2,9], "name":"Nguyễn Thị Quỳnh Anh"},{"id":"06153", "arr":[0,6,1,5,3], "name":"Đoàn Minh Lộc"},{"id":"06716", "arr":[0,6,7,1,6], "name":"Lại Minh Trung"},{"id":"06792", "arr":[0,6,7,9,2], "name":"Bùi Huyền Trang"},{"id":"04271", "arr":[0,4,2,7,1], "name":"Bùi Thị Loan"},{"id":"04013", "arr":[0,4,0,1,3], "name":"Huỳnh Cẩm Pháy"},{"id":"01451", "arr":[0,1,4,5,1], "name":"Nguyễn Thành Sơn"},{"id":"04330", "arr":[0,4,3,3,0], "name":"Hồ Hồng Ân"},{"id":"04579", "arr":[0,4,5,7,9], "name":"TRẦN CẢNH TRÁN"},{"id":"05809", "arr":[0,5,8,0,9], "name":"Lưu Tuấn Kiệt"},{"id":"04357", "arr":[0,4,3,5,7], "name":"Bùi Huỳnh Thùy Trang"},{"id":"04584", "arr":[0,4,5,8,4], "name":"Đặng Trường Phước "},{"id":"00125", "arr":[0,0,1,2,5], "name":"Phạm Bá Thảo"},{"id":"05530", "arr":[0,5,5,3,0], "name":"Huỳnh Lâm Quốc Việt"},{"id":"04084", "arr":[0,4,0,8,4], "name":"Nguyễn Hoài Vũ"},{"id":"06896", "arr":[0,6,8,9,6], "name":"Nguyễn Thị Huyền Trang"},{"id":"04648", "arr":[0,4,6,4,8], "name":"Hà Huệ Hân"},{"id":"05383", "arr":[0,5,3,8,3], "name":"Lê Đức Duy"},{"id":"00143", "arr":[0,0,1,4,3], "name":"Trần Quốc Hải Long"},{"id":"06539", "arr":[0,6,5,3,9], "name":"Phạm Nguyễn Ý Duyên"},{"id":"06846", "arr":[0,6,8,4,6], "name":"Đỗ Đạt Nguyên"}];
    document.getElementById("namebox").textContent = "Là Ninja may mắn nào đây?";

    let e_no = employees.length;
    let emp= employees[Math.floor(Math.random() * e_no)];
    console.log(emp);
    
    for (let d_no = 0; d_no <= doors.length - 1; d_no++) {
      const door = doors[d_no];
      if (firstInit) {
        door.dataset.spinned = "0";
      } else if (door.dataset.spinned === "1") {
        return;
      }

      const boxes = door.querySelector(".boxes");
      const boxesClone = boxes.cloneNode(false);
      
      const pool = ["🗡"];
      if (!firstInit) {
        const arr = [];
        for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
          arr.push(...items);
        }
        pool.push(...shuffle(arr));
        console.log(pool);


        boxesClone.addEventListener(
          "transitionstart",
          function () {
            door.dataset.spinned = "1";
            this.querySelectorAll(".box").forEach((box) => {
              box.style.filter = "blur(1px)";
            });
          },
          { once: true }
        );

        boxesClone.addEventListener(
          "transitionend",
          async function () {
            this.querySelectorAll(".box").forEach((box, index) => {
              box.style.filter = "blur(0)";
              box.textContent = emp.arr[d_no];
              if (index > 0) this.removeChild(box);
            });
            await new Promise((resolve) => setTimeout(resolve, duration * 5000));
            document.getElementById("namebox").textContent = emp.name;
          },
          { once: true }
        );
      }
      // console.log(pool);

      for (let i = pool.length - 1; i >= 0; i--) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = door.clientWidth + "px";
        box.style.height = door.clientHeight + "px";
        box.textContent = pool[i];
        boxesClone.appendChild(box);
      }
      //box.textContent = pool[i];


      boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
      boxesClone.style.transform = `translateY(-${
        door.clientHeight * (pool.length - 1)
      }px)`;
      door.replaceChild(boxesClone, boxes);
      console.log(boxesClone);
    }
  }

  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }

  init();
})();
