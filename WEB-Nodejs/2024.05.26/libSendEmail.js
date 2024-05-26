var nodemailer = require('nodemailer');

function sendEmail(allInformation)
{
    console.log("sendEmail", allInformation);

    // send
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'zakku.vn',
          pass: '...'
        }
      });
      
      var mailOptions = {
        from: 'zakku.vn@gmail.com',
        to: allInformation.eMail,
        subject: 'Chi tiet don hang' + allInformation.MaDonHang,
        text: "Kinh gui khach hang: " + allInformation.HoTen
        + ' .Don hang da hoan tat ' + allInformation.MaDonHang 
        + ' .Voi tong so tien la ' + allInformation.tongtien
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

}


module.exports = sendEmail;