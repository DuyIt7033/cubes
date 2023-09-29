// Lấy tham chiếu đến nút "Play" và thêm sự kiện click
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", playGame);

function playGame() {
    // Tạo hai số ngẫu nhiên từ 1 đến 6
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const cubes = document.querySelectorAll(".cube");
    cubes.forEach(cube => {
        const faces = cube.querySelectorAll(".face");
            cube.style.animation = "spin 300ms infinite linear"; 
        setTimeout(() => {
              // Xoá hiệu ứng spin trên cả hai khối lập phương bằng cách tăng thời gian lên 50000s nếu để none thì bị lỗi hiện hình ảnh
            const faces = cube.querySelectorAll(".face");
            cube.style.animation = "spin 50000s infinite linear"; 
        }, 2000);
            faces.forEach(face => {
                // Hiển thị hình ảnh tương ứng với giá trị ngẫu nhiên trên mỗi khối lập phương
             const cubeLeft = document.querySelector(".cube.left");
             const cubeRight = document.querySelector(".cube.right");
    
            cubeLeft.querySelector(".front").innerHTML = `<img src="./img/${randomNumber1}.png" alt="Image ${randomNumber1}">`;
            cubeRight.querySelector(".front").innerHTML = `<img src="./img/${randomNumber2}.png" alt="Image ${randomNumber2}">`;
            
            });
      
               
    });

    
    // So sánh hai giá trị và hiển thị kết quả
    let resultMessage = "";
    if (randomNumber1 > randomNumber2) {
        resultMessage = ` Chúc mừng player1 chiến thắng !`;
    } else if (randomNumber1 < randomNumber2) {
        resultMessage = ` Chúc mừng player2 chiến thắng !`;
    } else {
        resultMessage = "Hòa nhau !";
    }
    

    // Hiển thị kết quả và sau đó xóa giá trị sau 3 giây để trở về trạng thái chờ click
   
    setTimeout(() => {
        alert(resultMessage);
        cubes.forEach(cube => {
            cube.style.animation = "spin 5s infinite linear"; // Khôi phục hiệu ứng spin
            const faces = cube.querySelectorAll(".face");
            faces.forEach(face => {
               return;
            });
        });
     }, 3000);
    
}
