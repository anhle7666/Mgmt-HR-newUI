import jsPDF from "jspdf";
import "jspdf-autotable";
import RobotoFont from "../../../../../assets/fonts/Roboto-Regular.ttf";

const exportToPDF = (data) => {
    const orientation = "portrait";
    const unit = "pt";
    const size = "A4";

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.addFont(RobotoFont, "Roboto", "normal", undefined);
    doc.setFont("Roboto");

    doc.setFontSize(15);
    doc.text(`Sơ yếu lí lịch ${data.firstName} ${data.lastName}`, marginLeft, 40);

    doc.setFontSize(12);

    const headers = [["Thông tin", "Nhân viên"]];
    const dataValues = [
        ["Họ", data.firstName],
        ["Tên Đệm và Tên", data.lastName],
        ["Giới tính", data.gender],
        ["Ngày sinh", data.birthday],
        ["Email", data.emailAddress],
        ["CMND", data.cmnd],
        ["Vị trí", data.position],
        ["Ngày làm việc", data.startDate],
        ["Trình độ học vấn", data.literacy],
        ["Năm tốt nghiệp", data.graduationYear],
        ["Trường", data.university],
        ["Mã số thuế", data.tax],
        ["Quốc tịch", data.country],
        ["Tỉnh / Thành phố", data.city],
        ["Quận / Huyện", data.districts],
        ["Phường / Xã", data.ward],
    ];

    const content = {
        startY: 70,
        head: headers,
        body: dataValues,
        styles: { font: "Roboto", style: "normal" },
    };

    doc.autoTable(content);
    const font = doc.getFont();
    console.log(font);
    doc.save(`${data.IDEmployee}_${data.firstName}-${data.lastName}.pdf`);
};

export default exportToPDF;
