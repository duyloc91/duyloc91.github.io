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
    const employees = [{"id":"00414", "name":"Võ Thanh Diệu", "arr":[0, 0, 4, 1, 4]},{"id":"00243", "name":"Nguyễn Đức Lâm", "arr":[0, 0, 2, 4, 3]},{"id":"02403", "name":"Lý Thanh Hương", "arr":[0, 2, 4, 0, 3]},{"id":"02622", "name":"Nguyễn Thị Mỹ Trinh", "arr":[0, 2, 6, 2, 2]},{"id":"03225", "name":"Hà Trọng Nhân", "arr":[0, 3, 2, 2, 5]},{"id":"04991", "name":"Nguyễn Thị Tuyết Kiều", "arr":[0, 4, 9, 9, 1]},{"id":"05854", "name":"Nguyễn Thị Thanh Thảo", "arr":[0, 5, 8, 5, 4]},{"id":"05855", "name":"Lê Văn Tú", "arr":[0, 5, 8, 5, 5]},{"id":"05850", "name":"Trương Thị Lâm", "arr":[0, 5, 8, 5, 0]},{"id":"06158", "name":"Nguyễn Nhất Duy", "arr":[0, 6, 1, 5, 8]},{"id":"01803", "name":"Nguyễn Văn Khâm", "arr":[0, 1, 8, 0, 3]},{"id":"01056", "name":"Trần Vi Duy Nhơn", "arr":[0, 1, 0, 5, 6]},{"id":"01592", "name":"Nguyễn Thị Minh Hằng", "arr":[0, 1, 5, 9, 2]},{"id":"01054", "name":"Võ Hoàng Giang", "arr":[0, 1, 0, 5, 4]},{"id":"03303", "name":"Cao Hữu Phúc", "arr":[0, 3, 3, 0, 3]},{"id":"03342", "name":"Nguyễn Thị Mỵ", "arr":[0, 3, 3, 4, 2]},{"id":"03659", "name":"Trần Quốc Toàn", "arr":[0, 3, 6, 5, 9]},{"id":"03953", "name":"Lê Văn Phương", "arr":[0, 3, 9, 5, 3]},{"id":"05010", "name":"Dương Vũ Huấn", "arr":[0, 5, 0, 1, 0]},{"id":"05306", "name":"Huỳnh Nhật Quang", "arr":[0, 5, 3, 0, 6]},{"id":"05875", "name":"Nguyễn Công Hậu", "arr":[0, 5, 8, 7, 5]},{"id":"00319", "name":"Nguyễn Thị Thủy", "arr":[0, 0, 3, 1, 9]},{"id":"01938", "name":"Đỗ Quang Hưng", "arr":[0, 1, 9, 3, 8]},{"id":"02617", "name":"Đỗ Tiểu Bảo", "arr":[0, 2, 6, 1, 7]},{"id":"03404", "name":"Hoàng Anh Đức", "arr":[0, 3, 4, 0, 4]},{"id":"03649", "name":"Hoàng Văn Nam", "arr":[0, 3, 6, 4, 9]},{"id":"04254", "name":"Bùi Trung Sỹ", "arr":[0, 4, 2, 5, 4]},{"id":"04780", "name":"Nguyễn Hoàng Giang", "arr":[0, 4, 7, 8, 0]},{"id":"05008", "name":"Nguyễn Đức Anh", "arr":[0, 5, 0, 0, 8]},{"id":"05023", "name":"Trần Văn Pháp", "arr":[0, 5, 0, 2, 3]},{"id":"05046", "name":"Nguyễn Thị Ngọc", "arr":[0, 5, 0, 4, 6]},{"id":"05461", "name":"Đàm Phi Long", "arr":[0, 5, 4, 6, 1]},{"id":"06163", "name":"Hoàng Trung Hào", "arr":[0, 6, 1, 6, 3]},{"id":"01640", "name":"Phạm Hồng Hữu Phước", "arr":[0, 1, 6, 4, 0]},{"id":"02616", "name":"Tô Ngọc Khánh Thương", "arr":[0, 2, 6, 1, 6]},{"id":"05941", "name":"Bùi Ngọc Quang", "arr":[0, 5, 9, 4, 1]},{"id":"06164", "name":"Ngô Thị Xuân Đào", "arr":[0, 6, 1, 6, 4]},{"id":"06293", "name":"Hồ Ngọc Thi", "arr":[0, 6, 2, 9, 3]},{"id":"06753", "name":"Ngô Thị Thu Hồng", "arr":[0, 6, 7, 5, 3]},{"id":"00223", "name":"Bùi Xuân Trường", "arr":[0, 0, 2, 2, 3]},{"id":"01632", "name":"Ngô Thị Làn", "arr":[0, 1, 6, 3, 2]},{"id":"01633", "name":"Vũ Thị Huệ", "arr":[0, 1, 6, 3, 3]},{"id":"01789", "name":"Nguyễn Văn Huyệt", "arr":[0, 1, 7, 8, 9]},{"id":"01918", "name":"Nguyễn Phúc Như", "arr":[0, 1, 9, 1, 8]},{"id":"02420", "name":"Hoàng Minh Thách", "arr":[0, 2, 4, 2, 0]},{"id":"03289", "name":"Nguyễn Thị Quỳnh Nga", "arr":[0, 3, 2, 8, 9]},{"id":"04998", "name":"Nguyễn Thị Bích Quỳnh", "arr":[0, 4, 9, 9, 8]},{"id":"04997", "name":"Phan Anh Bảo", "arr":[0, 4, 9, 9, 7]},{"id":"04996", "name":"Bùi Xuân Châu", "arr":[0, 4, 9, 9, 6]},{"id":"05510", "name":"Phạm Minh Hiếu", "arr":[0, 5, 5, 1, 0]},{"id":"05511", "name":"Nguyễn Tuấn Lãm", "arr":[0, 5, 5, 1, 1]},{"id":"05513", "name":"Trương Ngọc Vinh", "arr":[0, 5, 5, 1, 3]},{"id":"05518", "name":"Trần Thị Linh", "arr":[0, 5, 5, 1, 8]},{"id":"01939", "name":"Nguyễn Thị Thơm", "arr":[0, 1, 9, 3, 9]},{"id":"02417", "name":"Nguyễn Thái Học", "arr":[0, 2, 4, 1, 7]},{"id":"02755", "name":"Phạm Văn Hiếu", "arr":[0, 2, 7, 5, 5]},{"id":"03537", "name":"Nguyễn Thị Thanh Huyền", "arr":[0, 3, 5, 3, 7]},{"id":"03735", "name":"Trần Văn Vang", "arr":[0, 3, 7, 3, 5]},{"id":"04225", "name":"Phạm Tuân", "arr":[0, 4, 2, 2, 5]},{"id":"04252", "name":"Lê Duy Lương", "arr":[0, 4, 2, 5, 2]},{"id":"06643", "name":"Trịnh Phi Nhân", "arr":[0, 6, 6, 4, 3]},{"id":"06754", "name":"Võ Quốc Mạnh", "arr":[0, 6, 7, 5, 4]},{"id":"00222", "name":"Phan Thế Trí", "arr":[0, 0, 2, 2, 2]},{"id":"01305", "name":"Phan Huỳnh Thảo My", "arr":[0, 1, 3, 0, 5]},{"id":"01637", "name":"Nguyễn Văn Kiên", "arr":[0, 1, 6, 3, 7]},{"id":"02835", "name":"Trần Đình Duy", "arr":[0, 2, 8, 3, 5]},{"id":"01161", "name":"Nguyễn Tuấn Nam", "arr":[0, 1, 1, 6, 1]},{"id":"01635", "name":"Vũ Văn Minh Chiến", "arr":[0, 1, 6, 3, 5]},{"id":"04759", "name":"Vũ Văn Thắng", "arr":[0, 4, 7, 5, 9]},{"id":"05236", "name":"Nguyễn Minh Hải", "arr":[0, 5, 2, 3, 6]},{"id":"06161", "name":"Lê Văn Đức", "arr":[0, 6, 1, 6, 1]},{"id":"00240", "name":"Võ Anh Vũ", "arr":[0, 0, 2, 4, 0]},{"id":"00528", "name":"Lê Hồng Minh Tâm", "arr":[0, 0, 5, 2, 8]},{"id":"05013", "name":"Nguyễn Văn Chiến", "arr":[0, 5, 0, 1, 3]},{"id":"06217", "name":"TRƯƠNG THỊ HUỆ", "arr":[0, 6, 2, 1, 7]},{"id":"01382", "name":"Nguyễn Ngọc Phi", "arr":[0, 1, 3, 8, 2]},{"id":"00212", "name":"Võ Văn Hiếu", "arr":[0, 0, 2, 1, 2]},{"id":"03395", "name":"Lê Đức Thọ", "arr":[0, 3, 3, 9, 5]},{"id":"00416", "name":"Dương Tiến Công", "arr":[0, 0, 4, 1, 6]},{"id":"00245", "name":"Nguyễn Gia Quỳnh", "arr":[0, 0, 2, 4, 5]},{"id":"00550", "name":"Nguyễn Ngọc Thanh Tuyền", "arr":[0, 0, 5, 5, 0]},{"id":"02218", "name":"Nguyễn Phan Huỳnh Chí Tín", "arr":[0, 2, 2, 1, 8]},{"id":"03157", "name":"Lê Thị Như Thúy", "arr":[0, 3, 1, 5, 7]},{"id":"05852", "name":"Nguyễn Thị Thanh Tuyền", "arr":[0, 5, 8, 5, 2]},{"id":"00290", "name":"Lê Thị Minh Hạnh", "arr":[0, 0, 2, 9, 0]},{"id":"00529", "name":"Phạm Thị Thúy Diễm", "arr":[0, 0, 5, 2, 9]},{"id":"01790", "name":"Đoàn Thị Phương Thảo", "arr":[0, 1, 7, 9, 0]},{"id":"01920", "name":"Lê Hoàng", "arr":[0, 1, 9, 2, 0]},{"id":"04174", "name":"Cù Thanh Thương", "arr":[0, 4, 1, 7, 4]},{"id":"04600", "name":"Bùi Vân Kỳ", "arr":[0, 4, 6, 0, 0]},{"id":"05020", "name":"Đỗ Thị Thanh Nga", "arr":[0, 5, 0, 2, 0]},{"id":"05068", "name":"Trần Văn Hoài", "arr":[0, 5, 0, 6, 8]},{"id":"05239", "name":"Nguyễn Thị Thùy", "arr":[0, 5, 2, 3, 9]},{"id":"05698", "name":"Nguyễn Văn Ba", "arr":[0, 5, 6, 9, 8]},{"id":"00221", "name":"Tăng Nhân Tuyên", "arr":[0, 0, 2, 2, 1]},{"id":"00219", "name":"Nguyễn Công Quốc", "arr":[0, 0, 2, 1, 9]},{"id":"00407", "name":"Nguyễn Lâm", "arr":[0, 0, 4, 0, 7]},{"id":"00493", "name":"Hoàng Vương Kiệt", "arr":[0, 0, 4, 9, 3]},{"id":"01712", "name":"Nguyễn Mạnh Phi", "arr":[0, 1, 7, 1, 2]},{"id":"02019", "name":"Thân Thanh Quý", "arr":[0, 2, 0, 1, 9]},{"id":"01721", "name":"Nguyễn Trần Anh Vũ", "arr":[0, 1, 7, 2, 1]},{"id":"04538", "name":"Bùi Thị Mỹ Hiền", "arr":[0, 4, 5, 3, 8]},{"id":"04990", "name":"Nguyễn Thanh Thuyền", "arr":[0, 4, 9, 9, 0]},{"id":"05846", "name":"Lê Ngọc Bích", "arr":[0, 5, 8, 4, 6]},{"id":"05848", "name":"Trần Vũ Kỳ", "arr":[0, 5, 8, 4, 8]},{"id":"06058", "name":"Nguyễn Thị Kim Tuyến", "arr":[0, 6, 0, 5, 8]},{"id":"06162", "name":"Mai Thị Thu Quỳnh", "arr":[0, 6, 1, 6, 2]},{"id":"06180", "name":"Phan Văn Cường", "arr":[0, 6, 1, 8, 0]},{"id":"06181", "name":"Trần Khương Huỳnh", "arr":[0, 6, 1, 8, 1]},{"id":"06613", "name":"Nguyễn Tấn Minh", "arr":[0, 6, 6, 1, 3]},{"id":"06684", "name":"Lê Thị Hoa", "arr":[0, 6, 6, 8, 4]},{"id":"06745", "name":"Trần Ngọc Anh", "arr":[0, 6, 7, 4, 5]},{"id":"06759", "name":"Giáp Hoàng Kha", "arr":[0, 6, 7, 5, 9]},{"id":"06812", "name":"Nguyễn Thị Y Phụng", "arr":[0, 6, 8, 1, 2]},{"id":"06814", "name":"Phạm Trung Việt", "arr":[0, 6, 8, 1, 4]},{"id":"20041", "name":"Nguyễn Quốc Hải", "arr":[2, 0, 0, 4, 1]},{"id":"04530", "name":"Phan Thanh Hiếu", "arr":[0, 4, 5, 3, 0]},{"id":"04561", "name":"Huỳnh Văn Họp", "arr":[0, 4, 5, 6, 1]},{"id":"04565", "name":"Hoàng Trọng Hữu", "arr":[0, 4, 5, 6, 5]},{"id":"04758", "name":"Hồ Thanh Đại", "arr":[0, 4, 7, 5, 8]},{"id":"04797", "name":"Phạm Ngọc Minh Hùng", "arr":[0, 4, 7, 9, 7]},{"id":"04798", "name":"Trần Đình Thơ", "arr":[0, 4, 7, 9, 8]},{"id":"04799", "name":"Nguyễn Thanh Minh", "arr":[0, 4, 7, 9, 9]},{"id":"04803", "name":"Nguyễn Thái Bình", "arr":[0, 4, 8, 0, 3]},{"id":"04804", "name":"Nguyễn Văn Chiến", "arr":[0, 4, 8, 0, 4]},{"id":"05288", "name":"Võ Minh Luận", "arr":[0, 5, 2, 8, 8]},{"id":"05428", "name":"Huỳnh Công Thiện", "arr":[0, 5, 4, 2, 8]},{"id":"06622", "name":"Nguyễn Văn Phương", "arr":[0, 6, 6, 2, 2]},{"id":"20171", "name":"Võ Thị Ty", "arr":[2, 0, 1, 7, 1]},{"id":"20121", "name":"Lê Thị Dung", "arr":[2, 0, 1, 2, 1]},{"id":"20137", "name":"Chu Anh Tuấn", "arr":[2, 0, 1, 3, 7]},{"id":"20294", "name":"Võ Thị Ngọc Ánh", "arr":[2, 0, 2, 9, 4]},{"id":"04523", "name":"Mai Hoàng Long", "arr":[0, 4, 5, 2, 3]},{"id":"04638", "name":"Lê Trí Đạt", "arr":[0, 4, 6, 3, 8]},{"id":"04687", "name":"Huỳnh Thị Thủy Hạ", "arr":[0, 4, 6, 8, 7]},{"id":"04691", "name":"Hồ Văn Tiến", "arr":[0, 4, 6, 9, 1]},{"id":"04710", "name":"Nguyễn Thị Mỹ Trăm", "arr":[0, 4, 7, 1, 0]},{"id":"04832", "name":"Nguyễn Thị Phượng", "arr":[0, 4, 8, 3, 2]},{"id":"04841", "name":"Phan Hữu Thuy", "arr":[0, 4, 8, 4, 1]},{"id":"04842", "name":"Hồ Ngọc Trọng", "arr":[0, 4, 8, 4, 2]},{"id":"05356", "name":"Nguyễn Đức Nhuận", "arr":[0, 5, 3, 5, 6]},{"id":"06920", "name":"Lê Hoàng Nhân", "arr":[0, 6, 9, 2, 0]},{"id":"20116", "name":"Mai Xuân Khải", "arr":[2, 0, 1, 1, 6]},{"id":"20120", "name":"Nguyễn Đình Bảo Quốc", "arr":[2, 0, 1, 2, 0]},{"id":"20122", "name":"Lê Ngọc Hiệp", "arr":[2, 0, 1, 2, 2]},{"id":"05731", "name":"Võ Thị Thủy", "arr":[0, 5, 7, 3, 1]},{"id":"06351", "name":"Lê Nguyễn Thắng Trung", "arr":[0, 6, 3, 5, 1]},{"id":"06902", "name":"Nguyễn Đông Phương Thảo", "arr":[0, 6, 9, 0, 2]},{"id":"04880", "name":"Phùng Thị Ngọc Hà", "arr":[0, 4, 8, 8, 0]},{"id":"04071", "name":"Nguyễn Chí Dũng", "arr":[0, 4, 0, 7, 1]},{"id":"04077", "name":"Nguyễn Đức Hoàng", "arr":[0, 4, 0, 7, 7]}];
    document.getElementById("namebox").textContent = "Là Ninja nào đây?";

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
