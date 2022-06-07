const router= require('express').Router();
const nodemailer= require('nodemailer');

router.post('/contact', (req, res) => {
    //tomo data del body
    let data = req.body;
    if(data.name.length===0 || data.email.length===0 || data.msg.length===0){
        return res.json({msg: 'Please fill all the fields'})
    }
    //tres pasos para enviar un correo
//1. crear transporter object
//2. crear set mailing option object
//3. enviar el correo
        //paso 1
        let smtpTransporter = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth:{
                user:'lucianachamorro87@gmail.com',
                pass:'cmvyedxzxdfoinkw'
            }
        })
        //paso 2 mail options
        let mailOptions = {
            from: data.email,
            to: 'luciana_chamorro@yahoo.com.ar' ,
            subject: 'Contact from '+data.name,
            html: `
            <h2>Contact from ${data.name}</h2>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                <p>Message: ${data.msg}</p>
            </ul>

            `
    }
    //paso 3 enviar mail
    smtpTransporter.sendMail(mailOptions, (err, info) => {
        try{
            if(err){
                return res.status(400).json({msg: 'Fill all fields'})
            }
         res.status(200).json({msg: 'Message sent, thanks for contacting Luciana!'})

        }catch(err){
            if(err) return res.status(500).json({msg: 'Server error'})
            }
  
        })
        
    })
module.exports = router;
