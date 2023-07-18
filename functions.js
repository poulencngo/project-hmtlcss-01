var links = document.querySelectorAll('.navbar a');

links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Ngăn chặn hành vi mặc định khi click liên kết

        // Xóa lớp 'active' khỏi tất cả các liên kết
        links.forEach(function (link) {
            link.classList.remove('active');
        });

        // Thêm lớp 'active' cho liên kết đang được click
        this.classList.add('active');
    });
});
