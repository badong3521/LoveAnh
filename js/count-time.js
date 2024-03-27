document.addEventListener('DOMContentLoaded', function () {
    const startDate = new Date('2024-03-23');
    const currentDate = new Date();

    // Tính toán số ngày
    const differenceInTime = currentDate.getTime() - startDate.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    // Cập nhật số ngày lên trên trang web
    document.getElementById('countdown').innerText = differenceInDays > 0 ? differenceInDays + " ngày" : "Chưa đến ngày 23/03/2024";
});